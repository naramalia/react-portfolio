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
          }}
        />

        <div className="right-column">
          <div className="about-title">Nara Malia Cardenas</div>
            <div className="about-text">
            Nara Malia Cardenas is a full stack developer based in Utah. 
            Current skills include HTML/CSS, Python, JavaScript, and React. 
            She built this portfolio app as part of the Bottega coding bootcamp curriculum.
          </div>
        </div>
      </div>
  );
}
