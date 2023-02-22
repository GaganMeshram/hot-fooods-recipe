import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" +  input);
  };

  return (
    <>
      <div className="bg-light text-center container-fluid p-4">
        <div className="col-md-12">
          <h1 className="text-dark border-1">Search Foods</h1>
        </div>
        <div className="col-md-12 text-center">
          <form onSubmit={submitHandler} action="">
            <input
              className="form-control bg-light container"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
            />
            <button className="btn mt-3 btn-outline-primary">Search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
