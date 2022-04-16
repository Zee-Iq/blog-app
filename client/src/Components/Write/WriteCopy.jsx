import { useState } from "react";
import "./writeCopy.css";

export default function Tag() {
  const [tags, setTags] = useState([]);
  const addTag = (e) => {
    console.log(e.target.value, e.key);

    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };

  const removeTag = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  return (
    <div className="tags">
      <div className="tag-Container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag} <span onClick={() => removeTag(tag)}><i class="fa-solid fa-square-xmark"></i></span>
            </div>
          );
        })}

        <input onKeyDown={addTag} />
      </div>
    </div>
  );
}
