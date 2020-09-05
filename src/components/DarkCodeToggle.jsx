import React, { useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import useLocalStorage from "../hooks/useLocalStorage";

function DarkCodeToggle() {
  const [darkMode, setDarkMode] = useLocalStorage("codeDarkMode", false);

  useEffect(() => {
      const styleSheet = `/styles/${darkMode?"dark":"light"}.css`
      document.getElementById('code-stylesheet').setAttribute("href", styleSheet); 
  }, [darkMode])

  const handleSwitchToggle = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <>
      <h4>Code Dark Mode</h4>
      <Switch checked={darkMode} onChange={handleSwitchToggle} />
    </>
  );
}

export default DarkCodeToggle;
