import React from "react";
import "./storyreel.css";
import Story from "./Story";
import imgp from "../img/imgp.jpg";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={imgp} title="cj" profileSrc={imgp} />
      <Story image={imgp} title="cj" profileSrc={imgp} />
      <Story image={imgp} title="cj" profileSrc={imgp} />
    </div>
  );
}

export default StoryReel;
