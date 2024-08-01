import React, { useState } from "react";
import "./SignUpPage.css";
import HandlebackArrow from "../../Components/HandlebackArrow";
import { Register } from "../../apis/User";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  const handlesignup = async () => {
    try {
      const response = await Register(name, email, password, confirmPassword);
      console.log("API Response:", response);

      if (response.status === 201) {
        console.log("Registration successful");
        localStorage.setItem("email", email);
        alert("Registration successful!");
        navigate("/login");
      } else {
        setRegistrationError(response.message || "Registration failed");
        console.error("Registration failed:", response.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationError(error.message || "Network Error");
    }
  };

  return (
    <div id="LoginPage">
      <HandlebackArrow />
      <div>
        <form id="Sign-up">
          <label className="inputbox">
            <input
              type="text"
              placeholder="Enter a username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="inputbox">
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="inputbox">
            <input
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label className="inputbox">
            <input
              type="password"
              placeholder="**********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="button" onClick={handlesignup}>
            Sign up
          </button>
          {registrationError && (
            <p className="error-message">{registrationError}</p>
          )}
        </form>
        <div id="register">
          <span id="sp1">Don't have an account?</span>
          <span id="sp2" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
