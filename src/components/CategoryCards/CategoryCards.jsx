import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiIndiaGate } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Cards.css";

function CategoryCards() {
  return (
    <div className="container">
      <div className="row">
        {/* card 1 */}
        <div className="col-md-12 col-lg-6">
          <div className="card mb-3">
            <div className="int-img"></div>
            <div className="card-body">
              <h5 className="card-title text-primary display-5">
                <FaPizzaSlice className="mx-2"></FaPizzaSlice>Italian
              </h5>

              <p className="card-text">
                Here are our 17 best Italian recipes that include Italian veg
                dishes, Italian pasta recipes, Italian pizza recipes, Italian
                salad, Italian desserts and Italian bread recipes. Go on and
                try, you know you can't resist!
              </p>
              <Link className="btn btn-light" to="/italian">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="col-md-12 col-lg-6">
          <div className="card mb-3">
            <div className="chn-img"></div>
            <div className="card-body">
              <h5 className="card-title text-danger display-5">
                <GiNoodles className="mx-2"></GiNoodles>Chinese
              </h5>
              <p className="card-text">
                China has the most popular culinary heritage in the world. The
                history of their cuisine dates back to about 1000 years with
                varied cooking styles, techniques and ingredients that have
                evolved over time.
              </p>
              <Link className="btn btn-light" to="/chinese">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="col-md-12 col-lg-6">
          <div className="card mb-3">
            <div className="amc-img"></div>
            <div className="card-body">
              <h5 className="card-title text-dark display-5">
                <FaHamburger className="mx-2"></FaHamburger>Americano
              </h5>
              <p className="card-text">
                Fast, junk, processed -- when it comes to American food, the
                country is best known for the stuff that's described by words
                better suited to greasy, grinding industrial output. But
                citizens of the USA have an impressive appetite for good stuff,
                too.
              </p>
              <Link className="btn btn-light" to="/american">
                View
              </Link>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="col-md-12 col-lg-6">
          <div className="card mb-3">
            <div className="ind-img"></div>
            <div className="card-body">
              <h5 className="card-title text-success display-5">
                <GiIndiaGate className="mx-2"></GiIndiaGate>Indian
              </h5>
              <p className="card-text">
                Indian cuisine consists of a variety of regional and traditional
                cuisines native to India. Given the diversity in soil, climate,
                culture, use locally available spices, herbs,
                vegetables, and fruits. Indian food is also heavily influenced
                by religion, in particular Hinduism and Islam, cultural choices
                and traditions.
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
