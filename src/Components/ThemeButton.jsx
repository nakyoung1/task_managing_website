import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

function ThemeButton() {
     const { theme, changeTheme } = useContext(ThemeContext);
     return (
          <button
               onClick={changeTheme}
               className="fixed right-2 top-2 mt-15 cursor-pointer font-bold text-gray-800   py-2 px-4 hover:border-b dark:text-white"
          >
               {theme === "light" ? "다크모드" : "라이트모드"}
          </button>
     );
}
export default ThemeButton;
