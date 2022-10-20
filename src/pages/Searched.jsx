import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Searched = () => {
  const [searchedItem, setSearchedItem] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const data = await response.json();
    setSearchedItem(data.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      <div className="container">
        <h1 className="display-3">Best Picks</h1>
      </div>

      <div className="container mt-3 ">
        <div className="row text-center d-sm-flex">
          {searchedItem.map((item) => {
            return (
              <>
                <div className="col-sm-6 col-md-4" key={item.id}>
                  <div className="card rounded m-3">
                    <Link
                      className="text-decoration-none shadow"
                      to={"/recipe/" + item.id}
                    >
                      <img className="card-img-top" src={item.image} alt="" />
                      <div className="card-body bg-light">
                        <h4 className="card-title">{item.title}</h4>
                      </div>
                    </Link>
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
