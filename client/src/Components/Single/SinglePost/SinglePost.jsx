import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.picsum.photos/id/143/3600/2385.jpg?hmac=gSMmnYrmuP5BJ47kmErfYdYu1L1GLePM1SNm-D2lqiA"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Zeeshan</b>
          </span>
          <span className="singlePostDate "> 1 hour ago</span>
        </div>
          <p className="singlePostDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut
            et inventore praesentium enim voluptatum magnam porro sint commodi
            sunt, iusto architecto explicabo assumenda ipsa nam delectus? Ut
            fugiat assumenda velit maiores harum amet qui laudantium nostrum,
            sapiente magni at inventore minus esse quam molestias iste.
            Assumenda minus perspiciatis possimus?
          </p>
      </div>
    </div>
  );
};

export default SinglePost;
