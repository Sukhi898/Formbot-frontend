import React from "react";
import "./ChatBox.css";
import { IoSendSharp } from "react-icons/io5";

const ChatBox = () => {
  return (
    <>
      <div id="chat-area">
        <div id="chat-box">
          <div>
            <img src="BotLogo.png" alt="BotIcon" />
          </div>
          <div id="Hello">Hello</div>
          <div id="pointer"></div>
          <div id="Hi">Hi </div>
        </div>
        <div id="Reply-btn">
          <div className="input-container">
            <input type="text" id="send-btn1" />
            <button type="button" className="send-button">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
