import React from "react";

import aboutImg from "../../../static/assets/images/about/about.jpg";

export default function() {

  return (
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + aboutImg + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "500px",
            boxShadow: "0px 0px 40px 20px grey",
            marginLeft: "15px"
          }}
          
        />

        <div className="right-column">
          <div className="about-title">nara malia</div>
            <div className="about-text">
            A full stack developer based in Draper, Utah, Nara's skills include HTML/CSS, Python, JavaScript, and React. 
            Born and raised in Hawaii, she is proficient in the Hawaiian language and passionate about Hawaiian culture. She has a broad range of experience encompassing entertainment, customer service, education, and government. Her interests include music, theatre, and design.
          </div>
        </div>
      </div>
  );
}
