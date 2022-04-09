Register;
import "./App.css";
import Home from "./Pages/Home/Home";
import Register from "./Register/Register";
import TopBar from "./TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

master;

const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Register />
      </Router>
    </div>
  );
};
export default App;
