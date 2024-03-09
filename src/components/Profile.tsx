import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useUserStore } from "../stores/userStore";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const { user, setUser } = useUserStore();

  const getUser = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8070/api/v1/users/${userId}`,
      );
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>Hi {`${user.firstname} ${user.lastname}`}</h1>
    </div>
  );
};

export default Profile;
