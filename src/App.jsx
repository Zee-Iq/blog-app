import './App.css';
import Write from "./Components/Write/Write";
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
