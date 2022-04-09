import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.picsum.photos/id/1041/5184/2916.jpg?hmac=TW_9o6HeD7H7I7NVo-S1Fa1iAvzQ10uvmJqsXvNoi0M"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Lifestyle</span>
        </div>
        <span className="postTitle">
          Lorem, ipsum dolor sit amet consectetur 
        </span>
        <hr />
        <span className="postDate"> 1 hour ago</span>
      </div>
    </div>
  );
};/* test */

export default Post;