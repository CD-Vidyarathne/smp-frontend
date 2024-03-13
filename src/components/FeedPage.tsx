import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import ContactSection from "./ContactSection.tsx";
import axios from "axios";
import Navbar from "./Navbar.tsx";
import ShortcutSection from "./ShorcutSection.tsx";
import Wall from "./Wall.tsx";
import "../styles/Scrollbar.css";

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
  }, []);

  useEffect(() => {
    setUserActive();
    getAllUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex ">
        <section
          id="shortcuts"
          className="h-[89vh] basis-1/6 overflow-y-scroll bg-base-300 "
        >
          <ShortcutSection />
        </section>
        <section id="wall" className="h-[89vh] basis-7/12 overflow-y-scroll">
          <Wall />
        </section>
        <section
          id="contacts"
          className="h-[89vh] basis-3/12 overflow-y-scroll border-l "
        >
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default FeedPage;
