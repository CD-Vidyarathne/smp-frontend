import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../stores/userStore";

const ProfileRedirector: React.FC = () => {
  const res = localStorage.getItem("user");
  const resUser = res ? JSON.parse(res) : undefined;

  return resUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProfileRedirector;
