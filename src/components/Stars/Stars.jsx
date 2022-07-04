import ReactStars from "react-rating-stars-component";
import React from "react";

const Stars = ({ size = 24, value }) => {
  return (
    <ReactStars
      count={5}
      size={24}
      activeColor="#ffd700"
      value={value}
      edit={false}
    />
  );
};

export default Stars;
