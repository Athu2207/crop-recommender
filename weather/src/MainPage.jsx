import React, { useState } from 'react';
import './MainPage.css';

function MainPage() {
  const iconMap = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Snow': '❄️',
    'Thunderstorm': '⛈️',
    'Drizzle': '🌦️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️'
  };

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState('');
  const [temp, setTemp] = useState('');
  const [showclouds, setShowclouds] = useState("");
  const [showWeatherInfo, setShowWeatherInfo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [showHelp, setShowHelp] = useState(false);

  const getRecommendedCrop = async (N, P, K, temperature, humidity, ph, rainfall) => {
    try {
      const res = await fetch("https://weather-backend-k3ik.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ N, P, K, temperature, humidity, ph, rainfall }),
      });
      if (!res.ok) throw new Error("Failed to fetch crop recommendation");
      const data = await res.json();
      setCrop(data.recommended_crop);
    } catch (err) {
      console.error(err);
      setCrop("Unable to get crop recommendation");
    }
  };

  async function getdata(cityname) {
    const API_KEY = "f4da84f03e8399fa676a9bcf3c0030af";
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`
    );
    return await result.json();
  }

  async function getForecast(cityname) {
    const API_KEY = "f4da84f03e8399fa676a9bcf3c0030af";
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=${API_KEY}&units=metric`
    );
    return await result.json();
  }

  const showweather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    try {
      const data = await getdata(city);
      if (data.cod === 200) {
        setLocation(data.name);
        setWeather(data.weather[0].description);
        setTemp(data.main.temp);
        const mainWeather = data.weather[0].main;
        setShowclouds(iconMap[mainWeather] || "🌈");

        const forecast = await getForecast(city);
        if (forecast.cod === "200") {
          const next5Days = forecast.list.filter((_, index) => index % 8 === 0).slice(0, 5);
          setForecastData(next5Days);
        }

        const N = 90;
        const P = 42;
        const K = 43;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const ph = 6.5;
        const rainfall = 200;

        await getRecommendedCrop(N, P, K, temperature, humidity, ph, rainfall);
      } else {
        setLocation('City not found');
        setWeather('');
        setTemp('');
        setShowclouds('');
        setCrop('');
        setForecastData([]);
      }
    } catch (error) {
      setLocation('Error fetching data');
      setWeather('');
      setTemp('');
      setShowclouds('');
      setCrop('');
      setForecastData([]);
    }
    setShowWeatherInfo(true);
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      showweather();
    }
  };

  const addToFavorites = () => {
    if (location && !favorites.includes(location)) {
      setFavorites([...favorites, location]);
    }
  };

  const removeFavorite = (cityName) => {
    setFavorites(favorites.filter(fav => fav !== cityName));
  };

  const loadFavoriteWeather = (cityName) => {
    setCity(cityName);
    setTimeout(() => showweather(), 100);
  };

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="app-logo">🌤️</div>
        <h1 className="app-title">WeatherApp</h1>
        <p className="subtitle">Your Day, Your Weather - Always One Step Ahead</p>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-card">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="input-field"
            />
            <span className="search-icon">🔍</span>
          </div>
          <button
            onClick={showweather}
            disabled={loading || !city.trim()}
            className="search-button"
          >
            {loading ? (
              <>
                <div className="loading-spinner"></div>
                Searching...
              </>
            ) : (
              <>
                <span>🌍</span>
                Get Weather
              </>
            )}
          </button>
        </div>
      </section>

      {/* Weather Section */}
      <section className="weather-section">
        {showWeatherInfo ? (
          <div className="weather-card">
            {location !== 'City not found' && location !== 'Error fetching data' ? (
              <>
                <div className="weather-header">
                  <div className="weather-icon">{showclouds}</div>
                  <button onClick={addToFavorites} className="favorite-btn" title="Add to favorites">
                    ⭐
                  </button>
                </div>
                <div className="weather-location">
                  <span>📍</span>
                  {location}
                </div>
                <div className="weather-description">{weather}</div>
                <div className="weather-temp">{temp}°C</div>
                <div className="weather-details">
                  <div className="weather-detail-item">
                    <span className="detail-icon">🌡️</span>
                    <span className="detail-label">Temperature</span>
                    <span className="detail-value">{temp}°C</span>
                  </div>
                  <div className="weather-detail-item">
                    <span className="detail-icon">🌤️</span>
                    <span className="detail-label">Condition</span>
                    <span className="detail-value">{weather}</span>
                  </div>
                  <div className="weather-detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{location}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="no-data">
                <div className="weather-icon">❌</div>
                <div>{location}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">🌤️</div>
            <div className="empty-state-text">
              Enter a city name to get weather information
            </div>
          </div>
        )}
      </section>

      {/* Favorites Section */}
      <section className="favorites-section">
        <h2>Favorite Cities</h2>
        {favorites.length === 0 ? (
          <p>No favorite cities yet. Add some by clicking the star button!</p>
        ) : (
          <div className="favorites-list">
            {favorites.map((fav, index) => (
              <div key={index} className="favorite-item">
                <span onClick={() => loadFavoriteWeather(fav)}>{fav}</span>
                <button onClick={() => removeFavorite(fav)} className="remove-fav">×</button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Forecast Section */}
      <section className="forecast-section">
        <h2>5-Day Forecast</h2>
        {forecastData.length === 0 ? (
          <p>Search for a city to see the forecast</p>
        ) : (
          <div className="forecast-grid">
            {forecastData.map((day, index) => (
              <div key={index} className="forecast-card">
                <div className="forecast-date">
                  {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="forecast-icon">
                  {iconMap[day.weather[0].main] || "🌈"}
                </div>
                <div className="forecast-temp">{Math.round(day.main.temp)}°C</div>
                <div className="forecast-desc">{day.weather[0].description}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Settings Section */}
      <section className="settings-section">
        <h2>Settings</h2>
        <div className="setting-item">
          <label>Temperature Unit:</label>
          <select>
            <option>Celsius</option>
            <option>Fahrenheit</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Theme:</label>
          <select>
            <option>Default</option>
            <option>Dark</option>
            <option>Light</option>
          </select>
        </div>
        <div className="setting-item">
          <label>Auto-refresh:</label>
          <input type="checkbox" />
        </div>
      </section>

      {/* Maps Section */}
      <section className="maps-section">
        <h2>Weather Maps</h2>
        <p>Interactive weather maps coming soon!</p>
        <div className="map-placeholder">
          🗺️ Map View
        </div>
      </section>

      {/* Crop Recommendation */}
      {crop && (
        <div className="crop-recommendation">
          <h3>🌾 Recommended Crop:</h3>
          <p>{crop}</p>
        </div>
      )}

      {/* Help Modal */}
      {showHelp && (
        <div className="help-modal">
          <div className="help-content">
            <h2>Help & Support</h2>
            <div className="help-section">
              <h3>How to use:</h3>
              <ul>
                <li>Enter a city name and click "Get Weather"</li>
                <li>Add cities to favorites by clicking the star</li>
                <li>View 5-day forecast in the Forecast section</li>
                <li>Customize settings in the Settings section</li>
              </ul>
            </div>
            <button onClick={() => setShowHelp(false)} className="close-help">Close</button>
          </div>
        </div>
      )}

      {/* Help Button */}
      <button className="help-button" onClick={() => setShowHelp(true)}>❓ Help</button>
    </div>
  );
}

export default MainPage;