import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
  const [message, setMessage] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const confirmPassword = e.target[2].value;

    if (email === "" || password === "" || confirmPassword === "") {
      return setMessage("Fill Out Details!");
    }

    if (password !== confirmPassword) {
      return setMessage("Password do not match!");
    }

    try {
      await signUp(email, password);
      navigate("/");
    } catch {
      setMessage("Failed To Sign Up");
    }
  }

  return (
    <div className="card">
      <h1>Sign Up</h1>
      <p className={message ? "error" : ""}>{message}</p>
      <form onSubmit={handleSignUp}>
        <label>Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <label>Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <label>Confirm Password</label>
        <input type={"password"} placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Already have a account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
