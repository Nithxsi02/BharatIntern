document.getElementById('getWeather').addEventListener('click', function() {
    let city = document.getElementById('cityInput').value;
    let apiKey = 'd7aa1528d10090b99afab6e6f2ede56f';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let display = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
            <p>Weather Conditions: ${data.weather[0].main}</p>
        `;
        document.getElementById('weatherDisplay').innerHTML = display;
    })
    .catch(error => console.error('Error:', error));
});

