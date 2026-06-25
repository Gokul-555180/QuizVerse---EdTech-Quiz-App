/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import { registerPlayer, saveQuizRecord } from "../utils/firebase";
import { allQuestions } from "../data/questions";
import { playSound } from "../utils/sound";


const QuizContext = createContext();

export function QuizProvider({ children }) {
  // Global States
  const [playerName, setPlayerNameState] = useState(() => {
    return localStorage.getItem("quizverse_current_player") || "";
  });
  const [userProfile, setUserProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("quizverse_muted") === "true";
  });

  // Active Quiz Config & Progress States
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  
  // Tracking performance in current quiz
  const [timeTaken, setTimeTaken] = useState(0); // in seconds
  const [answersHistory, setAnswersHistory] = useState([]); // [{ questionId, answeredIndex, isCorrect, timeSpent }]
  const [unlockedBadgesThisQuiz, setUnlockedBadgesThisQuiz] = useState([]);
  const [xpGainedThisQuiz, setXpGainedThisQuiz] = useState(0);

  // Load profile when playerName changes (either from storage or sign-in)
  useEffect(() => {
    if (playerName) {
      Promise.resolve().then(() => setLoadingProfile(true));
      registerPlayer(playerName)
        .then((profile) => {
          setUserProfile(profile);
          setLoadingProfile(false);
        })
        .catch((err) => {
          console.error("Failed to load player profile:", err);
          setLoadingProfile(false);
        });
    } else {
      Promise.resolve().then(() => setUserProfile(null));
    }
  }, [playerName]);

  // Set Player Name
  const loginPlayer = async (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setPlayerNameState(trimmed);
    localStorage.setItem("quizverse_current_player", trimmed);
  };

  // Logout Player
  const logoutPlayer = () => {
    setPlayerNameState("");
    setUserProfile(null);
    localStorage.removeItem("quizverse_current_player");
  };

  // Toggle Mute sound
  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("quizverse_muted", String(next));
      return next;
    });
  };

  // Start a new Quiz session
  const startQuizSetup = (selectedCat, selectedDiff) => {
    setCategory(selectedCat);
    setDifficulty(selectedDiff);
    
    // Fetch and filter questions
    const catQuestions = allQuestions[selectedCat] || [];
    const filtered = catQuestions.filter((q) => q.difficulty === selectedDiff);
    
    // Shuffle and pick 8 questions (or all if less than 8, but we have exactly 8)
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    setQuestions(shuffled);
    
    // Reset Quiz stats
    setScore(0);
    setCurrentQuestion(0);
    setStreak(0);
    setBestStreak(0);
    setTimeTaken(0);
    setAnswersHistory([]);
    setUnlockedBadgesThisQuiz([]);
    setXpGainedThisQuiz(0);
  };

  // Submit an answer for the current question
  const submitAnswer = (optionIndex, isCorrect, timeSpent) => {
    // Play sounds
    if (isCorrect) {
      playSound("success", isMuted);
    } else {
      playSound("error", isMuted);
    }

    // Update state
    const newScore = isCorrect ? score + 1 : score;
    const newStreak = isCorrect ? streak + 1 : 0;
    const newBestStreak = Math.max(bestStreak, newStreak);
    
    setScore(newScore);
    setStreak(newStreak);
    setBestStreak(newBestStreak);
    setTimeTaken((prev) => prev + timeSpent);

    const questionObj = questions[currentQuestion];
    setAnswersHistory((prev) => [
      ...prev,
      {
        questionId: questionObj.id,
        questionText: questionObj.question,
        options: questionObj.options,
        correctIndex: questionObj.answerIndex,
        answeredIndex: optionIndex,
        isCorrect,
        timeSpent,
        explanation: questionObj.explanation
      }
    ]);
  };

  // Move to next question
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  // Finish the Quiz and save records
  const finishQuiz = async () => {
    if (!playerName || questions.length === 0) return;

    // Calculate XP
    // Easy: +10 XP per correct; Medium: +20 XP; Hard: +30 XP
    let pointsPerCorrect = 10;
    if (difficulty === "Medium") pointsPerCorrect = 20;
    if (difficulty === "Hard") pointsPerCorrect = 30;

    let xpGained = score * pointsPerCorrect;

    // Speed bonus (+5 XP per correct answer answered in < 3s)
    let speedBonus = 0;
    answersHistory.forEach((ans) => {
      if (ans.isCorrect && ans.timeSpent < 3) {
        speedBonus += 5;
      }
    });
    
    // Perfect Score bonus (+100 XP)
    let perfectBonus = 0;
    if (score === questions.length) {
      perfectBonus = 100;
    }

    // Streak bonus (+2 XP per item in bestStreak)
    let streakBonus = bestStreak * 2;

    const totalXpGained = xpGained + speedBonus + perfectBonus + streakBonus;
    setXpGainedThisQuiz(totalXpGained);

    const stats = {
      correct: score,
      total: questions.length,
      xpGained: totalXpGained,
      streak: bestStreak,
      difficulty,
      category,
      timeTaken
    };

    try {
      // Save stats to cloud/local DB
      const updatedProfile = await saveQuizRecord(playerName, stats);
      
      // Calculate what badges were unlocked in this specific quiz
      const newBadges = updatedProfile.achievements.filter(
        (badge) => !userProfile?.achievements?.includes(badge)
      );
      setUnlockedBadgesThisQuiz(newBadges);

      // Play completion sound
      playSound("complete", isMuted);
      
      // Update local profile state
      setUserProfile(updatedProfile);
    } catch (e) {
      console.error("Error saving quiz attempt:", e);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setStreak(0);
    setBestStreak(0);
    setTimeTaken(0);
    setAnswersHistory([]);
  };

  return (
    <QuizContext.Provider
      value={{
        playerName,
        loginPlayer,
        logoutPlayer,
        userProfile,
        loadingProfile,
        isMuted,
        toggleMute,
        
        // Quiz states
        category,
        difficulty,
        questions,
        currentQuestion,
        score,
        streak,
        bestStreak,
        timeTaken,
        answersHistory,
        unlockedBadgesThisQuiz,
        xpGainedThisQuiz,
        
        // Quiz control functions
        startQuizSetup,
        submitAnswer,
        nextQuestion,
        finishQuiz,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  return useContext(QuizContext);
}