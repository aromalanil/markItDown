import React from "react";
import Switch from "@material-ui/core/Switch";

function DarkCodeToggle({ isDarkMode, setDarkMode }) {
  const handleSwitchToggle = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <>
      <h4>Code Dark Mode</h4>
      <Switch checked={isDarkMode} onChange={handleSwitchToggle} />
    </>
  );
}

export default DarkCodeToggle;
