import React from "react";
import { PostResponse } from "../types/Post";

type SinglePostProps = {
  post: PostResponse;
};

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  return (
    <div className="p-4 shadow-md shadow-base-300 border border-base-300 rounded-md mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.userImgURL}
          alt={`${"Chamindu Vidyarathne"}'s profile`}
          className="w-8 h-8 rounded-full object-cover mr-2"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-info">
            {`${post.userFirstname} ${post.userLastname}`}
          </span>
          <span className="font-semibold text-gray-500">
            {`Posted on ${post.postDate}`}
          </span>
        </div>
      </div>

      <p className="mb-4 text-secondary-content">{post.postText}</p>
      {post.postImgURL && (
        <img
          src={post.postImgURL}
          alt="Post"
          className="w-[720px] h-[720px] object-cover mb-4 rounded-md"
        />
      )}

      <div className="flex justify-end">
        <button className=" hover:underline">Comment</button>
      </div>
    </div>
  );
};

export default SinglePost;
