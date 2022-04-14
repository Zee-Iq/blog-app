import { useLocation } from 'react-router-dom';
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../Siderbar/Sidebar";
import "./Homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}