import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [activeTab, setActiveTab] = useState("admin");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <div className="login-form-container">
        <div className="login-tab-container">
          <button
            className={`login-tab ${activeTab === "admin" ? "active" : ""}`}
            onClick={() => handleTabChange("admin")}
          >
            Admin
          </button>
          <button
            className={`login-tab ${activeTab === "company" ? "active" : ""}`}
            onClick={() => handleTabChange("company")}
          >
            Company
          </button>
        </div>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
