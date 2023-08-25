const url = 'https://open-weather13.p.rapidapi.com/city/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9d973ac46mshcbe116e750218f9p1b2d0cjsn67a1e48f6fac',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

const cityInput = document.getElementById('city-input');

const weatherOutput = document.getElementById('weather-output');

const searchCity = () => {
    const cityName = cityInput.value.toLowerCase();
    getWeather(cityName);
}

const getWeather = async(city) => {
    try {
        const response = await fetch(`${url}${city}`, options);
        const result = await response.json();
        showWeatherData(result);
    } catch (error) {
        console.error(error);
    }
}

const showWeatherData = (weatherData) => {
    const weatherType = weatherData.weather[0].main;
    const cityName = weatherData.name;
    const temps = {
        Temp: weatherData.main.temp,
        Min_Temp: weatherData.main.temp_min,
        Max_Temp: weatherData.main.temp_max
    };

    const formattedTemps = Object.keys(temps).map(tempKey => {
        const cel = ((temps[tempKey] - 32) * 5/9).toFixed(2);
        return `<p>${tempKey}: ${cel}°C</p>`;
    }).join('');

    const weatherCard = `
        <div class="card mb-4 shadow-sm">
            <div class="card-header">
                <h4 id="city-name" class="my-0 font-weight-normal">${cityName}</h4>
            </div>
            <div class="card-body">
                <h1 id="weather-type" class="card-title">${weatherType}</h1>
                ${formattedTemps}
            </div>
        </div>
    `;

    weatherOutput.innerHTML = weatherCard;
}
