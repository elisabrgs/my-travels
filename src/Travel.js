import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <div>
    <h1>{destination}</h1>
    <img src={photo} alt={destination} />
    <p>{country}</p>
    <p>{distance} km de Paris</p>
  </div>
);

export default Travel;