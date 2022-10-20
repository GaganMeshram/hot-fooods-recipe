import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  let params = useParams();
  console.log(params);

  useEffect(() => {
    getDetails();
  }, [params.name]);

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const itemdata = await data.json();
    setDetails(itemdata);
  };

  return (
    <>
    <div><h1>Recipe page</h1></div>
      <div className="container bg-warning shadow my-5">
        <div className="row">
          <div className="col-sm p-3">
            <img className="img-fluid rounded" src={details.image} alt="" />
          </div>
          <div className="col-sm m-3">
            <div className=" d-flex flex-column">
              <h2 className="text-capitalize">{details.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
              <div className="container-fluid"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
