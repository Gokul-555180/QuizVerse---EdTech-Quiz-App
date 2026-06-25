import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import CategoryCard from "../components/CategoryCard";
import DifficultyCard from "../components/DifficultyCard";

import { useQuiz } from "../context/QuizContext";

const categories=[

"React",

"JavaScript",

"HTML",

"CSS",

"Firebase",

"Git",

"Node",

"Express",

"MongoDB",

"General"

];

const levels=[

"Easy",

"Medium",

"Hard"

];

function LandingPage(){

const navigate=useNavigate();

const{

playerName,

setPlayerName,

category,

setCategory,

difficulty,

setDifficulty

}=useQuiz();

function startQuiz(){

if(!playerName) return;

if(!category) return;

navigate("/quiz");

}

return(

<div className="landing-page">

<Navbar/>

<ThemeToggle/>

<motion.div

className="hero"

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.7}}

>

<h1>

Master Programming

One Quiz At A Time

</h1>

<p>

A premium interactive learning platform.

</p>

<input

type="text"

placeholder="Enter your name"

value={playerName}

onChange={(e)=>setPlayerName(e.target.value)}

/>

<h2>

Choose Category

</h2>

<div className="categories">

{

categories.map((item)=>(

<CategoryCard

key={item}

title={item}

selected={category===item}

onClick={()=>setCategory(item)}

/>

))

}

</div>

<h2>

Difficulty

</h2>

<div className="difficulty">

{

levels.map((level)=>(

<DifficultyCard

key={level}

level={level}

selected={difficulty===level}

onClick={()=>setDifficulty(level)}

/>

))

}

</div>

<button

className="start-btn"

onClick={startQuiz}

>

Start Quiz

</button>

</motion.div>

</div>

);

}

export default LandingPage;