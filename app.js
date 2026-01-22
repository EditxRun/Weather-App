import { API_KEY } from "./config.js";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const apiKey = API_KEY;
async function weatherShowFn(data) {
    document.querySelector(".weather-details").style.display = "flex";
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
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
            const res = await fetch(`${apiUrl}&q=${cName}&appid=${apiKey}`);
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
let text = "Find Your City's Weather";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelector("#heading").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
    if (i == text.length - 1) {
        document.querySelector("p").style.display = "none";
    }
}
typeWriter();


