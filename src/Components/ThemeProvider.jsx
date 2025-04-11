import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
     const [theme, setTheme] = useState("light");

     useEffect(() => {
          if (theme === "dark") {
               //index.html 태그에 접근하여 dark class 추가
               document.documentElement.classList.add("dark");
          } else document.documentElement.classList.remove("dark");
     }, [theme]);

     const changeTheme = () => {
          setTheme((prev) => {
               return prev === "light" ? "dark" : "light";
          });
     };

     return (
          <ThemeContext.Provider value={{ theme, changeTheme }}>
               {children}
          </ThemeContext.Provider>
     );
}
