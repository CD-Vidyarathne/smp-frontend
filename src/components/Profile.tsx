import React, { useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import { Link, useNavigate, useParams } from "react-router-dom";

const Profile: React.FC = () => {
  const { user, setUser } = useUserStore();
  const param = useParams<{ userId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.firstname === "") {
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      if (currentUser.id !== param.userId) {
        console.log("Something went wrong. Redirecting to login page...");
        if (currentUser.id) {
          localStorage.removeItem("user");
        }
        navigate("/");
      } else {
        setUser(JSON.parse(localStorage.getItem("user") || "{}"));
      }
    }
  }, []);

  return (
    <div>
      <h1>Hi {`${user.firstname} ${user.lastname}`}</h1>
      <Link to="/profile/feed">Feed</Link>
    </div>
  );
};

export default Profile;
