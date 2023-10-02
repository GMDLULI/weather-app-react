import React  from "react"
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon"
import WeatherTemp from "./WeatherTemp"
export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul className="date">
      <li><FormatDate date={props.data.date}/></li>
      <li>{props.data.description}</li>
    </ul>
    <div className="description">
        <WeatherIcon code={props.data.icon} size={52}/>
        <WeatherTemp celcius={props.data.icon}/>
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Percipitaion: 10%</li>
          <li>Wind Speed: {props.data.wind}km/h</li>
        </ul>
    </div>
    </div>)
}