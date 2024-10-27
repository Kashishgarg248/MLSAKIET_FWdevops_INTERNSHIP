async function fetchWeather(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0ed09cf5d3mshb31ee37230f7d7ep129892jsn0095cd353655', 
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        document.getElementById('cityName').innerHTML = result.location.name;
        document.getElementById('temp').innerHTML = result.current.temp_c;
        document.getElementById('cloud_pct').innerHTML = result.current.cloud;
        document.getElementById('feels_like').innerHTML = result.current.feelslike_c;
        document.getElementById('humidity').innerHTML = result.current.humidity;
        document.getElementById('dew_point').innerHTML = result.current.dewpoint_c;
        document.getElementById('precip').innerHTML = result.current.precip_mm;
        document.getElementById('wind_speed').innerHTML = result.current.wind_kph;
        document.getElementById('wind_degree').innerHTML = result.current.wind_degree;
        document.getElementById('windchill_c').innerHTML = result.current.windchill_c;
        document.getElementById('temp2').innerHTML = result.current.temp_c;
        document.getElementById('humidity2').innerHTML = result.current.humidity;
        document.getElementById('wind_speed2').innerHTML = result.current.wind_kph;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherDisplay').innerText = 'Failed to fetch weather data.';
    }
}

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value; 
    fetchWeather(city); 
});
fetchWeather("Ghaziabad");

                  
                
