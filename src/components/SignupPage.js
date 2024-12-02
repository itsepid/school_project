import React, { useState } from "react";
import axios from "axios";
import "./SignupPage.css"; // Import the CSS file

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Check if passwords match
    if (formData.password !== formData.repeatPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:8000/signup", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        setSuccessMessage("Signup successful! 🎉");
        setFormData({ username: "", password: "", repeatPassword: "" });
      }
    } catch (err) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSubmit} className="form">
          {/* Username */}
          <label className="label">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
            required
          />

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />

          {/* Repeat Password */}
          <label className="label">Repeat Password</label>
          <input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            className="input"
            required
          />

          {/* Error Message */}
          {error && <p className="error">{error}</p>}

          {/* Success Message */}
          {successMessage && <p className="success">{successMessage}</p>}

          {/* Submit Button */}
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;