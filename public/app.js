async function weatherShowFn(data) {
    const d = new Date();
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.querySelector('.date-and-time').textContent = d.toUTCString();
    document.querySelector('.info').textContent = data.weather[0].description;
    document.querySelector('.temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
function weatherFn() {
    document.querySelector('#submit').addEventListener('click', async function () {
        const cName = document.querySelector('#input').value;
        if (!cName) {
            alert("Please enter city name");
        }
        document.querySelector('#input').value = null;
        try {
            const res = await fetch(`/api/weather?city=${cName}`);
            let data = await res.json();
            if (res.ok) {
                weatherShowFn(data);
            } else {
                alert('City not found. Please try again.');
            }
        } catch (err) {
            console.log('Error while fetching weather data:', err);
        };  
    })
}
weatherFn();