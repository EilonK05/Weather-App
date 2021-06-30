import React, { useState, useEffect } from 'react';
import './App.css';
import Location from './Components/Location';
import CurrentWeather from './Components/CurrentWeather';
import FutureForcast from './Components/FutureForcast';
import APIKey from './API_KEY.json'


function App() {
  const [CurrentWeatherData, setCurrentWeatherData] = useState();

  async function fetchCurrentWeather(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
      const data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCurrentWeather('London')
  }, []);

  return (
    <div className="App">
      <Location text={CurrentWeatherData} />
      <CurrentWeather />
      <FutureForcast />
    </div>
  );
}

export default App;
