import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HandlebackArrow = () => {
  const navigate = useNavigate();

  const handlebackarrow = () => {
    navigate("/");
  };

  return (
    <IoArrowBack
      style={{ color: "white" }}
      id="backArrow"
      onClick={handlebackarrow}
    />
  );
};

export default HandlebackArrow;
