// Replace the placeholder with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        if (!res.ok) {
            if (res.status === 404) throw new Error('City not found');
            throw new Error('Network response was not ok');
        }

        const data = await res.json();
        showWeather(data);
    } catch (err) {
        alert(err.message || 'Error fetching weather data');
    }
}

function showWeather(data) {
    const card = document.getElementById('weatherCard');
    document.getElementById('cityName').innerText = data.name + ', ' + (data.sys && data.sys.country ? data.sys.country : '');
    document.getElementById('temperature').innerText = `🌡 Temperature: ${data.main.temp} °C`;
    document.getElementById('description').innerText = `☁ Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById('windSpeed').innerText = `🌬 Wind Speed: ${data.wind.speed} m/s`;
    card.style.display = 'block';
}

// wire up UI
document.getElementById('searchBtn').addEventListener('click', getWeather);
document.getElementById('cityInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') getWeather();
});
