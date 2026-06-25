import { motion } from "framer-motion";

function ProgressBar({ current, total }) {

  const percentage = (current / total) * 100;

  return (

    <div className="progress-container">

      <div className="progress-text">

        <span>
          Question {current} / {total}
        </span>

        <span>
          {Math.round(percentage)}%
        </span>

      </div>

      <div className="progress-bg">

        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{
            width: `${percentage}%`
          }}
          transition={{
            duration: 0.6
          }}
        />

      </div>

    </div>

  );

}

export default ProgressBar;