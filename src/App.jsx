
import "./App.css";

import Register from "./Register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Router>
      <TopBar/>
        <Register />
      </Router>
    </div>
  );
};
export default App;
