import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { 
  Sparkles, 
  ArrowRight, 
  Blocks, 
  Code, 
  Globe, 
  Palette, 
  Flame, 
  GitBranch, 
  Server, 
  Route, 
  Database, 
  Brain,
  Trophy,
  Zap,
  Activity,
  Award
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "../utils/sound";

export default function LandingPage() {
  const { 
    playerName, 
    loginPlayer, 
    startQuizSetup, 
    isMuted 
  } = useQuiz();
  const navigate = useNavigate();

  // Local States
  const [nameInput, setNameInput] = useState(playerName || "");
  const [selectedCat, setSelectedCat] = useState("React");
  const [selectedDiff, setSelectedDiff] = useState("Easy");
  const [showSelector, setShowSelector] = useState(!!playerName);
  const [countdown, setCountdown] = useState(null); // null, 3, 2, 1, 'GO'


  // Categories list with custom colors and icons
  const categoriesList = [
    { name: "React", icon: Blocks, color: "from-cyan-400 to-blue-500", desc: "Hooks, reconciliation, fibers & SSR" },
    { name: "JavaScript", icon: Code, color: "from-amber-400 to-yellow-500", desc: "Closures, event loop, hoisting & ESNext" },
    { name: "HTML", icon: Globe, color: "from-orange-400 to-red-500", desc: "Semantic layout, shadow DOM & WAI-ARIA" },
    { name: "CSS", icon: Palette, color: "from-blue-400 to-indigo-500", desc: "Flexbox, Grid, variables & transitions" },
    { name: "Firebase", icon: Flame, color: "from-yellow-400 to-orange-500", desc: "Firestore, cloud functions & auth rules" },
    { name: "Git & GitHub", icon: GitBranch, color: "from-red-400 to-orange-600", desc: "Branching, rebasing, reflogs & actions" },
    { name: "Node.js", icon: Server, color: "from-green-400 to-emerald-600", desc: "Event loop, streams, buffers & workers" },
    { name: "Express.js", icon: Route, color: "from-gray-400 to-slate-600", desc: "Routing, custom middleware & security headers" },
    { name: "MongoDB", icon: Database, color: "from-emerald-400 to-green-600", desc: "Aggregations, indexing & replica sets" },
    { name: "General Programming", icon: Brain, color: "from-purple-400 to-indigo-600", desc: "OOP, SOLID, algorithms & design patterns" }
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    if (!nameInput.trim()) return;
    playSound("click", isMuted);
    loginPlayer(nameInput.trim());
    setShowSelector(true);
  };

  const handleStartQuiz = () => {
    playSound("click", isMuted);
    startQuizSetup(selectedCat, selectedDiff);
    
    // Start countdown arpeggio sequence
    let count = 3;
    setCountdown(count);
    playSound("tick", isMuted);

    const interval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        setCountdown(count);
        playSound("tick", isMuted);
      } else if (count === 0) {
        setCountdown("GO!");
        playSound("click", isMuted); // louder transition sound
      } else {
        clearInterval(interval);
        setCountdown(null);
        navigate("/quiz");
      }
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col justify-center py-6 md:py-12">
      {/* 3-2-1 Countdown Overlay */}
      <AnimatePresence>
        {countdown !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-xl"
          >
            <motion.div
              key={countdown}
              initial={{ scale: 0.3, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-8xl md:text-9xl font-bold font-title bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent select-none text-center"
            >
              {countdown}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto w-full">
        
        {/* Left Side: Hero Information */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:text-accent font-semibold text-xs w-fit mx-auto lg:mx-0 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Arena version 2.0 Live
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-title tracking-tight leading-none"
          >
            Welcome to the <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-white dark:to-accent">
              QuizVerse
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Forge your coding skills in our premium developer arena. Tackle high-fidelity, interview-grade questions, level up your XP, and assert dominance on the leaderboard.
          </motion.p>

          {/* Quick Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 mt-2 max-w-md mx-auto lg:mx-0 w-full"
          >
            <div className="glass-panel p-4 flex flex-col gap-1 items-center lg:items-start">
              <span className="text-xl md:text-2xl font-bold font-title text-primary dark:text-accent flex items-center gap-1.5">
                80+ <Zap className="w-4 h-4" />
              </span>
              <span className="text-xs text-text-secondary">Expert Questions</span>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-1 items-center lg:items-start">
              <span className="text-xl md:text-2xl font-bold font-title text-primary dark:text-accent flex items-center gap-1.5">
                10 <Award className="w-4 h-4" />
              </span>
              <span className="text-xs text-text-secondary">Dev Categories</span>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-1 items-center lg:items-start">
              <span className="text-xl md:text-2xl font-bold font-title text-primary dark:text-accent flex items-center gap-1.5">
                3 <Activity className="w-4 h-4" />
              </span>
              <span className="text-xs text-text-secondary">Difficulty Tiers</span>
            </div>
            <div className="glass-panel p-4 flex flex-col gap-1 items-center lg:items-start">
              <span className="text-xl md:text-2xl font-bold font-title text-primary dark:text-accent flex items-center gap-1.5">
                Live <Trophy className="w-4 h-4" />
              </span>
              <span className="text-xs text-text-secondary">Global Rankings</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Portal */}
        <div className="lg:col-span-7 flex justify-center items-center w-full">
          <AnimatePresence mode="wait">
            {!showSelector ? (
              /* PLAYER REGISTRATION SCREEN */
              <motion.div
                key="name-portal"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="glass-panel p-6 md:p-8 w-full max-w-lg shadow-xl relative overflow-hidden"
              >
                {/* Accent glows */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none"></div>

                <h2 className="text-2xl font-bold font-title mb-2 text-text-primary">
                  Enter The Arena
                </h2>
                <p className="text-sm text-text-secondary mb-6">
                  State your codename to register your stats and track achievements.
                </p>

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-input" className="text-xs font-semibold text-text-secondary">
                      Codename
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      maxLength={18}
                      placeholder="e.g. Neo, Lovelace..."
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      className="px-4 py-3.5 rounded-xl border border-solid border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur text-text-primary font-medium text-sm focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 flex items-center justify-center gap-2 border-0 bg-primary hover:bg-primary-glow text-white font-semibold rounded-xl cursor-pointer shadow-lg hover:shadow-primary/20 transition-all hover:translate-y-[-2px] active:translate-y-0"
                  >
                    Enter Arena
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            ) : (
              /* CATEGORY & DIFFICULTY SELECTOR SCREEN */
              <motion.div
                key="arena-portal"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="glass-panel p-6 md:p-8 w-full max-w-2xl shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-xl pointer-events-none"></div>

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-xs text-text-secondary">WELCOME BACK, GLADIATOR</span>
                    <h2 className="text-xl md:text-2xl font-bold font-title text-text-primary">
                      Choose Your Trials
                    </h2>
                  </div>
                  
                  {/* Option to change name */}
                  <button 
                    onClick={() => {
                      playSound("click", isMuted);
                      setShowSelector(false);
                    }}
                    className="text-xs font-semibold text-primary dark:text-accent border-0 bg-transparent cursor-pointer hover:underline"
                  >
                    Change Codename
                  </button>
                </div>

                {/* Categories Scrollable/Grid Selector */}
                <div className="flex flex-col gap-2.5 mb-6">
                  <label className="text-xs font-semibold text-text-secondary">
                    Select Technology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-h-[220px] overflow-y-auto pr-1">
                    {categoriesList.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCat === cat.name;

                      return (
                        <button
                          key={cat.name}
                          onClick={() => {
                            playSound("click", isMuted);
                            setSelectedCat(cat.name);
                          }}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border border-solid text-center cursor-pointer transition-all hover:scale-102 ${
                            isSelected 
                              ? `bg-gradient-to-br ${cat.color} text-white border-transparent shadow-lg shadow-primary/10`
                              : "bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-text-secondary hover:border-primary/20 hover:text-text-primary dark:hover:text-white"
                          }`}
                        >
                          <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? "text-white" : "text-text-secondary dark:text-slate-500"}`} />
                          <span className="text-[10px] font-bold tracking-tight">
                            {cat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Difficulty Selector */}
                <div className="flex flex-col gap-2.5 mb-6">
                  <label className="text-xs font-semibold text-text-secondary">
                    Difficulty Level
                  </label>
                  
                  <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-xl w-full">
                    {["Easy", "Medium", "Hard"].map((diff) => {
                      const isSelected = selectedDiff === diff;
                      return (
                        <button
                          key={diff}
                          onClick={() => {
                            playSound("click", isMuted);
                            setSelectedDiff(diff);
                          }}
                          className={`flex-1 py-2.5 text-xs font-bold rounded-lg border-0 cursor-pointer transition-all ${
                            isSelected 
                              ? "bg-white dark:bg-slate-800 text-primary dark:text-accent shadow-sm"
                              : "bg-transparent text-text-secondary hover:text-text-primary dark:hover:text-white"
                          }`}
                        >
                          {diff}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Start Button */}
                <button
                  onClick={handleStartQuiz}
                  className="w-full py-4 flex items-center justify-center gap-2 border-0 bg-primary hover:bg-primary-glow text-white font-bold text-sm rounded-xl cursor-pointer shadow-lg hover:shadow-primary/20 transition-all hover:translate-y-[-2px] active:translate-y-0"
                >
                  Start Battle
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
