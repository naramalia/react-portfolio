import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImg from "../../../static/assets/images/contact/img_connect.jpg";

export default function() {

  return (
      <div className="content-page-wrapper">
        <div
          className="left-column"
          style={{
            background: "url(" + contactImg + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "400px",
            boxShadow: "0px 0px 20px 20px darkgray",
            marginLeft: "15px"
          }}
        />

        <div className="right-column">
          <div className="contact-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="phone" />
              </div>
              <div className="text">
                808-387-7420
              </div>
            </div>
           
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <div className="text">
                devnaramalia@gmail.com
              </div>
            </div>
            
            <div className="bullet-point-group">
              <div className="icon">
                <FontAwesomeIcon icon="map-marked-alt" />
              </div>
              <div className="text">
                Draper, UT
              </div>
            </div>

          </div>
        </div>
      </div>
  );
}
