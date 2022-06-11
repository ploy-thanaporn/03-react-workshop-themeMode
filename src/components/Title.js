import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../App";

const Title = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleSwitch = (checked) => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={theme === "light" ? "light" : "dark"}>
      <span>
        Mode [{theme}]
        <Switch
          onChange={toggleSwitch}
          checked={theme === "dark"}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor={"#ffa500"}
        />
      </span>
    </header>
  );
};

export default Title;
