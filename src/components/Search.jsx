import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <>
      <div className="row bg-light p-1 text-center">
        <div className="col-md-12">
          <h1 className="text-info">Search Food Here</h1>
        </div>
        <div className="col-md-12 text-center p-3">
          <form onSubmit={submitHandler} action="">
            <input
              className="form-control my-3 bg-light container"
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
