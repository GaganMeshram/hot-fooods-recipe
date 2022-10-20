import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([cuisine]);
  let params = useParams();

  const getCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const data = await response.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
  
    <div>
      <div><h1>cuisin page</h1></div>
      <div className="container">
        <h1 className="display-3">Best Picks</h1>
      </div>

      <div className="container mt-3 ">
        <div className="row text-center d-sm-flex">
          {cuisine.map((item) => {
            return (
              <>
                <div className="col-sm-4 col-md-3" key={item.id}>
                  <div className="card m-3">
                    <Link
                      to={"/recipe/" + item.id}
                      className="text-decoration-none"
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
}

export default Cuisine;
