import React , {useState} from "react";
import "./Weather.css";
import FormatDate from "./FormatDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false})
  const [city, setCity] = useState(props.defaultcity)
}
  function handleWeather(response) {
    console.log(response.data)
    setWeatherData({
      date: new Date(response.data.time * 1000),
      temparature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon_url: response.data.condition.icon_url,
      icon_description: response.data.condition.icon,
      city: response.data.city
      // city:response.data.name,
      // date: new Date(response.data.dt * 1000),
      // temparature: response.data.main.temp,
      // wind: response.data.wind.speed,
      // humidity: response.data.main.humidity,
      // description: response.data.weather[0].description

  })
  }
  function search() {
    const key = "6f578b96aa9505bcce148ac22cb85794"
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`
    axios.get(url).then(handleWeather)

  // const key = "1289cd044582d3271e980de23db4457d"
  // let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  // axios.get(url).then(handleWeather)
  } 
  
  function handleSubmit(event) {
    event.preventDefualt();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value)
  }
 
  if (weatherData.ready) {
    return (
      <div className="weather text-capitalize">
        <div className="contanier">
          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={8}>
            <input onChange={handleChange} className="searchEngine border" distype="search" placeholder="Enter city.." />
     
     
                </Col>
            <Col xs={6} md={4}>
            <input className="btn btn-primary button"  type="submit" value="Search" />
            </Col>
            </Row>
          </form>
          <WeatherInfo data={weatherData}/>
          <div className="row forcast">
            <div className="col-2 day p-2">
              <p>Monday</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
                alt=""
              />
              <p>
                <strong>26°</strong>21°
              </p>
            </div>
            <div className="col-2 day p-2">
              <p>Tuesday</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
                alt=""
              />
              <p>
                <strong>20°</strong>18°
              </p>
            </div>
            <div className="col-2 day p-2">
              <p>Wednesday</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAm9JREFUaN7tmcFthDAQRbcESqAEl0ADkSiBY46UQAmUQAl0EErwdW+kA3fgjKNhNXJsGNvYyyqL9A/ZQPKf/Wc8JDet9e2V9dLm3wCXBAi57ve7AA2WxC3jdQoAGpcg7ZHMBZIMAMa6HeO2uksBgKEmwPwmcSUAGQGwXAIAc68jNYFW6zPz9QiqSgEMCQB7UqDWa/j7U5wFMGYC2NQ6zPeg7lUAFI2TWXmQBtXJAOYHY451ZvVovgJJ0JpcA5h9VcC83HYAjE+4+lM0AK66LGB8i49A8y2a13b+QwFKmX+c2CbvIEUA6iiAjC3TpZkUriTm16hzAKOjCplfSe4HYt6Zfy5AV3D1t9w3lnln/rkApeIzkJapHAD1lQEWkvvZYX6NnoUKACiS+95h/hcAa8KtJwM01qgQqkMAkdH8aI0KoeYl9xxYcowKJPdT5OoLLkCTIfe1Y1QIUX/aXyVyXTtwyynvxB9f9wrUhBqDZwSoZgC4oqXomRANAAYGkEZVTOMGWOEzIwNAHZ3IUQBm9Yh5zd0FuG8izywH5l1tdT7lpd78cmJk5eyAgbSg+wOA0RGdKhkAfnFrGWmZqy/JM5IRH/tcaKNGCUeGV18MzKqCZlDn+JwdOXyRoebH6Flop3A17STWzsyewjWaGKvfW3NQlQzgKNxhZ2dmT+EqTr1YE+n+bgUAzL7C9e0M9nt24ZK56DGoHd4fCdAyd0aEFK51+vLuDwDoEKIPaan4/dHAMAG201ecCuBpjVEtlXH69uz7E0aJ3ZYaaV7QQS03QONrqQkAg+/lPdcO/Cnc0ldqDTTcSfRpAO//1L8B/hnAD9B4AcpTDEFdAAAAAElFTkSuQmCC"
                alt=""
              />
              <p>
                <strong>16°</strong>10°
              </p>
            </div>
            <div className="col-2 day p-2">
              <p>Thursday</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII="
                alt=""
              />
              <p>
                <strong>26°</strong>20°
              </p>
            </div>
            <div className="col-2 day p-2">
              <p>Friday</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
                alt=""
              />
              <p>
                <strong>28°</strong>18°
              </p>
            </div>
=======
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon : response.data.condition.icon-url,
      iconDescription: response.data.condition.icon,
      formatedDate: new Date(response.data.time * 1000),
      city: response.data.name
    })
  }

  if (ready) {
  return (
    <div className="weather">
      <div className="contanier">
        <form>
          <input type="search" placeholder="Enter city.." />
          <input type="submit" value="Search" />
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li><FormateDate/></li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row description">
          <div className="col-8 ">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt=""
            />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units">℃|℉</span>
          </div>
          <div className="col-8">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Percipitaion: 10%</li>
              <li>Wind Speed: 14km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <p>Monday</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
              alt=""
            />
            <p>
              <strong>26°</strong>21°
            </p>
          </div>
          <div className="col-2">
            <p>Tuesday</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII="
              alt=""
            />
            <p>
              <strong>20°</strong>18°
            </p>
          </div>
          <div className="col-2">
            <p>Wednessday</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAm9JREFUaN7tmcFthDAQRbcESqAEl0ADkSiBY46UQAmUQAl0EErwdW+kA3fgjKNhNXJsGNvYyyqL9A/ZQPKf/Wc8JDet9e2V9dLm3wCXBAi57ve7AA2WxC3jdQoAGpcg7ZHMBZIMAMa6HeO2uksBgKEmwPwmcSUAGQGwXAIAc68jNYFW6zPz9QiqSgEMCQB7UqDWa/j7U5wFMGYC2NQ6zPeg7lUAFI2TWXmQBtXJAOYHY451ZvVovgJJ0JpcA5h9VcC83HYAjE+4+lM0AK66LGB8i49A8y2a13b+QwFKmX+c2CbvIEUA6iiAjC3TpZkUriTm16hzAKOjCplfSe4HYt6Zfy5AV3D1t9w3lnln/rkApeIzkJapHAD1lQEWkvvZYX6NnoUKACiS+95h/hcAa8KtJwM01qgQqkMAkdH8aI0KoeYl9xxYcowKJPdT5OoLLkCTIfe1Y1QIUX/aXyVyXTtwyynvxB9f9wrUhBqDZwSoZgC4oqXomRANAAYGkEZVTOMGWOEzIwNAHZ3IUQBm9Yh5zd0FuG8izywH5l1tdT7lpd78cmJk5eyAgbSg+wOA0RGdKhkAfnFrGWmZqy/JM5IRH/tcaKNGCUeGV18MzKqCZlDn+JwdOXyRoebH6Flop3A17STWzsyewjWaGKvfW3NQlQzgKNxhZ2dmT+EqTr1YE+n+bgUAzL7C9e0M9nt24ZK56DGoHd4fCdAyd0aEFK51+vLuDwDoEKIPaan4/dHAMAG201ecCuBpjVEtlXH69uz7E0aJ3ZYaaV7QQS03QONrqQkAg+/lPdcO/Cnc0ldqDTTcSfRpAO//1L8B/hnAD9B4AcpTDEFdAAAAAElFTkSuQmCC"
              alt=""
            />
            <p>
              <strong>16°</strong>10°
            </p>
          </div>
          <div className="col-2">
            <p>Thursday</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII="
              alt=""
            />
            <p>
              <strong>26°</strong>20°
            </p>
          </div>
          <div className="col-2">
            <p>Friday</p>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
              alt=""
            />
            <p>
              <strong>28°</strong>18°
            </p>
>>>>>>> 41052070b63c07053858119a1d0c184e70d33cc8
          </div>
        </div>
      </div>
    </div>
  );
} else {
  let apiKey = "68ed940b3b921df8ccf6e6331of75tba";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}
}
