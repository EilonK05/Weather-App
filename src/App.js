import React, { useState, useEffect } from 'react';
import './App.css';
import Location from './Components/Location';
import CurrentWeather from './Components/CurrentWeather';
import FutureForcast from './Components/FutureForcast';

const API_KEY = '1455c00b67b0bcfef51d2885223f7299';


function App() {
  const [CurrentWeatherData, setCurrentWeatherData] = useState();

  async function fetchCurrentWeather(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
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
