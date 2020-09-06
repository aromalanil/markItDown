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
      setCodeDark(true);
    } else {
      document.body.classList.remove("dark");
      setCodeDark(false);
    }
    // eslint-disable-next-line
  }, [isDarkMode]);

  useEffect(() => {
    const styleSheet = `/styles/${isCodeDark ? "dark" : "light"}.css`;
    document.getElementById("code-stylesheet").setAttribute("href", styleSheet);
  }, [isCodeDark]);

  const handleSwitchToggle = (e) => {
    setDarkMode(e.target.checked);
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
