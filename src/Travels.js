import React from "react";
import Travel from "./Travel";

// src/Travels.js
const travels = [
  {
    destination: "Porto",
    country: "Portugal",
    photo: "http://image.noelshack.com/fichiers/2018/39/2/1537907548-porto.jpg",
    distance: "1498"
  },
  {
    destination: "Seville",
    country: "Espagne",
    photo: "http://image.noelshack.com/fichiers/2018/39/2/1537907547-seville.jpg",
    distance: "1674"
  },
  {
    destination: "Ile de Bréhat",
    country: "France",
    photo: "http://image.noelshack.com/fichiers/2018/39/2/1537907549-ile.jpg",
    distance: "467"
  },
  {
    destination: "Tokyo",
    country: "Japon",
    photo: "http://image.noelshack.com/fichiers/2018/39/2/1537907554-tokyo.jpg",
    distance: "9715"
  },
  {
    destination: "Savannah",
    country: "Etats-Unis",
    photo: "http://image.noelshack.com/fichiers/2018/39/2/1537907550-savannah.jpg",
    distance: "6938"
  },
];

const Travels = () => (
  <div>
    {travels.map(travel => (
      <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance}/>
    ))}
  </div>
);

export default Travels;









