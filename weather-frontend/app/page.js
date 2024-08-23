"use client";
import WeatherBlock from "./Components/weatherBlock";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState({});
  const [currentCity, setCurrentCity] = useState("");

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/weather/?city=${city}`
      );

      if (response.data && response.data.main) {
        const icon = response.data.weather[0].icon;
        const imageResponse = await axios.get(
          `http://127.0.0.1:8000/api/image/?description=${icon}`
        );

        const weatherWithImage = {
          ...response.data,
          imageUrl: imageResponse.data.image_url,
        };
        setWeathers((prevWeathers) => ({
          ...prevWeathers,
          [city]: weatherWithImage,
        }));
        if (!cities.includes(city)) {
          setCities((prevCities) => [...prevCities, city]);
        }
      } else {
        alert("Location not found. Please enter a valid city name.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching weather data. Please try again.");
      return null;
    }
  };

  const addCity = async () => {
    if (currentCity) {
      const weatherData = await fetchWeather(currentCity);

      if (weatherData) {
        setWeathers((prevWeathers) => ({
          ...prevWeathers,
          [currentCity]: weatherData,
        }));
        setCities((prevCities) => [...prevCities, currentCity]);
        setCurrentCity("");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Weather App</h1>

        <div className="w-full max-w-md mb-8">
          <input
            type="text"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            placeholder="Enter city"
            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
          />
          <button
            onClick={addCity}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Get Weather
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city) => (
            <WeatherBlock
              key={city}
              city={city}
              weather={weathers[city]}
              fetchWeather={() => fetchWeather(city)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
