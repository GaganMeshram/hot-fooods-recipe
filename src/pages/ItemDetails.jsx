import axios from "axios";
import "../styles/details.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ItemDetails() {
  const location = useLocation();
  const mealId = location.state.idMeal;

  const URL = process.env.REACT_APP_API_URL_DTL + mealId;
  const [data, setData] = useState(location.state);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const dataById = await axios.get(URL);
      setData(dataById.data.meals[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getData();
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

  return (
    <div className="container-fluid main-div">
      <div className="text-center">
        <h1 className="display-1">{data.strMeal}</h1>
      </div>
      <div className="container rounded-4 shadow-lg bg-light my-5">
      <div className="row">
          {/* col 1 */}
          <div className="col-md-12 col-lg-6 my-auto">
            <img
              className="img-fluid rounded"
              src={data.strMealThumb}
              alt={data.strMeal}
            />
          </div>
          

           {/* col 2 */}
           <div className="col-md-12 col-lg-5 mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-capitalize display-4 text-dark text-center">
                  Recipe
                </h2>

                <div className="col-lg-12 mt-5">
                  {/* <h4 className="text-start display-6">Recipe</h4> */}
                  <p className="text-start">{data.strInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
