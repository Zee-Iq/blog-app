import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./Sidebar.css";

const Sidebar = () => {
  const [ cats,setCats ] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  });
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h4 className="sidebarTitle">ABOUT ME</h4>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsa laboriosam cupiditate non nesciunt omnis rem maxime in unde
          necessitatibus.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>

        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
