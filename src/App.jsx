import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Register from "./Register/Register";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Home />
        <Register />
      </Router>
    </>
  );
};
export default App;
