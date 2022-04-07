import Header from "../../Header/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Siderbar/Sidebar";
import "./Home.css"
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar/>
      </div>
    </>
  );
};

export default Home;
