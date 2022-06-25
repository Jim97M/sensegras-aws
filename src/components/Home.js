import React from "react";
import "./home.css";
import { farmItems } from "../data";
import top from "./top.png";
import sun from "./sun.png";
const Home = () => {
  return (
    <div className="background">   
       <div className="WeatherBoards">
      <div className="WeatherLeft-board">
          {/* <h3>Sensor</h3> */}
      <div className="weather-detail-top">
           <div className="start">
               <h4>Basic Sensor</h4>
               <p>Sensor Location LAT | Long</p>
           </div>
           <div className="center">
               <h5>22.12.2022| 11.40 PM</h5>
           </div>
           <div className="end">
               <button>ADD SENSOR</button>
           </div>
      </div>
      <div className="data-item">
          {farmItems.map((farm) => {
            return(
              <div className="name">
              <p>
                {farm.name} 
                </p>
                <p className="unit">
                  {farm.unit}
                </p>
                <p className="number">
                  {farm.number}
                </p>
                 <div className="data bar">
                    
                  </div>
                <p className="range">
                  {farm.comment}
                </p>
                
                </div>
                
            )
                 
          })}
          <div className="vertical"> </div>
          <div className="data-right">
             <img src={top} />
             <p>Status Online</p>
             <p>Battery Status: 92%</p>
             <p>Mac ID: 1102100</p>
             <p><button> VIEW GRAPHS</button> </p>
             <p><button> DOWNLOAD REPORT</button></p>
          </div>
          
      </div>
       
      </div>
      <div className="WeatherRight-board">
        {/* <h3>Weather</h3> */}
        <div className="card-header">
          <img className="sun" src={sun} />
          <h3 className="temp-head">80F</h3>
        </div>
         <div className="bottom-part">
           <p>Precipitation Intensity: 81</p>
           <p>Precipitation Probability: 81</p>
           <p>Pressure: 81</p>
           <p>Wind Speed: 4.87kmph</p>
           <p>Wind Direction: 40.8N</p>
         </div>
      </div>
    </div>
    </div>

  )
}

export default Home;