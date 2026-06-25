import { motion } from "framer-motion";

import OptionButton from "./OptionButton";

function QuestionCard({

  question,

  selected,

  onSelect,

  showAnswer

}) {

  return (

    <motion.div

      className="question-card"

      key={question.id}

      initial={{

        opacity: 0,

        y: 40

      }}

      animate={{

        opacity: 1,

        y: 0

      }}

      exit={{

        opacity: 0,

        y: -40

      }}

      transition={{

        duration: 0.45

      }}

    >

      <h2>

        {question.question}

      </h2>

      <div className="options">

        {question.options.map((option) => (

          <OptionButton

            key={option}

            option={option}

            disabled={showAnswer}

            isSelected={selected === option}

            isCorrect={question.answer === option}

            showAnswer={showAnswer}

            onClick={() => onSelect(option)}

          />

        ))}

      </div>

    </motion.div>

  );

}

export default QuestionCard;