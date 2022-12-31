import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiIndiaGate } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Cards.css";

function CategoryCards() {
  return (
    <div className="container">
      <div className="row">
        {/* card 1 */}
        <div className="col-md-12 col-lg-6">
          <div class="card mb-3">
            <div className="int-img"></div>
            <div class="card-body">
              <h5 class="card-title text-primary display-5">
                <FaPizzaSlice className="mx-2"></FaPizzaSlice>Italian
              </h5>

              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn btn-light" to="/italian">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-md-12 col-lg-6">
          <div class="card mb-3">
            <div className="chn-img"></div>
            <div class="card-body">
              <h5 class="card-title text-danger display-5">
                <GiNoodles className="mx-2"></GiNoodles>Chinese
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn btn-light" to="/chinese">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-md-12 col-lg-6">
          <div class="card mb-3">
            <div className="amc-img"></div>
            <div class="card-body">
              <h5 class="card-title text-dark display-5">
                <FaHamburger className="mx-2"></FaHamburger>Americano
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn btn-light" to="/american">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="col-md-12 col-lg-6">
          <div class="card mb-3">
            <div className="ind-img"></div>
            <div class="card-body">
              <h5 class="card-title text-success display-5">
                <GiIndiaGate className="mx-2"></GiIndiaGate>Indian
              </h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link className="btn btn-light" to="/indian">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCards;
