import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { 
  Trophy, 
  Award, 
  Clock, 
  Zap, 
  Percent, 
  RefreshCw, 
  LayoutDashboard, 
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playSound } from "../utils/sound";

export default function ResultPage() {
  const {
    playerName,
    questions,
    score,
    bestStreak,
    timeTaken,
    unlockedBadgesThisQuiz,
    xpGainedThisQuiz,
    category,
    resetQuiz,
    isMuted
  } = useQuiz();

  const navigate = useNavigate();

  // Guard: if no player or score info, send to landing
  useEffect(() => {
    if (!playerName || questions.length === 0) {
      navigate("/");
      return;
    }

    // Trigger beautiful confetti burst
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Fast burst on load
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    // If perfect score, trigger continuous side launches
    if (score === questions.length) {
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, animate them from the top/sides
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  }, [playerName, questions, score, navigate]);

  const handlePlayAgain = () => {
    playSound("click", isMuted);
    resetQuiz();
    navigate("/");
  };

  const handleGoDashboard = () => {
    playSound("click", isMuted);
    navigate("/dashboard");
  };

  const handleGoLeaderboard = () => {
    playSound("click", isMuted);
    navigate("/leaderboard");
  };

  if (questions.length === 0) return null;

  // Calculate metrics
  const accuracy = Math.round((score / questions.length) * 100);
  const avgTime = parseFloat((timeTaken / questions.length).toFixed(1));

  // Determine motivational copy
  let motivationalMessage = "Keep training, Gladiator! Coding is a journey of perseverance. Review your mistakes and try again.";
  let rankTitle = "Gladiator Apprentice";
  
  if (accuracy === 100) {
    motivationalMessage = "Legendary! You've achieved absolute perfection. Master of the technology!";
    rankTitle = "Grandmaster Architect";
  } else if (accuracy >= 75) {
    motivationalMessage = "Outstanding! Excellent performance. You are well on your way to senior engineering!";
    rankTitle = "Elite Tech Lead";
  } else if (accuracy >= 50) {
    motivationalMessage = "Good job! A solid score. Keep practicing to sharpen your developer edge.";
    rankTitle = "Core Developer";
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
  };

  return (
    <div className="flex-1 flex items-center justify-center max-w-4xl mx-auto w-full py-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full"
      >
        {/* Left Side: Score summary and celebration card */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-5 glass-panel p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden"
        >
          {/* Decorative glowing gradient circle */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-primary/10 to-accent/20 blur-2xl top-10 left-10 pointer-events-none"></div>

          <span className="text-[10px] tracking-widest font-bold text-primary dark:text-accent uppercase mb-1">
            Trial Completed • {category}
          </span>
          <h2 className="text-2xl font-bold font-title text-text-primary mb-6">
            Victory Verdict
          </h2>

          {/* Large Circular Score visual */}
          <div className="relative w-40 h-40 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="70"
                className="stroke-slate-200 dark:stroke-slate-800"
                strokeWidth="8"
                fill="transparent"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="70"
                className="stroke-primary dark:stroke-accent"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 70}
                initial={{ strokeDashoffset: 2 * Math.PI * 70 }}
                animate={{ strokeDashoffset: (2 * Math.PI * 70) - (accuracy / 100) * (2 * Math.PI * 70) }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center select-none">
              <span className="text-4xl font-extrabold font-title text-text-primary leading-none">
                {score}/{questions.length}
              </span>
              <span className="text-xs text-text-secondary font-medium mt-1">
                {accuracy}% Accuracy
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold font-title text-primary dark:text-accent mb-2">
            {rankTitle}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed px-2">
            {motivationalMessage}
          </p>
        </motion.div>

        {/* Right Side: Performance stats, rewards and navigation */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* Rewards Card (XP and Badges Unlocked) */}
          <motion.div variants={itemVariants} className="glass-panel p-6 shadow-xl relative overflow-hidden">
            <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
              <Award className="w-24 h-24 text-text-primary" />
            </div>

            <h3 className="text-sm font-bold font-title text-text-primary mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-primary dark:text-accent" />
              Trial Spoils & Badges
            </h3>

            <div className="flex flex-col gap-4">
              {/* XP Gains arced bar */}
              <div className="flex justify-between items-center bg-primary/5 dark:bg-accent/5 p-4 rounded-xl">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-text-secondary">Experience Acquired</span>
                  <span className="text-xl font-extrabold font-title text-text-primary">
                    +{xpGainedThisQuiz} XP
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary dark:text-accent text-xs font-bold font-title">
                  Level progress boosted
                </div>
              </div>

              {/* Badges Unlocked list */}
              <div>
                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mb-2">
                  Unlocked Badges
                </span>
                
                {unlockedBadgesThisQuiz.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {unlockedBadgesThisQuiz.map((badge) => (
                      <div 
                        key={badge}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 border border-solid border-yellow-500/20 text-xs font-bold"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-spin" />
                        {badge}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-text-secondary italic">
                    No new achievements unlocked in this trial. Play harder categories to claim badges!
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Stats Breakdown Card Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            {/* Accuracy */}
            <div className="glass-panel p-4 flex flex-col gap-1 items-center shadow-md">
              <Percent className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-bold font-title text-text-primary">{accuracy}%</span>
              <span className="text-[10px] text-text-secondary uppercase">Accuracy</span>
            </div>
            
            {/* Best Streak */}
            <div className="glass-panel p-4 flex flex-col gap-1 items-center shadow-md">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-bold font-title text-text-primary">{bestStreak}x</span>
              <span className="text-[10px] text-text-secondary uppercase">Best Streak</span>
            </div>
            
            {/* Avg Response Time */}
            <div className="glass-panel p-4 flex flex-col gap-1 items-center shadow-md">
              <Clock className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-bold font-title text-text-primary">{avgTime}s</span>
              <span className="text-[10px] text-text-secondary uppercase">Avg Response</span>
            </div>
          </motion.div>

          {/* Action Navigation Panels */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            {/* Play Again */}
            <button
              onClick={handlePlayAgain}
              className="flex-1 py-4 flex items-center justify-center gap-2 border-0 bg-primary hover:bg-primary-glow text-white font-bold text-xs rounded-xl cursor-pointer shadow-lg hover:shadow-primary/20 transition-all hover:translate-y-[-2px]"
            >
              <RefreshCw className="w-4 h-4" />
              Play Another Trial
            </button>

            {/* Dashboard */}
            <button
              onClick={handleGoDashboard}
              className="flex-1 py-4 flex items-center justify-center gap-2 border border-solid border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-text-primary font-bold text-xs rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-all hover:translate-y-[-2px]"
            >
              <LayoutDashboard className="w-4 h-4" />
              View Dashboard
            </button>

            {/* Leaderboard */}
            <button
              onClick={handleGoLeaderboard}
              className="flex-1 py-4 flex items-center justify-center gap-2 border border-solid border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-text-primary font-bold text-xs rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-950 transition-all hover:translate-y-[-2px]"
            >
              <Trophy className="w-4 h-4" />
              Leaderboard
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
