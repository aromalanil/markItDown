import React, { useEffect, useRef } from "react";
import themeData from "../data/theme";
import tickIcon from "../icons/tick.svg";

function ThemeSelector({ isVisible, setVisible, activeTheme, setActiveTheme }) {
  const themeSelectorRef = useRef(null);

  const handleThemeButtonClick = (theme) => {
    setVisible(false);
    setActiveTheme(theme);
  };

  useEffect(() => {
    const hideDropDown = (e) => {
      if (
        themeSelectorRef.current &&
        !themeSelectorRef.current.contains(e.target)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener("click", hideDropDown);
    return () => {
      document.removeEventListener("click", hideDropDown);
    };
  }, [themeSelectorRef, setVisible]);

  const themeButtons = themeData.map((theme) => {
    return (
      <div
        onClick={() => handleThemeButtonClick(theme)}
        className="toggle-btn"
        style={getBackgroundStyle(theme.primaryColor)}
        key={theme.name}>
        {theme.name === activeTheme.name && (
          <img src={tickIcon} alt={`theme-${theme.name.toLowerCase}`} />
        )}
      </div>
    );
  });

  return isVisible ? (
    <div className="all-theme-wrapper" ref={themeSelectorRef}>
      <h3>Change Theme</h3>
      <div className="theme-btn">{themeButtons}</div>
    </div>
  ) : (
    <></>
  );
}

const getBackgroundStyle = (backgroundColor) => ({
  backgroundColor: backgroundColor,
});

export default ThemeSelector;
