/* eslint-disable */
import { motion } from "framer-motion";


function Result({

    score,

    total,

    onRestart,

    streak

}) {

    const percentage = Math.round((score / total) * 100);

    let message = "";
    let emoji = "";

    if (percentage >= 90) {

        message = "Outstanding!";
        emoji = "🏆";

    }

    else if (percentage >= 75) {

        message = "Excellent!";
        emoji = "🎉";

    }

    else if (percentage >= 60) {

        message = "Good Job!";
        emoji = "👏";

    }

    else {

        message = "Keep Practicing!";
        emoji = "📚";

    }

    return (

        <motion.div

            className="result-card"

            initial={{
                opacity: 0,
                scale: 0.8
            }}

            animate={{
                opacity: 1,
                scale: 1
            }}

            transition={{
                duration: 0.5
            }}

        >

            <div className="emoji">

                {emoji}

            </div>

            <h1>{message}</h1>

            <div className="score-circle">

                <svg width="220" height="220">

                    <circle

                        cx="110"

                        cy="110"

                        r="90"

                        stroke="#dbeafe"

                        strokeWidth="15"

                        fill="none"

                    />

                    <motion.circle

                        cx="110"

                        cy="110"

                        r="90"

                        stroke="#2563EB"

                        strokeWidth="15"

                        fill="none"

                        strokeLinecap="round"

                        strokeDasharray={565}

                        initial={{

                            strokeDashoffset:565

                        }}

                        animate={{

                            strokeDashoffset:
                                565 - (565 * percentage) / 100

                        }}

                        transition={{

                            duration:1.5

                        }}

                        transform="rotate(-90 110 110)"

                    />

                </svg>

                <div className="score-text">

                    <h2>{percentage}%</h2>

                </div>

            </div>

            <div className="stats">

                <div className="stat-box">

                    <h2>{score}</h2>

                    <p>Correct</p>

                </div>

                <div className="stat-box">

                    <h2>{total -score}</h2>

                    <p>Wrong</p>

                </div>

                <div className="stat-box">

                    <h2>{streak}</h2>

                    <p>Best Streak 🔥</p>

                </div>

            </div>

            <button

                className="restart-btn"

                onClick={onRestart}

            >

                Restart Quiz

            </button>

        </motion.div>

    );

}

export default Result;