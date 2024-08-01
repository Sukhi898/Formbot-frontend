import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import HandlebackArrow from "../../Components/HandlebackArrow";
import { Login } from "../../apis/User";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const StoredEmail = localStorage.getItem("email");
    const StoredPassword = localStorage.getItem("password");

    if (StoredEmail) {
      setEmail(StoredEmail);
    }
    if (StoredPassword) {
      setPassword(StoredPassword);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Login(email, password);
      console.log(response);
      if (response.status === "200") {
        localStorage.setItem("token", response.token);
        localStorage.setItem("status", response.status);
        localStorage.setItem("name", response.name);
        localStorage.setItem("id", response.id);
        localStorage.setItem("email", response.email);
        navigate("/dashboard");
      } else {
        setError(response.message);
      }
    } catch (error) {
      setError("Login failed. Please check your email and password.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div id="LoginPage">
      <HandlebackArrow />
      <form id="Sign-in" onSubmit={handleLogin}>
        <label id="input">
          Email
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label id="input">
          Password
          <input
            type="password"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <div className="error">{error}</div>}
        <button type="submit">Log in</button>
      </form>
      <div id="register">
        <span id="p1">Don't have an account?</span>
        <span id="p2" onClick={() => navigate("/signup")}>
          Register now
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
