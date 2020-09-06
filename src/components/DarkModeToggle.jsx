import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import useLocalStorage from "../hooks/useLocalStorage";
import DarkCodeToggle from "./DarkCodeToggle";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", false);
  const [isCodeDark, setCodeDark] = useLocalStorage("codeDarkMode", false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const styleSheet = `/styles/${isCodeDark ? "dark" : "light"}.css`;
    document.getElementById("code-stylesheet").setAttribute("href", styleSheet);
  }, [isCodeDark]);

  const handleSwitchToggle = (e) => {
    const newMode = e.target.checked;
    setDarkMode(newMode);
    newMode ? setCodeDark(true) : setCodeDark(false);
  };

  return (
    <>
      <h4>Dark Mode</h4>
      <Switch checked={isDarkMode} onChange={handleSwitchToggle} />
      <DarkCodeToggle isDarkMode={isCodeDark} setDarkMode={setCodeDark} />
    </>
  );
}

export default DarkModeToggle;
