import React, { useState } from "react";
import { CommentRequest, CommentResponse } from "../types/Comment";
import { useUserStore } from "../stores/userStore";
import axios from "axios";

type CommentCreateProps = {
  postId: string;
};

const CommentCreate: React.FC<CommentCreateProps> = ({ postId }) => {
  const { user } = useUserStore();
  const initialCommentState: CommentRequest = {
    id: undefined,
    postid: postId,
    userid: user.id,
    content: "",
    commentDate: "",
  };
  const [comment, setComment] = useState<CommentRequest>(initialCommentState);

  const postComment = async () => {
    if (comment.content && comment.userid && comment.postid) {
      try {
        await axios.post(
          `http://localhost:8072/api/v1/comments/post/${comment.postid}`,
          comment,
        );
        setComment(initialCommentState);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="flex items-center space-x-4 py-4">
      <input
        type="text"
        placeholder="Enter your comment..."
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none"
        value={comment.content}
        onChange={(e) => setComment({ ...comment, content: e.target.value })}
      />

      <button
        className="btn btn-info px-4 py-2 rounded-md"
        onClick={postComment}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentCreate;
