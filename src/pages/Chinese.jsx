import React from "react";
import { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer/Footer";

function Chinese() {
  const [cuisine, setCuisine] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const URL = process.env.REACT_APP_API_URL_CHN;
  const navigate = useNavigate();

  const getCuisine = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL);

      setCuisine(response.data.meals);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getCuisine();
  }, []);

  /* Error handling */
  if (error) {
    return (
      <div className="container bg-dark">
        <p className="text-warning">{error.message}</p>
      </div>
    );
  }

  /* Loading handling */
  if (loading) {
    return (
      <div className="container bg-dark">
        <p className="text-warning">Loading...</p>
      </div>
    );
  }

  const redirectTo = (id) => {
    navigate("/details", {
      state: id,
    });
  };

  return (
    <div>
      <div className="container bg-light">
        <h1 className="display-1 text-center">
          <em>Best Chinese Picks</em>
        </h1>
        <Link className="btn btn-dark" to="/">
          <BiArrowBack className="mx-2"></BiArrowBack>Back
        </Link>
      </div>

      <div className="container mt-3 ">
        <div className="row text-center m-2">
          {/* card */}
          {cuisine.map((item) => {
            return (
              /* Card */
              <div className="col-sm-4 col-md-3 col-lg-4 mt-5">
                <div className="card">
                  <img src={item.strMealThumb} class="card-img-top" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.strMeal}</h5>
                    <button
                      onClick={() => redirectTo(item)}
                      className="btn btn-warning"
                    >
                      See
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Chinese;
