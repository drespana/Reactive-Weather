import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
const images = {
  "Sunny": sunny,
  "Rainy": rainy,
  "Cloudy": cloudy,
  "Partly cloudy": partlyCloudy
}

function WeatherCard({data}) {
  const {city, tempurature, forecast} = data;
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {images[forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city}</h3>
            <h5 className="card-text">{tempurature}</h5>
            <h5 className="card-text">{forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;