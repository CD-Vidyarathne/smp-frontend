import React from "react";
import { useUserStore, initialState } from "../stores/userStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const signOut = async () => {
    console.log("Signing Out");
    if (user.firstname) {
      try {
        navigate("/");
        localStorage.removeItem("user");
        const res = await axios.post(
          `http://localhost:8070/api/v1/users/update`,
          { ...user, active: false },
        );
        setUser(initialState);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Navbar;
