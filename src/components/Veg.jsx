import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

console.log(process.env);

function Veg() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getVeg();
  }, [Home]);

  const getVeg = async () => {
    const veg = localStorage.getItem("popular");

    if (veg) {
      setPopular(JSON.parse(veg));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="display-3">Most Loved Vegetarian</h1>
      </div>

      <div className="container mt-3 ">
        <div className="row text-center d-sm-flex">
          {popular.map((recipe) => {
            return (
              <>
                <Link
                  className="col-sm-6 col-md-4 text-decoration-none"
                  to={"/recipe/" + recipe.id}
                >
                  <div key={recipe.id}>
                    <div className="card m-3 shadow">
                      <img className="card-img-top" src={recipe.image} alt="" />
                      <div className="card-body bg-light">
                        <h4 className="card-title">{recipe.title}</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Veg;
