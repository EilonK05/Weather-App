import React, { useState, useEffect } from 'react';
import './App.css';
import Location from './Components/Location';
import CurrentWeather from './Components/CurrentWeather';
import FutureForcast from './Components/FutureForcast';

const API_KEY = 'API';

async function fetchCurrentWeather(city) {
  try {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = response.json;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  const [CurrentWeatherData, setCurrentWeatherData] = useState();

  useEffect(() => {
    fetchCurrentWeather('London')
  }, [])

  return (
    <div className="App">
      <Location />
      <CurrentWeather />
      <FutureForcast />
    </div>
  );
}

export default App;
