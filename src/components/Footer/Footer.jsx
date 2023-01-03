import React from "react";
import { FaReact, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row bg-dark text-light">
        <div className="col text-center">
          <em>
            Made in React
            <FaReact className="mx-2" size="20px"></FaReact>
          </em>

          <p>
            <em>
              By
              <a href="mailto:gmeshram774@gmail.com?subject=Regarding%20Job%20Opportunity%20&body=Hi%20Gagan%2C%0A%0A%0AThanks%2C%0AYour%20Name">
                Gagan Meshram
              </a>{" "}
              <FaHeart color="pink"></FaHeart>
            </em>
          </p>
        </div>
        <div className="col text-center">
          Powered by MealDB <em>2023</em>
        </div>
      </div>
    </div>
  );
}

export default Footer;
