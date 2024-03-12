import React, { useEffect } from "react";
import SinglePost from "./SinglePost";
import axios from "axios";
import { usePostStore } from "../stores/postStore";

const AllPosts: React.FC = () => {
  const { allPosts, setAllPosts } = usePostStore();

  const getAllPosts = async () => {
    const res = await axios.get("http://localhost:8071/api/v1/posts/");
    console.log(res);
    setAllPosts(res.data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <section className="mt-4">
      {allPosts.map((post) => (
        <SinglePost post={post} key={post.postId} />
      ))}
    </section>
  );
};

export default AllPosts;
