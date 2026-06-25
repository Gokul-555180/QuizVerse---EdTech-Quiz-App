import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {

  const { darkMode, toggleTheme } = useTheme();

  return (

    <button

      className="theme-toggle"

      onClick={toggleTheme}

    >

      {

        darkMode ?

        <Sun size={20}/> :

        <Moon size={20}/>

      }

    </button>

  );

}

export default ThemeToggle;