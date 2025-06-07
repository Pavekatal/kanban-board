import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../components/themes/themes";
import { ThemeProvider } from "styled-components";

const ThemeProviderCustom = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(() => {
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    return false;
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderCustom;
