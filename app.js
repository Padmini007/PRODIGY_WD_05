// Insert your OpenWeatherMap API key here
const apiKey = '63f77fcbb66eaf9660f360734e638135';

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    fetchWeather(city);
});

function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert('Error fetching weather data. Please check your city name and try again.');
        });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    
    if (data.cod !== 200) {
        weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
        return;
    }

    const city = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    weatherResult.innerHTML = `
        <h3>Weather in ${city}</h3>
        <img src="${iconUrl}" alt="Weather Icon">
        <p>${description}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
    `;
}
