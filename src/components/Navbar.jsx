import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { useTheme } from "../context/ThemeContext";
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Trophy, 
  LayoutDashboard, 
  LogOut, 
  Menu, 
  X, 
  User,
  GraduationCap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "../utils/sound";

export default function Navbar() {
  const { 
    playerName, 
    userProfile, 
    isMuted, 
    toggleMute, 
    logoutPlayer 
  } = useQuiz();
  const { darkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activePath = location.pathname;

  const handleNavClick = (path) => {
    playSound("click", isMuted);
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleMuteClick = () => {
    toggleMute();
    playSound("click", !isMuted); // Play a click using the NEXT state (meaning if unmute, play sound)
  };

  const handleThemeClick = () => {
    toggleTheme();
    playSound("click", isMuted);
  };

  const handleLogout = () => {
    playSound("click", isMuted);
    logoutPlayer();
    navigate("/");
    setMobileMenuOpen(false);
  };

  // Nav items configuration
  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard, authRequired: true },
    { label: "Leaderboard", path: "/leaderboard", icon: Trophy, authRequired: false }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 md:px-8">
      <div className="glass-panel mx-auto max-w-7xl px-4 py-3 md:px-6 flex items-center justify-between">
        {/* Branding Logo */}
        <Link 
          to="/" 
          onClick={() => playSound("click", isMuted)}
          className="flex items-center gap-2 text-xl font-bold tracking-tight font-title text-primary dark:text-accent select-none decoration-none outline-none"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="p-1.5 bg-primary/10 dark:bg-accent/10 rounded-xl"
          >
            <GraduationCap className="w-6 h-6 text-primary dark:text-accent" />
          </motion.div>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent dark:from-white dark:to-accent flex items-center gap-1.5">
            QuizVerse
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            if (item.authRequired && !playerName) return null;
            const isActive = activePath === item.path;
            const Icon = item.icon;
            
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border-0 cursor-pointer bg-transparent ${
                  isActive 
                    ? "text-primary dark:text-accent" 
                    : "text-text-secondary hover:text-text-primary dark:hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-primary dark:bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls (Theme, Sound, Profile) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleMuteClick}
            className="p-2 border-0 bg-transparent rounded-lg text-text-secondary hover:text-text-primary dark:hover:text-white cursor-pointer transition-colors"
            title={isMuted ? "Unmute sounds" : "Mute sounds"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeClick}
            className="p-2 border-0 bg-transparent rounded-lg text-text-secondary hover:text-text-primary dark:hover:text-white cursor-pointer transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Profile Badge / Login Status */}
          {playerName && userProfile ? (
            <div className="flex items-center gap-3 pl-2 border-l border-solid border-slate-200 dark:border-slate-800">
              <div 
                onClick={() => handleNavClick("/dashboard")}
                className="flex flex-col text-right cursor-pointer"
              >
                <span className="text-xs font-semibold text-text-primary dark:text-white">
                  {userProfile.playerName}
                </span>
                <span className="text-[10px] text-text-secondary font-medium">
                  Lv.{userProfile.level} • {userProfile.xp} XP
                </span>
              </div>
              
              {/* Profile Avatar */}
              <div 
                onClick={() => handleNavClick("/dashboard")}
                className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-sm cursor-pointer shadow-md select-none border border-solid border-white/20"
              >
                {userProfile.playerName.charAt(0).toUpperCase()}
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="p-2 border-0 bg-transparent rounded-lg text-red-500 hover:bg-red-500/10 cursor-pointer transition-colors"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 px-4 py-2 border-0 bg-primary hover:bg-primary-glow text-white text-xs font-semibold rounded-xl cursor-pointer shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            >
              <User className="w-3.5 h-3.5" />
              Enter Arena
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Sound Toggle */}
          <button
            onClick={handleMuteClick}
            className="p-2 border-0 bg-transparent rounded-lg text-text-secondary cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeClick}
            className="p-2 border-0 bg-transparent rounded-lg text-text-secondary cursor-pointer"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-0 bg-transparent rounded-lg text-text-secondary cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden w-full mt-2 px-1"
          >
            <div className="glass-panel p-4 flex flex-col gap-3">
              {navItems.map((item) => {
                if (item.authRequired && !playerName) return null;
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center gap-3 w-full p-2.5 rounded-xl text-left border-0 bg-transparent text-sm font-medium text-text-secondary hover:text-text-primary dark:hover:text-white hover:bg-primary/5 cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}

              {playerName && userProfile ? (
                <div className="pt-3 border-t border-solid border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                  <div className="flex items-center gap-3 p-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold shadow">
                      {userProfile.playerName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-text-primary dark:text-white">
                        {userProfile.playerName}
                      </span>
                      <span className="text-xs text-text-secondary">
                        Level {userProfile.level} • {userProfile.xp} XP
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full p-2.5 rounded-xl text-left border-0 bg-transparent text-sm font-medium text-red-500 hover:bg-red-500/10 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick("/")}
                  className="flex items-center justify-center gap-2 w-full py-2.5 border-0 bg-primary text-white text-sm font-semibold rounded-xl cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  Enter Arena
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}