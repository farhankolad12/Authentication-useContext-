import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoutes({ component }) {
  const { currentUser } = useAuth();

  if (currentUser !== null) {
    return component;
  } else {
    return <Navigate to={"/login"} />;
  }
}
