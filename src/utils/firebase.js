// Client-side LocalStorage database engine replacing Firebase configuration
// This maintains the exact same exported contracts, keeping the app 100% functional

const getLocalData = (key, defaultVal) => {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : defaultVal;
  } catch {
    return defaultVal;
  }
};

const setLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Local storage write error:", error);
  }
};

// Emulated collections
const getLocalUsers = () => getLocalData("quizverse_users", {});
const getLocalLeaderboard = () => getLocalData("quizverse_leaderboard", []);

const updateLocalLeaderboard = (userProfile) => {
  const leaderboard = getLocalLeaderboard();
  const existingIdx = leaderboard.findIndex(
    (u) => u.playerName.toLowerCase() === userProfile.playerName.toLowerCase()
  );
  
  const leaderboardEntry = {
    playerName: userProfile.playerName,
    xp: userProfile.xp,
    accuracy: userProfile.accuracy,
    quizzesPlayed: userProfile.quizzesPlayed,
    bestStreak: userProfile.bestStreak,
    level: userProfile.level,
    updatedAt: new Date().toISOString()
  };

  if (existingIdx >= 0) {
    leaderboard[existingIdx] = leaderboardEntry;
  } else {
    leaderboard.push(leaderboardEntry);
  }

  // Sort by XP descending, then bestStreak descending
  leaderboard.sort((a, b) => b.xp - a.xp || b.bestStreak - a.bestStreak);
  
  setLocalData("quizverse_leaderboard", leaderboard);
  
  // Dispatch local storage update event for live updates
  window.dispatchEvent(new Event("quizverse_leaderboard_updated"));
};

/**
 * Register or load a user profile by name.
 * @param {string} name - Player name
 * @returns {Promise<object>} User profile details
 */
export const registerPlayer = async (name) => {
  const trimmedName = name.trim();
  if (!trimmedName) throw new Error("Name cannot be empty");

  const users = getLocalUsers();
  const lowerName = trimmedName.toLowerCase();
  
  if (users[lowerName]) {
    const user = users[lowerName];
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    // Check and update daily streak
    if (user.lastActiveDate === yesterday) {
      user.dailyStreak += 1;
    } else if (user.lastActiveDate !== today) {
      user.dailyStreak = 1;
    }
    user.lastActiveDate = today;
    users[lowerName] = user;
    setLocalData("quizverse_users", users);
    updateLocalLeaderboard(user);
    return user;
  } else {
    const newProfile = {
      playerName: trimmedName,
      xp: 0,
      level: 1,
      quizzesPlayed: 0,
      questionsAttempted: 0,
      correctAnswers: 0,
      accuracy: 0,
      bestStreak: 0,
      averageTime: 0,
      achievements: [],
      history: [],
      dailyStreak: 1,
      lastActiveDate: new Date().toDateString(),
      createdAt: new Date().toISOString()
    };
    users[lowerName] = newProfile;
    setLocalData("quizverse_users", users);
    updateLocalLeaderboard(newProfile);
    return newProfile;
  }
};

/**
 * Update user's progress and stats after completing a quiz
 * @param {string} playerName - Player name
 * @param {object} quizStats - stats including correct, total, xpGained, streak, difficulty, category, timeTaken
 * @returns {Promise<object>} The updated user profile
 */
export const saveQuizRecord = async (playerName, quizStats) => {
  const lowerName = playerName.toLowerCase();
  const { correct, total, xpGained, streak, difficulty, category, timeTaken } = quizStats;
  
  const calculateLevel = (xp) => {
    return Math.floor(Math.sqrt(xp / 100)) + 1;
  };

  const newHistoryEntry = {
    id: Date.now().toString(),
    category,
    difficulty,
    totalQuestions: total,
    correctAnswers: correct,
    xpGained,
    bestStreak: streak,
    averageTime: parseFloat((timeTaken / total).toFixed(1)),
    date: new Date().toISOString()
  };

  const users = getLocalUsers();
  const user = users[lowerName];

  if (!user) throw new Error("Player profile not found in storage");

  const newXP = user.xp + xpGained;
  const newLevel = calculateLevel(newXP);
  const newQuizzesPlayed = user.quizzesPlayed + 1;
  const newQuestionsAttempted = user.questionsAttempted + total;
  const newCorrectAnswers = user.correctAnswers + correct;
  const newAccuracy = Math.round((newCorrectAnswers / newQuestionsAttempted) * 100);
  const newBestStreak = Math.max(user.bestStreak, streak);
  const newAverageTime = parseFloat(
    ((user.averageTime * user.quizzesPlayed + (timeTaken / total)) / newQuizzesPlayed).toFixed(1)
  );

  // Check achievements
  const achievements = [...user.achievements];
  const checkAndAddBadge = (badgeName) => {
    if (!achievements.includes(badgeName)) {
      achievements.push(badgeName);
    }
  };

  checkAndAddBadge("Genesis");
  if (correct === total) checkAndAddBadge("Perfect Score");
  if (newXP >= 1000) checkAndAddBadge("XP Master");
  if (newBestStreak >= 5) checkAndAddBadge("Streak Mastery");
  if (timeTaken / total <= 3) checkAndAddBadge("Speed Demon");
  if (difficulty === "Hard" && correct === total) checkAndAddBadge("Category Master");
  if (user.dailyStreak >= 3) checkAndAddBadge("Consistency Badge");

  const updatedProfile = {
    ...user,
    xp: newXP,
    level: newLevel,
    quizzesPlayed: newQuizzesPlayed,
    questionsAttempted: newQuestionsAttempted,
    correctAnswers: newCorrectAnswers,
    accuracy: newAccuracy,
    bestStreak: newBestStreak,
    averageTime: newAverageTime,
    achievements,
    history: [newHistoryEntry, ...user.history]
  };

  users[lowerName] = updatedProfile;
  setLocalData("quizverse_users", users);
  updateLocalLeaderboard(updatedProfile);

  return updatedProfile;
};

/**
 * Fetch top entries on the global leaderboard
 * @param {number} rankLimit - Max entries to retrieve (default 10)
 * @returns {Promise<array>} Array of leaderboard user objects
 */
export const getLeaderboard = async (rankLimit = 10) => {
  const lb = getLocalLeaderboard();
  return lb.slice(0, rankLimit);
};

/**
 * Subscribe to real-time leaderboard updates
 * @param {function} callback - callback trigger
 * @returns {function} Unsubscribe function
 */
export const subscribeLeaderboard = (callback) => {
  const handleUpdate = () => {
    callback(getLocalLeaderboard().slice(0, 10));
  };
  
  window.addEventListener("quizverse_leaderboard_updated", handleUpdate);
  // Call immediately
  handleUpdate();
  
  return () => {
    window.removeEventListener("quizverse_leaderboard_updated", handleUpdate);
  };
};
