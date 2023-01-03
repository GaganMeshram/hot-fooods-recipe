import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [details, setDetails] = useState({});
  let params = useParams();

  useEffect(() => {
    getDetails();
  }, [params.name]);

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const itemdata = await data.json();
    console.log(itemdata);
    setDetails(itemdata);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="bg-light text-center">
          <h1 className="display-1">{details.title}</h1>
        </div>

        <div className="container bg-warning rounded-4 shadow-2 my-5">
          <div className="row">
            {/* col 1 */}
            <div className="col-md-12 col-lg-5 mx-auto my-auto">
              <img
                className="img-fluid w=100 rounded"
                src={details.image}
                alt={details.title}
              />
            </div>

            {/* col 2 */}
            <div className="col-md-12 col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="text-capitalize display-4 text-dark text-center">
                    {details.title}
                  </h2>

                  <div className="col-lg-12 mt-5">
                    <h4 className="text-start">Recipe</h4>
                    <p
                      dangerouslySetInnerHTML={{ __html: details.summary }}
                    ></p>
                  </div>

                  <div className="container-fluid"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
