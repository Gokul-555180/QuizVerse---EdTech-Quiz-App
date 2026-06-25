import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { 
  Trophy, 
  Award, 
  Clock, 
  Zap, 
  Play,
  Calendar,
  Sparkles,
  Shield,
  Activity,
  History,
  TrendingUp,
  BarChart3,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import { playSound } from "../utils/sound";


export default function Dashboard() {
  const { 
    playerName, 
    userProfile, 
    loadingProfile, 
    resetQuiz,
    logoutPlayer,
    isMuted 
  } = useQuiz();
  const navigate = useNavigate();

  // Guard: redirect to landing if no active player session
  useEffect(() => {
    if (!playerName && !loadingProfile) {
      navigate("/");
    }
  }, [playerName, loadingProfile, navigate]);

  const handleStartNew = () => {
    playSound("click", isMuted);
    resetQuiz();
    navigate("/");
  };

  const handleLogout = () => {
    playSound("click", isMuted);
    logoutPlayer();
    navigate("/");
  };

  if (loadingProfile || !userProfile) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 rounded-full border-4 border-solid border-slate-200 border-t-primary animate-spin mb-4"></div>
        <span className="text-sm text-text-secondary font-medium">Reconstructing Arena Profile...</span>
      </div>
    );
  }

  // Calculate advanced profile metrics
  const {
    xp,
    level,
    quizzesPlayed,
    questionsAttempted,
    correctAnswers,
    accuracy,
    bestStreak,
    averageTime,
    achievements,
    history,
    dailyStreak
  } = userProfile;

  // 1. Calculate category strengths / weaknesses
  const categoryStats = {}; // { Category: { correct, total } }
  history.forEach((attempt) => {
    if (!categoryStats[attempt.category]) {
      categoryStats[attempt.category] = { correct: 0, total: 0 };
    }
    categoryStats[attempt.category].correct += attempt.correctAnswers;
    categoryStats[attempt.category].total += attempt.totalQuestions;
  });

  let strongestCategory = "N/A";
  let weakestCategory = "N/A";
  let maxAcc = -1;
  let minAcc = 101;

  Object.keys(categoryStats).forEach((cat) => {
    const acc = (categoryStats[cat].correct / categoryStats[cat].total) * 100;
    if (acc > maxAcc) {
      maxAcc = acc;
      strongestCategory = cat;
    }
    if (acc < minAcc) {
      minAcc = acc;
      weakestCategory = cat;
    }
  });

  // Gamified Badges library
  const allBadges = [
    { name: "Genesis", label: "Genesis Badge", desc: "Successfully completed your first arena trial", icon: Sparkles, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    { name: "Perfect Score", label: "Perfect Score", desc: "Answered 100% of questions correctly in a single quiz", icon: Trophy, color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
    { name: "Streak Mastery", label: "Streak Master", desc: "Achieved a streak of 5+ correct answers", icon: Zap, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    { name: "Speed Demon", label: "Speed Demon", desc: "Averaged less than 3 seconds per answer in a trial", icon: Clock, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    { name: "Category Master", label: "Category Master", desc: "Scored 100% on a Hard difficulty trial", icon: Award, color: "bg-rose-500/10 text-rose-500 border-rose-500/20" },
    { name: "Consistency Badge", label: "Consistency Badge", desc: "Maintained a daily login streak of 3+ days", icon: Shield, color: "bg-green-500/10 text-green-500 border-green-500/20" },
    { name: "XP Master", label: "XP Master", desc: "Amassed over 1,000 global Experience Points (XP)", icon: Activity, color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" }
  ];

  // SVG Chart: compute polyline coordinates based on last 10 attempts
  const recentHistory = [...history].reverse().slice(-10); // reverse to chronological order
  const chartHeight = 100;
  const chartWidth = 500;
  
  // Calculate SVG coordinates for line chart (recent history XP)
  const initialBaseXp = Math.max(0, xp - recentHistory.reduce((acc, curr) => acc + curr.xpGained, 0));
  
  const xpPoints = [];
  let tempXp = initialBaseXp;
  for (let i = 0; i < recentHistory.length; i++) {
    tempXp += recentHistory[i].xpGained;
    xpPoints.push({ x: i, y: tempXp });
  }

  const maxYVal = Math.max(...xpPoints.map(p => p.y), 100);
  const minYVal = Math.min(...xpPoints.map(p => p.y), 0);
  const yRange = maxYVal - minYVal || 1;

  const pointsString = xpPoints.map((p, idx) => {
    const xCoord = (idx / (xpPoints.length - 1 || 1)) * (chartWidth - 40) + 20;
    const yCoord = chartHeight - ((p.y - minYVal) / yRange) * (chartHeight - 30) - 15;
    return `${xCoord},${yCoord}`;
  }).join(" ");

  // Animations config
  const cardGridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
  };

  return (
    <div className="flex-1 flex flex-col gap-6 py-4">
      
      {/* Upper toolbar banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          {/* Circular avatar */}
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-extrabold shadow-lg border border-solid border-white/20 select-none">
            {playerName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold font-title text-text-primary">
              Gladiator Central
            </h1>
            <p className="text-xs text-text-secondary">
              Logged in as <span className="font-semibold">{playerName}</span> • Rank: Level {level}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleStartNew}
            className="py-2.5 px-4 flex items-center gap-2 border-0 bg-primary hover:bg-primary-glow text-white text-xs font-bold rounded-xl cursor-pointer shadow hover:shadow-primary/25 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            Enter Trials
          </button>
          
          <button
            onClick={handleLogout}
            className="py-2.5 px-3 flex items-center gap-2 border border-solid border-slate-200 dark:border-slate-800 bg-transparent text-red-500 text-xs font-bold rounded-xl cursor-pointer hover:bg-red-500/5 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      {/* CORE STATS GRID */}
      <motion.div 
        variants={cardGridVariants} 
        initial="hidden" 
        animate="visible" 
        className="grid grid-cols-2 md:grid-cols-6 gap-4"
      >
        {/* Level & XP progress */}
        <motion.div variants={itemVariants} className="col-span-2 glass-panel p-4 flex flex-col shadow-md justify-between relative overflow-hidden">
          <div className="absolute right-[-10px] top-[-10px] opacity-5 pointer-events-none">
            <Award className="w-24 h-24 text-text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-text-secondary uppercase">Progression Rank</span>
            <span className="text-2xl font-black font-title text-primary dark:text-accent">Level {level}</span>
          </div>
          {/* XP Bar */}
          <div className="flex flex-col gap-1.5 mt-4">
            <div className="flex justify-between text-[10px] font-semibold text-text-secondary">
              <span>{xp} Total XP</span>
              {/* Level brackets: Next level is Level + 1. XP limit = Level^2 * 100 */}
              <span>Goal: {Math.pow(level, 2) * 100} XP</span>
            </div>
            {/* Compute percentage inside active bracket */}
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full" 
                style={{ width: `${Math.min(100, Math.round((xp / (Math.pow(level, 2) * 100)) * 100))}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Quizzes played */}
        <motion.div variants={itemVariants} className="glass-panel p-4 flex flex-col justify-between shadow-md">
          <span className="text-[10px] font-bold text-text-secondary uppercase">Quizzes Completed</span>
          <div className="flex flex-col mt-4">
            <span className="text-2xl font-black font-title text-text-primary">{quizzesPlayed}</span>
            <span className="text-[10px] text-text-secondary font-medium">{questionsAttempted} questions</span>
          </div>
        </motion.div>

        {/* Global Accuracy */}
        <motion.div variants={itemVariants} className="glass-panel p-4 flex flex-col justify-between shadow-md">
          <span className="text-[10px] font-bold text-text-secondary uppercase font-title">Overall Accuracy</span>
          <div className="flex flex-col mt-4">
            <span className="text-2xl font-black font-title text-green-500">{accuracy}%</span>
            <span className="text-[10px] text-text-secondary font-medium">{correctAnswers} correct</span>
          </div>
        </motion.div>

        {/* Best Streak & Daily Streak */}
        <motion.div variants={itemVariants} className="glass-panel p-4 flex flex-col justify-between shadow-md">
          <span className="text-[10px] font-bold text-text-secondary uppercase">Arena Streaks</span>
          <div className="flex flex-col mt-4">
            <span className="text-2xl font-black font-title text-orange-500 flex items-center gap-1">
              {bestStreak}x <Zap className="w-4 h-4 fill-orange-500" />
            </span>
            <span className="text-[10px] text-text-secondary font-medium">{dailyStreak}d Daily Streak</span>
          </div>
        </motion.div>

        {/* Avg Response Time */}
        <motion.div variants={itemVariants} className="glass-panel p-4 flex flex-col justify-between shadow-md">
          <span className="text-[10px] font-bold text-text-secondary uppercase">Average speed</span>
          <div className="flex flex-col mt-4">
            <span className="text-2xl font-black font-title text-purple-500 flex items-center gap-1">
              {averageTime}s <Clock className="w-4 h-4" />
            </span>
            <span className="text-[10px] text-text-secondary font-medium">per question</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Category Strengths Sub-Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-panel p-4 flex justify-between items-center shadow-md">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-text-secondary uppercase">Strongest Tech Sector</span>
            <span className="text-sm font-bold text-green-500">{strongestCategory}</span>
          </div>
          <div className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold font-title">
            Highest Accuracy
          </div>
        </div>
        <div className="glass-panel p-4 flex justify-between items-center shadow-md">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-text-secondary uppercase font-title">Growth Tech Sector</span>
            <span className="text-sm font-bold text-rose-500">{weakestCategory}</span>
          </div>
          <div className="px-2 py-1 rounded bg-rose-500/10 text-rose-500 text-[10px] font-bold font-title">
            Needs Practice
          </div>
        </div>
      </div>

      {/* ANALYTICS CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SVG Line Graph: XP Progression Trend */}
        <div className="glass-panel p-6 shadow-xl flex flex-col gap-4">
          <h3 className="text-sm font-bold font-title text-text-primary flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary dark:text-accent" />
            XP Progression Trend
          </h3>
          
          {recentHistory.length > 1 ? (
            <div className="w-full flex flex-col gap-2 mt-2">
              <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-32 overflow-visible">
                  {/* Grid Lines */}
                  <line x1="20" y1="15" x2={chartWidth - 20} y2="15" stroke="rgba(148,163,184,0.1)" strokeDasharray="3" />
                  <line x1="20" y1="50" x2={chartWidth - 20} y2="50" stroke="rgba(148,163,184,0.1)" strokeDasharray="3" />
                  <line x1="20" y1="85" x2={chartWidth - 20} y2="85" stroke="rgba(148,163,184,0.1)" strokeDasharray="3" />
                  
                  {/* Glowing Polyline path */}
                  <polyline
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={pointsString}
                    className="drop-shadow-[0_0_8px_var(--primary-glow)]"
                  />
                  
                  {/* Data Points Dot Indicators */}
                  {xpPoints.map((p, idx) => {
                    const xCoord = (idx / (xpPoints.length - 1 || 1)) * (chartWidth - 40) + 20;
                    const yCoord = chartHeight - ((p.y - minYVal) / yRange) * (chartHeight - 30) - 15;
                    return (
                      <g key={idx} className="group cursor-pointer">
                        <circle
                          cx={xCoord}
                          cy={yCoord}
                          r="5"
                          className="fill-primary stroke-white dark:stroke-slate-900 stroke-2 hover:r-7 transition-all"
                        />
                        {/* Tooltip on hover */}
                        <title>{recentHistory[idx].category}: {p.y} XP</title>
                      </g>
                    );
                  })}
                </svg>
              </div>
              <div className="flex justify-between text-[9px] text-text-secondary font-bold px-4">
                <span>Older Trials</span>
                <span>Active Rank Threshold</span>
                <span>Most Recent</span>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-text-secondary opacity-30 mb-2" />
              <p className="text-xs text-text-secondary italic">
                Insufficient data. complete at least 2 trials to generate XP trends.
              </p>
            </div>
          )}
        </div>

        {/* Categories Strengths breakdown */}
        <div className="glass-panel p-6 shadow-xl flex flex-col gap-4">
          <h3 className="text-sm font-bold font-title text-text-primary flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary dark:text-accent" />
            Accuracy Matrix by Category
          </h3>
          
          {Object.keys(categoryStats).length > 0 ? (
            <div className="flex flex-col gap-3.5 max-h-[160px] overflow-y-auto pr-1">
              {Object.keys(categoryStats).map((cat) => {
                const catAcc = Math.round((categoryStats[cat].correct / categoryStats[cat].total) * 100);
                
                // Color mapping
                let barColor = "bg-primary";
                if (catAcc >= 85) barColor = "bg-green-500";
                else if (catAcc < 50) barColor = "bg-red-500";

                return (
                  <div key={cat} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-text-primary">{cat}</span>
                      <span className="text-text-secondary">{catAcc}% ({categoryStats[cat].correct}/{categoryStats[cat].total})</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                      <div className={`h-full ${barColor} rounded-full`} style={{ width: `${catAcc}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
              <BarChart3 className="w-8 h-8 text-text-secondary opacity-30 mb-2" />
              <p className="text-xs text-text-secondary italic">
                No trials attempted yet. Choose technologies on the landing page to start!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* GAMIFIED BADGES / ACHIEVEMENTS */}
      <div className="glass-panel p-6 shadow-xl flex flex-col gap-4">
        <h3 className="text-sm font-bold font-title text-text-primary flex items-center gap-2">
          <Award className="w-4 h-4 text-primary dark:text-accent" />
          Unlocked Achievements
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {allBadges.map((badge) => {
            const isUnlocked = achievements.includes(badge.name);
            const BadgeIcon = badge.icon;
            
            return (
              <div 
                key={badge.name}
                className={`p-4 rounded-xl border border-solid flex gap-3 transition-all ${
                  isUnlocked 
                    ? `${badge.color} shadow-sm`
                    : "bg-slate-100/30 dark:bg-slate-900/30 border-slate-200/50 dark:border-slate-800/50 opacity-40 grayscale"
                }`}
              >
                <div className={`p-2 rounded-lg bg-white/60 dark:bg-slate-900/60 flex items-center justify-center flex-shrink-0 h-10 w-10 border border-solid ${isUnlocked ? 'border-inherit' : 'border-transparent'}`}>
                  <BadgeIcon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5 justify-center">
                  <span className="text-xs font-bold text-text-primary">
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-text-secondary leading-tight">
                    {badge.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RECENT TRIAL HISTORY LOG */}
      <div className="glass-panel p-6 shadow-xl flex flex-col gap-4">
        <h3 className="text-sm font-bold font-title text-text-primary flex items-center gap-2">
          <History className="w-4 h-4 text-primary dark:text-accent" />
          Trial Histories Log
        </h3>

        {history.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-solid border-slate-200 dark:border-slate-800 text-text-secondary font-bold">
                  <th className="py-3 px-2">Category</th>
                  <th className="py-3 px-2">Difficulty</th>
                  <th className="py-3 px-2">Score</th>
                  <th className="py-3 px-2">XP Gain</th>
                  <th className="py-3 px-2">Avg Speed</th>
                  <th className="py-3 px-2">Date Completed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-solid divide-slate-100 dark:divide-slate-800">
                {history.map((attempt) => (
                  <tr key={attempt.id} className="text-text-primary hover:bg-primary/5">
                    <td className="py-3 px-2 font-semibold flex items-center gap-1.5">
                      {attempt.category}
                    </td>
                    <td className="py-3 px-2 font-medium">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                        attempt.difficulty === "Easy" ? "bg-green-500/10 text-green-600" :
                        attempt.difficulty === "Medium" ? "bg-amber-500/10 text-amber-600" :
                        "bg-red-500/10 text-red-600"
                      }`}>
                        {attempt.difficulty}
                      </span>
                    </td>
                    <td className="py-3 px-2 font-bold">
                      {attempt.correctAnswers}/{attempt.totalQuestions}
                    </td>
                    <td className="py-3 px-2 font-bold text-green-500">
                      +{attempt.xpGained} XP
                    </td>
                    <td className="py-3 px-2 text-text-secondary font-medium">
                      {attempt.averageTime}s / q
                    </td>
                    <td className="py-3 px-2 text-text-secondary flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(attempt.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <History className="w-8 h-8 text-text-secondary opacity-30 mb-2" />
            <p className="text-xs text-text-secondary italic">
              No logged records. Complete your first quiz to record credentials.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
