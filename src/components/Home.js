import React from "react";
import "./home.css";
import { farmItems } from "../data";
const Home = () => {
  return (
    <div className="WeatherBoards">
      <div className="WeatherLeft-board">
          <h3>Sensor</h3>
      <div className="WeatherCard-detail-top">
           <div className="start">
               <h4>Sensor Location</h4>
               <p>SensorLocation</p>
           </div>
           <div className="center">
               <h4>Sensor Location</h4>
               <p>SensorLocation</p>
           </div>
           <div className="end">
               <h4>Sensor Location</h4>
               <p>SensorLocation</p>
           </div>
      </div>
      <div className="data-item">

      </div>
      
      </div>
      <div className="WeatherRight-board">
        <div className="WeatherCard-detail">
         <h2>Left Card</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Home;