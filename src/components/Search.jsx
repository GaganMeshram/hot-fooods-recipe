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
      <div className="container text-center">
        <form onSubmit={submitHandler} action="" className="">
          <input
            className="form-control mt-3 bg-light"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            type="text"
          />
          <button className="btn mt-3 btn-outline-primary">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
