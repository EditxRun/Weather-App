const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = "73e038fab479217d6d82c74d9c0355fd";
async function weatherShowFn(cName) {
    const res = await fetch(`${apiUrl}&q=${cName}&appid=${apiKey}`);
    let data = await res.json();
    console.log(data);
    const d = new Date();
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    document.querySelector('.date-and-time').textContent = d.toUTCString();
    document.querySelector('.info').textContent = data.weather[0].description;
    document.querySelector('.temperature').textContent = `${data.main.temp}°C`;
    document.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
weatherShowFn('delhi');
    function weatherFn() {
        document.querySelector('#submit').addEventListener('click',function () {
            const cName = document.querySelector('#input').value;
            document.querySelector('#input').value = null;
            weatherShowFn(cName);
        })
    }
weatherFn();