import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import { useQuiz } from "./context/QuizContext";

// Lazy loading pages for optimized performance (code splitting)
const LandingPage = lazy(() => import("./pages/LandingPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const ResultPage = lazy(() => import("./pages/ResultPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));

import Background from "./components/Background";
import Navbar from "./components/Navbar";

import "./App.css";

// Suspense Loading Fallback Spinner
function PageLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-12">
      <div className="w-10 h-10 rounded-full border-4 border-solid border-slate-200 border-t-primary animate-spin mb-4" />
      <span className="text-xs text-text-secondary font-medium">Downloading Arena Chunk...</span>
    </div>
  );
}

function App() {
  const { darkMode } = useTheme();
  const { playerName } = useQuiz();

  // Apply dark mode class to html element for global theme shifts
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Dynamic Animated Mesh Background */}
      <Background />
      
      {/* Global Interface Navigation */}
      <Navbar />

      {/* Main Pages Content Router with Suspense Code Splitting */}
      <main className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 md:px-8 py-6">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage key={playerName} />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;