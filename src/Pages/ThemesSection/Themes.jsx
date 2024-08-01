import React, { useState } from "react";
import "./Themes.css";

const Themes = ({ onThemeSelect }) => {
  const [selectedTheme, setSelectedTheme] = useState("white");

  const handleThemeClick = (color, themeName) => {
    setSelectedTheme(color);
    onThemeSelect(themeName);
  };

  return (
    <div id="screen">
      <div id="themes-sec">
        <div id="sec-1">Customize themes</div>
        <div
          id="themes-1"
          onClick={() => handleThemeClick("white", "light")}
          style={{
            border:
              selectedTheme === "white"
                ? "2px solid blue"
                : "2px solid #403c44",
          }}
        >
          <div>
            <img src="/theme-1.jpg" alt="light-theme" />
          </div>
          <span>Light</span>
        </div>

        <div
          id="themes-2"
          onClick={() => handleThemeClick("#171923", "dark")}
          style={{
            border:
              selectedTheme === "#171923"
                ? "2px solid blue"
                : "2px solid #403c44",
          }}
        >
          <div>
            <img src="/theme-2.jpg" alt="dark-theme" />
          </div>
          <span>Dark</span>
        </div>

        <div
          id="themes-3"
          onClick={() => handleThemeClick("#508C9B", "tail-blue")}
          style={{
            border:
              selectedTheme === "#508C9B"
                ? "2px solid blue"
                : "2px solid #403c44",
          }}
        >
          <div>
            <img src="/theme-3.jpg" alt="tail-theme" />
          </div>
          <span>Tail Blue</span>
        </div>
      </div>
      <div id="chat-screen" style={{ backgroundColor: selectedTheme }}>
        <div>
          <img src="/BotLogo.png" alt="BotIcon" />
        </div>
        <div id="Hello">Hello</div>
        <div id="pointer"></div>
        <div id="Hi">Hi</div>
      </div>
    </div>
  );
};

export default Themes;
