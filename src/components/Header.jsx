import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1>QuizMaster</h1>

      <p>
        Test your React knowledge
      </p>
    </motion.div>
  );
}

export default Header;