import "./App.css";
import Home from "./Pages/Home/Home";
import Register from "./Register/Register";
import Login from "./Login/Login";
import TopBar from "./TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    /*  <>
    <TopBar/>
    <Home/>
    <Register/>
    </> */
    <Router>
      <TopBar />
         <Login />
         <Register />
    </Router>
  );
};
export default App;
