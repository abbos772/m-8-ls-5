import React from "react";
import "./SingleRoute.css";
const SingleRoute = ({ detail }) => {
  return (
    <div className="cen">
      <h1>{detail.title}</h1>

      <img src={detail.images[0]} width={200} alt="" />
      <span style={{ color: "red" }}>{detail.price}$</span>
    </div>
  );
};

export default SingleRoute;
