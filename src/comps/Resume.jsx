import React from "react";
import "../css/Resume.css";

function Resume() {
  return (
    <div className="pages">
      <div className="resume">
        <div className="profile">
          <div className="profile_pic">사진</div>
          <div className="line">Line</div>
          <div className="career">Career</div>
        </div>
        <div className="skill">
          <div className="skill_text">text</div>
          <div className="skill_logo">logo</div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
