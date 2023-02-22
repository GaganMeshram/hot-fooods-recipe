import React from "react";
import "./footer.css";
import { FaReact, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row text-dark p-2" id="footer-div">
        <div className="col" id="footer">
          <p className="my-auto">
            Made in React<FaReact className="mx-2" size="20px"></FaReact>by {''}
            <a
              href="mailto:gmeshram774@gmail.com?subject=Regarding%20Job%20Opportunity%20&body=Hi%20Gagan%2C%0A%0A%0AThanks%2C%0AYour%20Name"
              className=""
              id="footer"
            >
              Gagan Meshram
            </a>
          </p>
        </div>
        <div className="col text-end" id="footer">
          Powered by MealDB 2023
        </div>
      </div>
    </div>
  );
}

export default Footer;
