document.addEventListener('DOMContentLoaded', (event) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6ff4e3a1d5mshaffb37c90f332e7p18b3dbjsn556bc03e1971',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
        const cityName = document.getElementById('cityName');

        cityName.innerHTML = city;

        fetch(url, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response);

                // const cloud_pct = document.getElementById('cloud_pct');
                const feels_like = document.getElementById('feels_like');
                const humidity = document.getElementById('humidity');
                const humidity2 = document.getElementById('humidity2');
                const max_temp = document.getElementById('max_temp');
                const min_temp = document.getElementById('min_temp');
                const sunrise = document.getElementById('sunrise');
                const sunset = document.getElementById('sunset');
                const temp = document.getElementById('temp');
                const temp2 = document.getElementById('temp2');
                const wind_degrees = document.getElementById('wind_degrees');
                const wind_speed = document.getElementById('wind_speed');
                const wind_speed2 = document.getElementById('wind_speed2');

                // cloud_pct.innerHTML = response.cloud_pct;
                feels_like.innerHTML = response.feels_like;
                humidity.innerHTML = response.humidity;
                humidity2.innerHTML = response.humidity;
                max_temp.innerHTML = response.max_temp;
                min_temp.innerHTML = response.min_temp;
                sunrise.innerHTML = response.sunrise;
                sunset.innerHTML = response.sunset;
                temp.innerHTML = response.temp;
                temp2.innerHTML = response.temp;
                wind_degrees.innerHTML = response.wind_degrees;
                wind_speed.innerHTML = response.wind_speed;
                wind_speed2.innerHTML = response.wind_speed;
            })
            .catch(err => console.error(err));
    };

    const submit = document.getElementById('submit');
    const cityInput = document.getElementById('city');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        getWeather(cityInput.value);
    });

    getWeather('Lalitpur');
});
