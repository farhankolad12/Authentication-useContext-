import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [message, setMessage] = useState("");
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/");
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email === "" || password === "") {
      return setMessage("Fill Out Details!");
    }

    try {
      await login(email, password);
      navigate("/");
    } catch {
      setMessage("Email/Password Is Wrong!");
    }
  }

  return (
    <div className="card">
      <h1>Login</h1>
      <p className={message ? "error" : ""}>{message}</p>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <label>Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Need an Account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
