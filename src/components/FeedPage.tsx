import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import ContactSection from "./ContactSection.tsx";
import axios from "axios";
import Navbar from "./Navbar.tsx";

const FeedPage: React.FC = () => {
  const { user, setUser, setAllUsers } = useUserStore();
  const resUser = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const setUserActive = async () => {
    if (user.firstname) {
      try {
        await axios.post(`http://localhost:8070/api/v1/users/update`, {
          ...user,
          active: true,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getAllUsers = async () => {
    const res = await axios.get("http://localhost:8070/api/v1/users");
    console.log(res);
    setAllUsers(res.data);
  };
  useEffect(() => {
    if (user.firstname === "") {
      if (resUser.id && resUser.id !== "") {
        setUser(resUser);
      } else {
        console.log("Something went wrong. Redirecting to login page...");
        if (resUser.id) {
          localStorage.removeItem("user");
        }
        navigate("/");
        return;
      }
    }
    setTimeout(() => {
      setUserActive();
      getAllUsers();
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Feed</h1>
      <Link to={`/profile/${user.id}`}>Profile</Link>
      <ContactSection />
    </div>
  );
};

export default FeedPage;
