import "./UserProfile.css";
import Sidebar from "../Siderbar/Sidebar";
const UserProfile = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture </label>
          <div className="settingsPP">
            <img
              className="settingsPPImg"
              src="https://i.picsum.photos/id/1038/3914/5863.jpg?hmac=SGtXryWDkn_eVQdA1NjYrikcsrIfcfS4SFYHo4lCpkQ"
              alt=""
            />
            <label htmlFor="filesInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="filesInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Zeeshan" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Passcode</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default UserProfile;
