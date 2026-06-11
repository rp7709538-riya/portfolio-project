async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${data.current_condition[0].temp_C} °C</p>
            <p>Humidity: ${data.current_condition[0].humidity}%</p>
            <p>Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
        `;
    }
    catch(error){
        document.getElementById("result").innerHTML =
        "Weather data not found!";
    }
}