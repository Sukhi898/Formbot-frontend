import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [id, setID] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [forms, setForms] = useState([]);
  const [folderToDelete, setFolderToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    console.log(id);
    setUser(user);
    setID(id);
  }, []);

  const handleCreateFolder = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setFolderName("");
  };

  const handleCreate = () => {
    if (folderName) {
      setFolders([...folders, { id: Date.now(), name: folderName }]);
    }
    handleClosePopup();
  };

  const handleDeleteFolder = (id) => {
    setFolderToDelete(id);
    setIsDeletePopupOpen(true);
  };

  const confirmDeleteFolder = () => {
    setFolders(folders.filter((folder) => folder.id !== folderToDelete));
    setIsDeletePopupOpen(false);
    setFolderToDelete(null);
  };

  const handleCloseDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setFolderToDelete(null);
  };

  const handleCreateForm = () => {
    setForms([...forms, { id: Date.now(), name: "new form" }]);
  };

  const handleDeleteForm = (id) => {
    setForms(forms.filter((form) => form.id !== id));
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleSetting = () => {
    navigate(`/dashboard/settings/${id}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div id="dashboard">
        <div id="Dash-header">
          <div id="Username">
            {user}'s Workspace
            {isDropdownOpen ? (
              <MdOutlineKeyboardArrowUp
                className="arrow-icon"
                onClick={toggleDropdown}
                style={{ fontSize: "large" }}
              />
            ) : (
              <IoIosArrowDown className="arrow-icon" onClick={toggleDropdown} />
            )}
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item" onClick={handleSetting}>
                  Settings
                </div>
                <div
                  className="dropdown-item"
                  style={{ color: "#FFA54C" }}
                  onClick={handleLogout}
                >
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="bottom-border"></div>
        <div id="form-sec">
          <div id="btn-area">
            <div id="Folders">
              <button className="create-btn1" onClick={handleCreateFolder}>
                <AiOutlineFolderAdd
                  style={{ backgroundColor: "transparent" }}
                />
                <span>Create a folder</span>
              </button>
              {folders.map((folder) => (
                <div key={folder.id} className="folder-item">
                  <span>{folder.name}</span>
                  <RiDeleteBin6Line
                    style={{ color: "red" }}
                    onClick={() => handleDeleteFolder(folder.id)}
                  />
                </div>
              ))}
            </div>
            <div id="createbot-area">
              <div
                id="create-bot"
                onClick={() => navigate(`/dashboard/workspace/${id}`)}
              >
                <FaPlus
                  style={{ backgroundColor: "transparent", fontSize: "24px" }}
                />
                <span>Create a typebot</span>
              </div>
              {forms.map((form) => (
                <div key={form.id} className="form-item">
                  <RiDeleteBin6Line
                    id="delete-btn"
                    onClick={() => handleDeleteForm(form.id)}
                  />
                  <span>{form.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Create a new folder</h3>
              <input
                type="text"
                placeholder="Folder name"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
              <button onClick={handleCreate}>Create</button>
              <button onClick={handleClosePopup}>Cancel</button>
            </div>
          </div>
        )}
        {isDeletePopupOpen && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Are you sure you want to delete this folder?</h3>
              <button onClick={confirmDeleteFolder}>Delete</button>
              <button onClick={handleCloseDeletePopup}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
