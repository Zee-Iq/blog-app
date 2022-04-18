import "./SinglePost.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {
  const location = useLocation();
  /*  const path = location.pathname.split("/")[2]; */
  const { postId } = useParams();
  const [post, setPost] = useState({});

  console.log(postId);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + postId);
      setPost(res.data);
      console.log(res);
    };
    getPost();
  }, [postId]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.postImg && (
          <img src={post.postImg} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate ">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDescription">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
