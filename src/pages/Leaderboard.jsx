import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { subscribeLeaderboard } from "../utils/firebase";
import { 
  Trophy, 
  ArrowLeft, 
  Zap, 
  Percent, 
  Crown,
  Medal,
  Users,
  Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "../utils/sound";

export default function Leaderboard() {
  const { playerName, isMuted } = useQuiz();
  const navigate = useNavigate();

  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Subscribe to global real-time rankings
  useEffect(() => {
    const unsubscribe = subscribeLeaderboard((data) => {
      setRankings(data);
      setLoading(false);
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleBack = () => {
    playSound("click", isMuted);
    navigate(-1);
  };

  // Filter rankings based on search query
  const filteredRankings = rankings.filter((r) => 
    r.playerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Divide podium (top 3) vs rest
  const podiumPlayers = rankings.slice(0, 3);
  const listPlayers = filteredRankings; // Keep all search results in list, but highlight ranks

  // Podium positioning layout order: [2nd, 1st, 3rd]
  const podiumOrder = [];
  if (podiumPlayers[1]) podiumOrder.push({ ...podiumPlayers[1], rank: 2, trophyColor: "text-slate-400", medalColor: "bg-slate-100 dark:bg-slate-800 text-slate-500" });
  if (podiumPlayers[0]) podiumOrder.push({ ...podiumPlayers[0], rank: 1, trophyColor: "text-yellow-500", medalColor: "bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400" });
  if (podiumPlayers[2]) podiumOrder.push({ ...podiumPlayers[2], rank: 3, trophyColor: "text-amber-600", medalColor: "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-500" });

  return (
    <div className="flex-1 flex flex-col gap-6 py-4 max-w-4xl mx-auto w-full">
      
      {/* Header Toolbar */}
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="p-2 border border-solid border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-text-primary rounded-xl cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-2xl font-bold font-title text-text-primary">
              Global Rankings
            </h1>
            <p className="text-xs text-text-secondary">
              Real-time synchronization with server databases
            </p>
          </div>
        </div>

        {/* Total competitors count */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary dark:text-accent font-semibold text-xs shadow-sm">
          <Users className="w-3.5 h-3.5" />
          <span>{rankings.length} Competitors</span>
        </div>
      </div>

      {loading ? (
        <div className="flex-1 flex flex-col items-center justify-center py-16">
          <div className="w-10 h-10 rounded-full border-4 border-solid border-slate-200 border-t-primary animate-spin mb-4"></div>
          <span className="text-xs text-text-secondary">Querying leaderboard servers...</span>
        </div>
      ) : (
        <>
          {/* PODIUM TOP 3 DISPLAY */}
          {podiumPlayers.length > 0 && !searchQuery && (
            <div className="flex justify-center items-end gap-3 sm:gap-6 pt-6 pb-2 px-4 w-full">
              {podiumOrder.map((player) => {
                const isCurrentUser = player.playerName.toLowerCase() === playerName.toLowerCase();
                const scale = player.rank === 1 ? "scale-105" : "scale-95";
                const height = player.rank === 1 ? "h-44" : player.rank === 2 ? "h-36" : "h-32";
                
                return (
                  <motion.div
                    key={player.playerName}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 25, delay: player.rank * 0.1 }}
                    className={`flex flex-col items-center w-24 sm:w-32 flex-shrink-0 ${scale}`}
                  >
                    {/* Floating Avatar ring */}
                    <div className="relative mb-2.5">
                      {player.rank === 1 ? (
                        <Crown className="absolute top-[-20px] left-[35%] w-6 h-6 text-yellow-500 fill-yellow-500 animate-bounce" />
                      ) : (
                        <Medal className={`absolute top-[-15px] left-[40%] w-4 h-4 ${player.trophyColor}`} />
                      )}
                      
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg sm:text-xl font-extrabold shadow-lg border-2 border-solid ${
                        isCurrentUser ? "border-primary dark:border-accent scale-105" : "border-white dark:border-slate-800"
                      }`}>
                        {player.playerName.charAt(0).toUpperCase()}
                      </div>

                      <div className={`absolute bottom-[-5px] right-[-5px] w-6 h-6 rounded-full ${player.medalColor} flex items-center justify-center text-[10px] font-bold shadow-md`}>
                        {player.rank}
                      </div>
                    </div>

                    {/* Podium Pillar Card */}
                    <div className={`w-full ${height} glass-panel flex flex-col justify-center items-center p-3 relative overflow-hidden shadow-lg border-b-4 border-solid border-b-primary`}>
                      <span className="text-xs font-bold text-text-primary truncate max-w-full text-center mb-1">
                        {player.playerName}
                      </span>
                      <span className="text-[10px] text-text-secondary font-semibold">
                        Lvl {player.level}
                      </span>
                      <span className="text-xs font-black text-primary dark:text-accent font-title mt-2">
                        {player.xp} XP
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* SEARCH BAR */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search gladiator..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-solid border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur rounded-xl text-text-primary text-xs font-semibold focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
          </div>

          {/* RANKINGS GRID LIST */}
          <div className="glass-panel p-4 md:p-6 shadow-xl">
            {listPlayers.length > 0 ? (
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-solid border-slate-200 dark:border-slate-800 text-text-secondary font-bold">
                      <th className="py-3 px-2 w-12 text-center">Rank</th>
                      <th className="py-3 px-3">Gladiator</th>
                      <th className="py-3 px-2 text-center">Level</th>
                      <th className="py-3 px-2 text-center">Accuracy</th>
                      <th className="py-3 px-2 text-center">Best Streak</th>
                      <th className="py-3 px-2 text-right">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-solid divide-slate-100 dark:divide-slate-800">
                    <AnimatePresence>
                      {listPlayers.map((player) => {
                        const isCurrentUser = player.playerName.toLowerCase() === playerName.toLowerCase();
                        // Find global index matching the unsearched index
                        const globalRank = rankings.findIndex(r => r.playerName.toLowerCase() === player.playerName.toLowerCase()) + 1;

                        return (
                          <motion.tr
                            key={player.playerName}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`hover:bg-primary/5 transition-colors ${
                              isCurrentUser 
                                ? "bg-primary/10 dark:bg-accent/10 font-bold border border-solid border-primary" 
                                : ""
                            }`}
                          >
                            {/* Rank Column */}
                            <td className="py-3.5 px-2 text-center font-bold">
                              {globalRank === 1 ? (
                                <span className="inline-flex w-5 h-5 rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400 items-center justify-center text-[10px]">1</span>
                              ) : globalRank === 2 ? (
                                <span className="inline-flex w-5 h-5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 items-center justify-center text-[10px]">2</span>
                              ) : globalRank === 3 ? (
                                <span className="inline-flex w-5 h-5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 items-center justify-center text-[10px]">3</span>
                              ) : (
                                <span className="text-text-secondary">{globalRank}</span>
                              )}
                            </td>

                            {/* Gladiator Name */}
                            <td className="py-3.5 px-3">
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-text-primary border border-solid border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-extrabold select-none">
                                  {player.playerName.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-text-primary font-bold">
                                  {player.playerName}
                                  {isCurrentUser && (
                                    <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-primary text-white uppercase">You</span>
                                  )}
                                </span>
                              </div>
                            </td>

                            {/* Level */}
                            <td className="py-3.5 px-2 text-center font-bold text-text-secondary">
                              Lvl {player.level}
                            </td>

                            {/* Accuracy */}
                            <td className="py-3.5 px-2 text-center font-medium">
                              <span className="inline-flex items-center gap-0.5 text-text-primary">
                                <Percent className="w-3 h-3 text-green-500" />
                                {player.accuracy || 0}%
                              </span>
                            </td>

                            {/* Best Streak */}
                            <td className="py-3.5 px-2 text-center font-medium">
                              <span className="inline-flex items-center gap-0.5 text-text-primary">
                                <Zap className="w-3 h-3 text-orange-500 fill-orange-500" />
                                {player.bestStreak || 0}x
                              </span>
                            </td>

                            {/* XP */}
                            <td className="py-3.5 px-2 text-right font-black font-title text-primary dark:text-accent">
                              {player.xp} XP
                            </td>
                          </motion.tr>
                        );
                      })}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                <Trophy className="w-8 h-8 text-text-secondary opacity-30 mb-2" />
                <p className="text-xs text-text-secondary italic">
                  No matches found for search query.
                </p>
              </div>
            )}
          </div>
        </>
      )}

    </div>
  );
}
