import React from "react";
import "../css/Resume.css";

function Resume() {
  return (
    <div className="pages">
      <div className="resume">
        <div className="profile">
          <div className="profile_pic">
            <div className="pic"></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill_text">
            <div className="skill_text_detail_title">Career</div>
            <div className="skill_text_detail">
              <div className="dot"></div>
              <div className="dot_text">
                2015.03~2021.02
                <br />
                건국대학교(글로컬캠퍼스)
                <br /> 경영경제학부 졸업
              </div>
            </div>
            <div className="skill_text_detail">
              <div className="dot"></div>
              <div className="dot_text">
                2021.03~2022.01
                <br />
                JAVA 기반 응용 SW <br />
                엔지니어링 웹/앱 개발자 <br />
                양성과정 수강
              </div>
            </div>
          </div>
          <div className="skill_logo">
            <div className="skill_logo_text">Skills</div>
            <div className="skill_logo_img">
              <div className="java"></div>
              <div className="html"></div>
              <div className="css"></div>
              <div className="spring"></div>
              <div className="springboot"></div>
              <div className="mysql"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
