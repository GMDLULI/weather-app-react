import React  from "react"
import FormatDate from "./FormatDate"
export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul className="date">
      <li><FormatDate date={props.data.date}/></li>
      <li>{props.data.description}</li>
    </ul>
    <div className="description">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt=""
        />
        <span className="temperature">{Math.round(props.data.temparature)}</span>
        <span className="units">℃|℉</span>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Percipitaion: 10%</li>
          <li>Wind Speed: {props.data.wind}km/h</li>
        </ul>
    </div>
    </div>)
}