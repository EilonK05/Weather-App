import React from 'react'

function FutureForcast() {
    return (
        <div>
            <h3 className="date">day</h3>
            <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="Weather Icon"></img>
            <h3>Humidity</h3>
            <h3>00%</h3>
        </div>
    )
}

export default FutureForcast
