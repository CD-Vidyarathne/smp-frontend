import React from "react";
import { Navigate } from "react-router-dom";

const ProfileRedirector: React.FC = () => {
  const res = localStorage.getItem("user");
  const user = res ? JSON.parse(res) : undefined;

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return <Navigate to={`./${user?.userID}`} />;
  }
};

export default ProfileRedirector;
