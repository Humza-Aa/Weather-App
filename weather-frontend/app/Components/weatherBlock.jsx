import axios from "axios";

export default function WeatherBlock(props) {
  const { city, weather, fetchWeather } = props;
  console.log(weather)
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mb-4">
      {weather && (
        <h2 className="text-xl font-semibold mb-2 text-center text-black">
          {weather.name}
        </h2>
      )}

      <button
        onClick={fetchWeather}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4"
      >
        Refresh Weather
      </button>
      {weather && (
        <div className="text-black">
          <div>
            <p className="mb-1">Temperature: {weather.main.temp}°C</p>
            <p className="mb-1">Feels like: {weather.main.feels_like}°C</p>
            <p className="mb-1">Min Temp: {weather.main.temp_min}°C</p>
            <p className="mb-1">Max Temp: {weather.main.temp_max}°C</p>
            <p className="mb-1">Pressure: {weather.main.pressure} hPa</p>
            <p className="mb-1">Humidity: {weather.main.humidity}%</p>
          </div>
          <div className="flex justify-center">
            <img src={weather.imageUrl} alt="weather" />
          </div>
        </div>
      )}
    </div>
  );
}
