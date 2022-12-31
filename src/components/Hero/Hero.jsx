import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <div className="Hero container-fluid">
        <div className="row d-flex justify-content-center align-item-center py-5">
          <div className="text-center col-md-12 col-lg-6 p-4">
            <h1>Eat Healthy</h1>
            <h2>Live Well</h2>
          </div>
          <div className="self-center col-md-12 col-lg-6 p-4">
            <p className="text-center">
              Eating healthy is important for everyone especially teens. A
              healthy diet is the key to being fit. It is unlike any diet. You
              will feel so pure, balanced, and alert. It even prevents some
              health issues. You will love your body and your body will love you
              if you start eating healthy. There are so many different reasons
              why eating healthy is important.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
