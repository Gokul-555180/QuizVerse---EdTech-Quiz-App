import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { 
  X, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Volume2, 
  VolumeX,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "../utils/sound";

const SECONDS_PER_QUESTION = 15;

function QuizPageContent() {
  const {
    questions,
    currentQuestion,
    submitAnswer,
    nextQuestion,
    finishQuiz,
    isMuted,
    toggleMute
  } = useQuiz();

  const navigate = useNavigate();

  // Local states reset automatically when key (currentQuestion) changes
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  
  const timeSpentRef = useRef(0);
  const timerIntervalRef = useRef(null);

  const currentQObj = questions[currentQuestion] || null;

  // Handle timeout wrapped in useCallback to stabilize dependency
  const handleTimeOut = useCallback(() => {
    setSelectedOption(-1); // -1 indicates timeout
    setHasAnswered(true);
    submitAnswer(-1, false, SECONDS_PER_QUESTION);
  }, [submitAnswer]);

  // Set up timer effect
  useEffect(() => {
    if (!currentQObj) return;

    timerIntervalRef.current = setInterval(() => {
      timeSpentRef.current += 1;
      
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
          handleTimeOut();
          return 0;
        }

        // Play woodblock ticks on final seconds
        if (prev <= 6) {
          playSound("tick", isMuted);
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [currentQObj, isMuted, handleTimeOut]);

  const handleOptionSelect = (optionIdx) => {
    if (hasAnswered) return;
    
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setSelectedOption(optionIdx);
    setHasAnswered(true);

    const isCorrect = optionIdx === currentQObj.answerIndex;
    const timeSpent = timeSpentRef.current;
    
    submitAnswer(optionIdx, isCorrect, timeSpent);
  };

  const handleNextClick = () => {
    playSound("click", isMuted);
    if (currentQuestion < questions.length - 1) {
      nextQuestion();
    } else {
      finishQuiz().then(() => {
        navigate("/result");
      });
    }
  };

  const handleQuitConfirm = () => {
    playSound("click", isMuted);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    navigate("/");
  };

  if (!currentQObj) return null;

  // Circular timer details (Apple watch style)
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / SECONDS_PER_QUESTION) * circumference;

  const isTimeLow = timeLeft <= 5;
  const progressPercent = Math.round(((currentQuestion) / questions.length) * 100);

  return (
    <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full py-4 relative">
      
      {/* QUIT CONFIRM MODAL OVERLAY */}
      <AnimatePresence>
        {showQuitConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel p-6 max-w-sm w-full mx-4 shadow-2xl flex flex-col items-center text-center gap-4 border border-solid border-red-500/20"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-title">Forfeit Battle?</h3>
              <p className="text-xs text-text-secondary">
                Are you sure you want to quit? You will lose all XP and progress gained in this trial.
              </p>
              <div className="flex gap-3 w-full mt-2">
                <button
                  onClick={() => {
                    playSound("click", isMuted);
                    setShowQuitConfirm(false);
                  }}
                  className="flex-1 py-2.5 border border-solid border-slate-200 dark:border-slate-800 bg-transparent text-text-primary text-xs font-semibold rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleQuitConfirm}
                  className="flex-1 py-2.5 border-0 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold rounded-xl cursor-pointer shadow-md transition-colors"
                >
                  Forfeit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUIZ MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="glass-panel p-6 md:p-8 w-full shadow-2xl relative"
      >
        {/* Header toolbar */}
        <div className="flex justify-between items-center mb-6">
          {/* Category & Info */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] tracking-widest font-bold text-primary dark:text-accent uppercase">
              {currentQObj.category} • {currentQObj.difficulty}
            </span>
            <h2 className="text-sm font-semibold text-text-secondary">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                toggleMute();
                playSound("click", !isMuted);
              }}
              className="p-2 border-0 bg-transparent rounded-lg text-text-secondary hover:text-text-primary dark:hover:text-white cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            {/* Exit/Quit */}
            <button
              onClick={() => {
                playSound("click", isMuted);
                setShowQuitConfirm(true);
              }}
              className="p-2 border-0 bg-red-500/10 hover:bg-red-500/20 rounded-lg text-red-500 cursor-pointer transition-colors"
              title="Quit quiz"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-2.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full shimmer"
          />
        </div>

        {/* Question & Circular Timer display */}
        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-start mb-8">
          {/* Question Text */}
          <h3 className="text-xl md:text-2xl font-bold font-title text-text-primary leading-tight flex-1">
            {currentQObj.question}
          </h3>

          {/* Apple Watch Inspired Timer Ring */}
          <div className={`relative flex items-center justify-center w-14 h-14 rounded-full flex-shrink-0 select-none ${isTimeLow ? 'pulse-warning bg-red-500/5' : ''}`}>
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r={radius}
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeWidth="4.5"
                fill="transparent"
              />
              <motion.circle
                cx="28"
                cy="28"
                r={radius}
                className={isTimeLow ? "stroke-red-500" : "stroke-primary dark:stroke-accent"}
                strokeWidth="4.5"
                fill="transparent"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.3, ease: "linear" }}
              />
            </svg>
            <span className={`absolute text-xs font-bold font-title ${isTimeLow ? 'text-red-500' : 'text-text-primary'}`}>
              {timeLeft}
            </span>
          </div>
        </div>

        {/* Answer Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {currentQObj.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectAnswer = idx === currentQObj.answerIndex;
            const isWrongSelection = isSelected && !isCorrectAnswer;
            
            // Styling modifiers
            let optionClass = "bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-primary/20 text-text-primary";
            
            if (hasAnswered) {
              if (isCorrectAnswer) {
                optionClass = "bg-green-500/10 dark:bg-green-500/20 border-green-500 text-green-700 dark:text-green-400 font-semibold shadow-md shadow-green-500/5 scale-102";
              } else if (isWrongSelection) {
                optionClass = "bg-red-500/10 dark:bg-red-500/20 border-red-500 text-red-700 dark:text-red-400 font-semibold shake-element";
              } else {
                optionClass = "opacity-40 border-slate-200 dark:border-slate-800 text-text-secondary cursor-not-allowed";
              }
            }

            return (
              <motion.button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleOptionSelect(idx)}
                whileHover={!hasAnswered ? { y: -3, boxShadow: "0 8px 24px rgba(31, 38, 135, 0.08)" } : {}}
                whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                className={`p-4 rounded-xl border border-solid text-left cursor-pointer transition-all flex items-center justify-between gap-3 text-sm font-medium ${optionClass}`}
              >
                <span>{option}</span>
                {hasAnswered && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                )}
                {hasAnswered && isWrongSelection && (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* FEEDBACK & EXPLANATION PANEL */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-panel p-4 mb-6 border-l-4 border-solid border-l-primary dark:border-l-accent flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-primary dark:text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent font-title">
                    Pedagogical Breakdown
                  </span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {currentQObj.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* NEXT / SUBMIT NAVIGATION BUTTON */}
        {hasAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-end"
          >
            <button
              onClick={handleNextClick}
              className="py-3 px-6 flex items-center gap-2 border-0 bg-primary hover:bg-primary-glow text-white text-xs font-bold rounded-xl cursor-pointer shadow-lg hover:shadow-primary/20 transition-all hover:translate-y-[-2px]"
            >
              {currentQuestion < questions.length - 1 ? "Next Trial" : "Claim Victory"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// Wrapper component to enable automatic state resets on question transitions
export default function QuizPage() {
  const { playerName, questions, currentQuestion } = useQuiz();
  const navigate = useNavigate();

  // Guard: if no player or questions, send back to landing
  useEffect(() => {
    if (!playerName || !questions || questions.length === 0) {
      navigate("/");
    }
  }, [playerName, questions, navigate]);

  if (!playerName || !questions || questions.length === 0) return null;

  return <QuizPageContent key={currentQuestion} />;
}