import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NonVeg() {
  const [nonveg, setNonveg] = useState([]);

  useEffect(() => {
    getNonVeg();
  }, []);

  const getNonVeg = async () => {
    const check = localStorage.getItem("nonveg");

    if (check) {
      setNonveg(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/food/search?apiKey=${process.env.REACT_APP_API_KEY}&query=chicken&number=2`
      );
      const data = await response.json();
      // console.log(data)
      localStorage.setItem("nonveg", JSON.stringify(data.searchResults));
      setNonveg(data.searchResults);
    }
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="display-3">Most Loved Non Vegetarian</h1>
      </div>

      <div className="container mt-3">
        <div className="row text-center d-sm-flex">
          {nonveg.map((result) => {
            return (
              <>
                {result.results.map((inresult) => {
                  return (
                    <div className="col-sm-6 col-md-4" key={inresult.id}>
                      <div className="card m-3" key={inresult.id}>
                        <Link
                          to={"/recipe/" + inresult.id}
                          className="text-decoration-none shadow"
                        >
                          <img
                            className="card-img-top"
                            src={inresult.image}
                            alt=""
                          />
                          <div className="card-body bg-light">
                            <h4 className="card-title">{inresult.name}</h4>
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default NonVeg;
