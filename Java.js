async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = 'c0d290eeee9dd399b017a6d2ba64be7e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      const resultDiv = document.getElementById("weatherResult");
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Icon" />
      `;
    } else {
      document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>Error fetching weather.</p>`;
    console.error(error);
  }
}
