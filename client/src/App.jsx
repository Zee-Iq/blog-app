import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Route, Switch , Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
