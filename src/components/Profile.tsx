import React from "react";
import { useParams } from "react-router-dom";

const Profile: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  return (
    <div>
      <h1>Hi {userId}</h1>
    </div>
  );
};

export default Profile;
