import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { updateUserDetails } from "../../apis/User";
import "./Settings.css";
import { RiUserUnfollowLine } from "react-icons/ri";

const Settings = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");

    console.log("Stored Name:", storedName);
    console.log("Stored Email:", storedEmail);

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    else setEmail("No email found");
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserDetails(
        id,
        oldPassword,
        name,
        email,
        newPassword
      );
      if (response.status === "SUCCESS") {
        localStorage.setItem("name", response.user.name);
        localStorage.setItem("email", response.user.email);
        alert("User details updated successfully");
        navigate("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error("Update failed:", error.message);
      setError("Update failed. Please try again.");
    }
  };

  return (
    <div id="setting">
      <h1 id="setting-h1">Settings</h1>
      <form id="Inputbox-2" onSubmit={handleUpdate}>
        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <IoIosLock className="input-icon" />
          <input
            type="email"
            placeholder="Update Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEye className="eye-icon" />
        </div>
        <div className="input-wrapper">
          <IoIosLock className="input-icon" />
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <FaEye className="eye-icon" />
        </div>
        <div className="input-wrapper">
          <IoIosLock className="input-icon" />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <FaEye className="eye-icon" />
        </div>
        {error && <div className="error">{error}</div>}
        <button id="update-btn" type="submit">
          Update
        </button>
      </form>
      <div id="logout" onClick={() => navigate("/")}>
        <TbLogout id="logout-icon" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Settings;
