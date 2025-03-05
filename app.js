let getWeather = document.getElementById('getWeather');
console.log(getWeather);

getWeather.addEventListener("click", async (e) => {
    e.preventDefault();
    let city = document.getElementById('city').value;
    let weatherContainer = document.getElementById('weatherContainer');
    console.log(weatherContainer);
    let apikey = "cce81bbd58c022ef7d8803b2eb40669d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        if (city) {
            let data = await fetch(apiUrl);
            let finalData = await data.json();
            if (finalData.cod === 200) {
                console.log(finalData);
                weatherContainer.innerHTML = `
                    <div>
                        <h1>City Name: ${finalData.name}</h1>
                        <h1>Temperature: ${finalData.main.temp}°C</h1>
                        <h1>Country: ${finalData.sys.country}</h1>
                    </div>
                `;
            } else {
                alert("Please enter a valid city name");
            }
        } else {
            alert("City name cannot be empty");
        }
    } catch (error) {
        console.log(error);
        alert(error);
    }
});