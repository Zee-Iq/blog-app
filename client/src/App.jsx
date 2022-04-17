import "./App.css";
import TopBar from "./Components/TopBar/TopBar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Write from "./Components/Write/Write";
import UserProfile from "./Components/UserProfile/UserProfile";
import Single from "./Components/Single/Single";
import Tags from "./Components/Tags/Tags";

const user = true;
/* test */
const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/tagexample" element={<Tags />} > </Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/register"
          element={user ? <Homepage /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Homepage /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route
          path="/userprofile"
          element={user ? <UserProfile /> : <Register />}
        ></Route>
         <Route path="/post" element={<Single />}> </Route> 
         <Route path="/emailconfirm/:token" exact element={<EmailConfirm />}></Route>
         {/* <Route path='/forgotpass' exact component={}></Route> */}
         
      </Routes>
    </Router>
  );
};
export default App;