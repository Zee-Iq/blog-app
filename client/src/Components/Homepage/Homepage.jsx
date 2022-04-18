import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../Siderbar/Sidebar";
import "./Homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
