import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Searched = () => {
  const [searchedItem, setSearchedItem] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let params = useParams();
  const URL = process.env.REACT_APP_API_SEARCH_URL;
  const navigate = useNavigate();

  const getSearched = async (name) => {
    setLoading(true);
    try {
      const response = await fetch(URL + name);
      const data = await response.json();
      console.log(data.meals);

      if (data.meals === null) {
        setNoResult(true);
      } else {
        setSearchedItem(data.meals);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  if (noResult) {
    return (
      <div className="container mt-5 p-5 border bg-light">
        <h1 className="display-1">Sorry...</h1>
        <h3 className="bolder-2">
          We couldn`t find any matches for{" "}
          <span className="h2 text-danger">"{params.search}"</span>
        </h3>
        <p>
          Double check your search for any typos or spelling errors -or try a
          different search term.
        </p>
      </div>
    );
  }

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
      <div className="container">
        <h1 className="display-1 text-center">
          <em>Best Picks For "{params.search}"</em>
        </h1>
        <Link className="btn btn-dark" to="/">
          <BiArrowBack className="mx-2"></BiArrowBack>Back
        </Link>
      </div>

      <div className="container mt-3 ">
        <div className="row text-center m-2">
          {searchedItem.map((item) => {
            return (
              <>
                <div className="col-sm-4 col-md-3 col-lg-4 mt-5">
                  <div key={item.idMeal} className="card">
                    <img
                      src={item.strMealThumb}
                      className="card-img-top"
                      alt={`image for ${item.strMeal}`}
                    />

                    <div className="card-body">
                      <h5 className="card-title text-primary">
                        {item.strMeal}
                      </h5>
                      <button
                        onClick={() => redirectTo(item)}
                        className="btn btn-warning"
                      >
                        See
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Searched;
