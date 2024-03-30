import React from "react";
import Button from "../button";

const TotalUserCard = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <div className="card w-100 bg-white shadow- rounded-lg ps-4 bg-base-100  text-text-light ">
      <figure className="px-10 pt-10"></figure>
      <div className="card-body items-center text-center  ">
        <h2 className="card-title font-bold">{title}</h2>
        <p>{details}</p>xl
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default TotalUserCard;
