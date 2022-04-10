import './App.css';
import Home from './Components/Pages/Home/Home';
import Single from './Components/Single/Single';
import Write from './Components/Single/Write.jsx/Write';
import TopBar from './Components/TopBar/TopBar';

import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <TopBar/>
    <Write />
    </>
  );
};
export default App;
