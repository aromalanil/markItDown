import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import useLocalStorage from "../hooks/useLocalStorage";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSwitchToggle = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <>
      <h4>Dark Mode</h4>
      <Switch checked={darkMode} onChange={handleSwitchToggle} />
    </>
  );
}

export default DarkModeToggle;
