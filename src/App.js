import './App.css';
import Location from './Components/Location';
import CurrentWeather from './Components/CurrentWeather';
import FutureForcast from './Components/FutureForcast';

function App() {
  return (
    <div className="App">
      <Location />
      <CurrentWeather />
      <FutureForcast />
    </div>
  );
}

export default App;
