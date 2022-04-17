import "./Write.css";
import { useState } from "react";

const Write = () => {

  const [name, setName] = useState("mario")

  const handleClick = () => {
    setName("luigi")
  }
  

  return (
    <div className="write">
      <img className="writeImg" src="https://i.picsum.photos/id/1055/5472/3648.jpg?hmac=1c293cGVlNouNQsjxT8y3nsYO-7qLCaOBEGvih0ibEU" alt="" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i title="Add an image" class="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text "
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            type="text"
            placeholder="Share your story..."
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
        <p>{name}</p>
        <button onClick={handleClick}>{name}</button>
      </form>
    </div>
  );
};

export default Write;
