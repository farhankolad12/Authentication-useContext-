import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { logout, currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/");
    }
  }, []);

  async function handleLogout() {
    try {
      await logout();
    } catch {
      setMessage("Failed To Logout");
    }
  }

  return (
    <div className="card">
      <h2>{currentUser && currentUser.email}</h2>
      <button onClick={handleLogout}>Logout</button>
      <p className={message ? "error" : ""}>{message}</p>
    </div>
  );
}
