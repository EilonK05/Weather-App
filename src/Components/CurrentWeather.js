import React from 'react'

function CurrentWeather() {
    return (
        <div>
            <span>Time</span>
            <div className="temperature">
                <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="Weather Icon"></img>
                <h1>00<span>&#176;C</span></h1>
            </div>
            <h2>Condition</h2>
            <div className="details">
                <div className="humidity">
                    <h3>Humidity</h3>
                    <h3>00%</h3>
                </div>
                <div className="wind-speed">
                    <h3>Wing speed</h3>
                    <h3>00 km/h</h3>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather
