// "use client"
// import React, { createContext, useContext, useEffect, useState } from "react";

// type ThemeContextType = {
//   theme: "light" | "dark";
//   toggleTheme: () => void;
// };

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     // بررسی و اعمال تم ذخیره‌شده در localStorage
//     const savedTheme = localStorage.getItem("theme") as "light" | "dark";
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-bs-theme", savedTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-bs-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };
