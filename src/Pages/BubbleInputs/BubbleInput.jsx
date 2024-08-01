import React from "react";
import "./BubbleInput.css";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiImage } from "react-icons/fi";
import { LuFilm } from "react-icons/lu";
import { MdGif } from "react-icons/md";
import { PiTextTBold } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdOutlineStarRate } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { MdFlag } from "react-icons/md";

const BubbleInput = ({
  onBubbleClick,
  onInputClick,
  formData,
  onInputChange,
}) => {
  return (
    <div id="Selection-area">
      <div id="Selection-main">
        <span>Bubbles</span>
        <div id="bubbles">
          <div
            className="bubble"
            onClick={() => onBubbleClick("bubble", "text")}
          >
            <MdChatBubbleOutline className="bubble-icons" /> Text
          </div>
          <div
            className="bubble"
            onClick={() => onBubbleClick("bubble", "image")}
          >
            <FiImage className="bubble-icons" /> Image
          </div>
          <div
            className="bubble"
            onClick={() => onBubbleClick("bubble", "video")}
          >
            <LuFilm className="bubble-icons" /> Video
          </div>
          <div
            className="bubble"
            onClick={() => onBubbleClick("bubble", "gif")}
          >
            <MdGif className="bubble-icons" style={{ fontSize: "20px" }} /> GIF
          </div>
        </div>
        <span>Inputs</span>
        <div id="Inputs">
          <div className="input" onClick={() => onInputClick("input", "text")}>
            <PiTextTBold className="Input-icons" /> Text
          </div>
          <div
            className="input"
            onClick={() => onInputClick("input", "number")}
          >
            <MdOutlineNumbers className="Input-icons" /> Number
          </div>
          <div className="input" onClick={() => onInputClick("input", "email")}>
            <MdAlternateEmail className="Input-icons" /> Email
          </div>
          <div className="input" onClick={() => onInputClick("input", "phone")}>
            <FaPhoneAlt className="Input-icons" /> Phone
          </div>
          <div className="input" onClick={() => onInputClick("input", "date")}>
            <SlCalender className="Input-icons" /> Date
          </div>
          <div
            className="input"
            onClick={() => onInputClick("input", "ratings")}
          >
            <MdOutlineStarRate className="Input-icons" /> Ratings
          </div>
          <div
            className="input"
            onClick={() => onInputClick("input", "buttons")}
          >
            <SiTicktick className="Input-icons" /> Buttons
          </div>
        </div>
      </div>
      <div id="input-section">
        <div id="start">
          <MdFlag style={{ color: "white" }} />
          <span>Start</span>
        </div>
        {formData.length > 0 && (
          <div id="selected">
            {formData.map((form, index) => (
              <div key={index} className="form-item">
                {form.type === "bubble" && <p>{form.value}</p>}
                {form.type === "input" && <p>{form.value}</p>}
                <input
                  type="text"
                  value={form.inputValue}
                  onChange={(e) => onInputChange(index, e.target.value)}
                  placeholder={
                    form.value === "text"
                      ? "Enter your text here"
                      : ["image", "video", "gif"].includes(
                          form.value.split(/[0-9]/)[0]
                        )
                      ? "Click here to add link"
                      : "Click here to edit"
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BubbleInput;
