import React, { useState, useEffect } from "react";
import ThemeSelector from "../components/ThemeSelector";
import useLocalStorage from "../hooks/useLocalStorage";
import themeData from "../data/theme";
import themeIcon from "../icons/theme_icon.svg";

function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useLocalStorage("theme", themeData[0]);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  useEffect(() => {
    changeTheme(activeTheme);
  }, [activeTheme]);

  const handleToggleClick = () => {
    setDropDownVisible((currentState) => !currentState);
  };

  return (
    <div className="theme-toggle">
      <div className="theme-icon" onClick={handleToggleClick}>
        <img src={themeIcon} alt="Theme Icon" />
      </div>
        <ThemeSelector
          isVisible={dropDownVisible}
          setVisible={setDropDownVisible}
          activeTheme={activeTheme}
          setActiveTheme={setActiveTheme}
        />
    </div>
  );
}

const changeTheme = (theme) => {
  document.body.style.setProperty("--primary-color", theme.primaryColor);
  document.body.style.setProperty("--accent-color", theme.accentColor);
  document.body.style.setProperty("--link-color", theme.linkColor ? theme.linkColor : theme.primaryColor);
  theme.textColor && document.body.style.setProperty("--nav-section-text-color", theme.textColor);
};

export default ThemeToggle;
