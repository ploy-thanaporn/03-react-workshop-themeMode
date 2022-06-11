import React, { useContext } from "react";
import light from "../images/light.svg";
import dark from "../images/dark.svg";
import { ThemeContext } from "../App";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "light" ? "light" : "dark"}>
      <div>
        <h1>Lauv Official</h1>
        <p>DarkMode Workshop</p>
      </div>
      <img src={theme === "light" ? light : dark} alt="Logo" />
    </main>
  );
};

export default Content;
