import Sidebar from "../Siderbar/Sidebar";
import "./Single.css";
import SinglePost from "./SinglePost/SinglePost";

const Single = () => {
  return <div className="single">
      <SinglePost />
      <Sidebar />
      </div>;
};

export default Single;
