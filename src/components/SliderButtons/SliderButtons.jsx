import React from "react";

export const SliderButtons = ({setBg}) => {
  return (
      <div className="slider-icons">
        <button className="slide-prev slider-icon" onClick={setBg}></button>
        <button className="slide-next slider-icon" onClick={setBg}></button>
      </div>
  );
};
