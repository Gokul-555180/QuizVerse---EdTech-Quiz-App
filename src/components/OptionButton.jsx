import { motion } from "framer-motion";

function OptionButton({
  option,
  onClick,
  disabled,
  isSelected,
  isCorrect,
  showAnswer
}) {

  let className = "option-btn";

  if (showAnswer) {

    if (isCorrect) {

      className += " correct";

    }

    else if (isSelected) {

      className += " wrong";

    }

  }

  return (

    <motion.button

      whileHover={{
        scale: 1.03
      }}

      whileTap={{
        scale: 0.96
      }}

      initial={{
        opacity: 0,
        x: -40
      }}

      animate={{
        opacity: 1,
        x: 0
      }}

      transition={{
        duration: 0.35
      }}

      disabled={disabled}

      className={className}

      onClick={onClick}

    >

      {option}

    </motion.button>

  );

}

export default OptionButton;