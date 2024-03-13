import React from "react";
import { useUserStore, initialState } from "../stores/userStore";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const signOut = async () => {
    console.log("Signing Out");
    if (user.firstname) {
      try {
        navigate("/");
        localStorage.removeItem("user");
        await axios.post(`http://localhost:8070/api/v1/users/update`, {
          ...user,
          active: false,
        });
        setUser(initialState);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <nav className="p-4 shadow-lg bg-base-200 h-[11vh] w-full ">
      <div className="mx-auto flex justify-between w-full items-center">
        <div
          className="font-bold text-[36px] cursor-pointer select-none"
          onClick={() => navigate("/profile/feed")}
        >
          Connecto
        </div>

        <div className="flex space-x-4">
          <Link to={`/profile/${user.id}`}>
            <button className="btn btn-outline rounded-md p-2">Profile</button>
          </Link>

          <button className="btn btn-outline rounded-md p-2" onClick={signOut}>
            Sign Out
          </button>
        </div>

        <div className="flex items-center space-x-4 border border-info rounded-full p-4">
          <img
            src={user.imageURL}
            alt="User Profile"
            className=" w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-info font-semibold">{`${user.firstname} ${user.lastname}`}</span>
            <span className="text-gray-500 text-md">{`Member since ${user.joinedDate}`}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
