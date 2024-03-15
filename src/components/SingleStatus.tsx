import React from "react";
import { StatusResponse } from "../types/Status";

type SingleStatusProps = {
  status: StatusResponse;
};

const SingleStatus: React.FC<SingleStatusProps> = ({ status }) => {
  return (
    <div className="border border-base-content relative min-w-44 min-h-64 bg-gray-200 rounded-lg overflow-hidden">
      <img
        src={status.statusImgURL}
        alt="Status Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 flex text-primary items-center gap-2 bg-base-300 w-full px-2 py-1 rounded-lg">
        <img
          src={status.userImgURL}
          alt={status.userFirstname}
          className="w-10 h-10 rounded-full border-2 border-info"
        />
        <p>{status.userFirstname}</p>
      </div>
    </div>
  );
};

export default SingleStatus;
