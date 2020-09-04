import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import themeData from "../data/theme";
import themeIcon from "../icons/theme_icon.svg";
import tickIcon from "../icons/tick.svg";

function ThemeToggle() {
  const [activeTheme, setActiveTheme] = useLocalStorage("theme", themeData[0]);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const themeButtons = themeData.map((theme) => {
    return (
      <div
        onClick={() => handleChangeThemeButton(theme)}
        className="toggle-btn"
        style={getBackgroundStyle(theme.primaryColor)}
        key={theme.name}>
        {theme.name === activeTheme.name && (
          <img src={tickIcon} alt={`theme-${theme.name.toLowerCase}`} />
        )}
      </div>
    );
  });

  useEffect(() => {
    document.body.style.setProperty(
      "--primary-color",
      activeTheme.primaryColor
    );
    document.body.style.setProperty("--accent-color", activeTheme.accentColor);
    if (activeTheme.textColor) {
      document.body.style.setProperty(
        "--text-color",
        activeTheme.textColor
      );
    }
  }, [activeTheme]);

  const handleChangeThemeButton = (theme) => {
    setDropDownVisible(false);
    setActiveTheme(theme);
  };

  const handleToggleClick = () => {
    setDropDownVisible((currentState) => !currentState);
  };

  return (
    <div className="theme-toggle">
      <div className="theme-icon" onClick={handleToggleClick}>
        <img src={themeIcon} alt="Theme Icon" />
      </div>
      {dropDownVisible && (
        <div className="all-theme-wrapper">
          <h3>Change Theme</h3>
          <div className="theme-options">{themeButtons}</div>
        </div>
      )}
    </div>
  );
}

const getBackgroundStyle = (backgroundColor) => ({
  backgroundColor: backgroundColor,
});
export default ThemeToggle;
