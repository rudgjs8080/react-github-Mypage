import React from "react";
import "../css/Portfolio.css";

function Portfolio() {
  return (
    <div className="pages">
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio_list">
          <a
            href="https://hello-android-41e92.firebaseapp.com/"
            target="_blank"
            rel="noreferrer"
            className="guestbook"
          >
            <div className="guestbook_image"></div>
            <div className="detail">방명록</div>
          </a>
          <a
            href="https://github.com/wooseok0727/MEETT"
            target="_blank"
            rel="noreferrer"
            className="meett"
          >
            <div className="meett_image"></div>
            <div className="detail">
              모임간의 일정관리
              <br />웹 서비스!
            </div>
          </a>
          <a
            href="https://github.com/rudgjs8080/Spring-MVC/tree/master/Project_Woo_02"
            target="_blank"
            rel="noreferrer"
            className="woo"
          >
            <div className="woo_image"></div>
            <div className="detail">
              오늘의 날씨와 그에 맞는 <br />
              간단한 옷차림을 알려주는 <br />웹 서비스!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
