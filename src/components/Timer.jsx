/* eslint-disable */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Timer({ duration, currentQuestion, onTimeUp }) {

  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [currentQuestion, duration]);

  useEffect(() => {

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [timeLeft, onTimeUp]);

  const progress = (timeLeft / duration) * 264;

  return (

    <div className="timer">

      <svg width="110" height="110">

        <circle
          cx="55"
          cy="55"
          r="42"
          stroke="#dbeafe"
          strokeWidth="8"
          fill="none"
        />

        <motion.circle

          cx="55"
          cy="55"
          r="42"

          stroke="#2563EB"

          strokeWidth="8"

          fill="none"

          strokeLinecap="round"

          strokeDasharray="264"

          animate={{
            strokeDashoffset:264-progress
          }}

          transition={{
            duration:.5
          }}

          transform="rotate(-90 55 55)"

        />

      </svg>

      <h2>{timeLeft}</h2>

    </div>

  );

}

export default Timer;