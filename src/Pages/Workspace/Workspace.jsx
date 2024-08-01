import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BubbleInput from "../BubbleInputs/BubbleInput";
import Themes from "../ThemesSection/Themes";
import Analytics from "../Analytics/Analytics";
import { RxCross2 } from "react-icons/rx";
import "./Workspace.css";
import { TiTick } from "react-icons/ti";
import { SaveFormdetails } from "../../apis/Forms";
import { useNavigate } from "react-router-dom";

const Workspace = () => {
  const { id } = useParams();
  const [formName, setFormName] = useState("");
  const [formData, setFormData] = useState([]);
  const [userid, setUserId] = useState("");
  const [view, setView] = useState("bubble");
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [copiedLink, setCopiedLink] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [shareButtonColor, setShareButtonColor] = useState("#848890");

  const handleThemeSelect = (themeName) => {
    setSelectedTheme(themeName);
  };

  useEffect(() => {
    setUserId(id);
  }, [id]);

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleFormNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleBubbleClick = (type, value) => {
    setFormData((prevFormData) => [
      ...prevFormData,
      {
        key: `bubble-${prevFormData.length}`,
        type: "bubble",
        value: `${value}${
          prevFormData.filter((item) => item.value.startsWith(value)).length + 1
        }`,
        inputValue: "",
        theme: selectedTheme,
      },
    ]);
  };

  const handleInputClick = (type, value) => {
    setFormData((prevFormData) => [
      ...prevFormData,
      {
        key: `input-${prevFormData.length}`,
        type: "input",
        value: `${value}${
          prevFormData.filter((item) => item.value.startsWith(value)).length + 1
        }`,
        inputValue: "",
        theme: selectedTheme,
      },
    ]);
  };

  const handleInputChange = (index, newValue) => {
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[index] = {
        ...newFormData[index],
        inputValue: newValue,
      };
      return newFormData;
    });
  };

  const handleSave = async () => {
    const updatedFormData = formData.map((item) => ({
      ...item,
      theme: selectedTheme,
    }));

    console.log("Form Data before saving:", updatedFormData);

    try {
      const link = await SaveFormdetails({
        formName,
        formData: updatedFormData,
        userid,
      });
      console.log("Save response:", link);
      navigator.clipboard
        .writeText(link)
        .then(() => {
          setCopiedLink(link);
          setNotificationVisible(true);
          setShareButtonColor("blue");

          setTimeout(() => {
            setShareButtonColor("#848890");
          }, 2000);

          setTimeout(() => setNotificationVisible(false), 5000);
        })
        .catch((err) => {
          console.error("Failed to copy link:", err);
        });
    } catch (error) {
      console.error("Error saving form details:", error);
    }
  };

  return (
    <>
      <div id="Workspace-header">
        <div id="header-left">
          <input
            type="text"
            placeholder="Enter Form Name"
            value={formName}
            onChange={handleFormNameChange}
          />
        </div>
        <div id="header-middle">
          <button
            id="Flow-btn"
            className={view === "bubble" ? "active" : ""}
            onClick={() => handleViewChange("bubble")}
          >
            Flow
          </button>
          <button
            id="themes-btn"
            className={view === "themes" ? "active" : ""}
            onClick={() => handleViewChange("themes")}
          >
            Themes
          </button>
          <button
            id="response-btn"
            className={view === "analytics" ? "active" : ""}
            onClick={() => handleViewChange("analytics")}
          >
            Responses
          </button>
        </div>
        <div id="header-right">
          <button id="share-btn" style={{ backgroundColor: shareButtonColor }}>
            Share
          </button>
          <button id="save-btn" onClick={handleSave}>
            Save
          </button>
          <RxCross2
            style={{ color: "red", fontSize: "larger" }}
            onClick={() => navigate("/dashboard")}
          />
        </div>
      </div>
      {view === "bubble" && (
        <BubbleInput
          onBubbleClick={handleBubbleClick}
          onInputClick={handleInputClick}
          formData={formData}
          onInputChange={handleInputChange}
          selectedTheme={selectedTheme}
        />
      )}
      {view === "themes" && <Themes onThemeSelect={handleThemeSelect} />}
      {view === "analytics" && <Analytics />}
      {notificationVisible && (
        <div id="link-notification">
          <p>Link copied</p>
          <TiTick style={{ color: "blue" }} />
        </div>
      )}
    </>
  );
};

export default Workspace;
