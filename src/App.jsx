import { useEffect, useState } from "react";
import { CitySelector } from "./components/CitySelector";
import { WeatherDisplay } from "./components/WeatherDisplay";

async function fetchWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`,
    );
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

function App() {
  const [currentCity, setCurrentCity] = useState("New%20York");
  const [weather, setWeather] = useState(null);

  function handleCityChange(e) {
    setCurrentCity(e.target.value);
  }

  async function displayWeather() {
    const data = await fetchWeather(currentCity);
    if (!data) return;
    setWeather(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    displayWeather();
  }

  useEffect(() => {
    displayWeather();
  }, []);

  return (
    <main className="flex h-dvh items-center justify-center bg-green-400">
      <div className="flex h-dvh w-full max-w-250 flex-col justify-center gap-12">
        <WeatherDisplay weather={weather}></WeatherDisplay>
        <CitySelector
          currentCity={currentCity}
          onChange={handleCityChange}
          onSubmit={handleSubmit}
        ></CitySelector>
      </div>
    </main>
  );
}

export default App;
