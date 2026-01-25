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
document.querySelector("#dark").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#0c0c0c";
    document.querySelector("body").style.color = "#949494";
    document.querySelector(".wrapper").style.backgroundColor = "#1b1b1b";
    input.style.backgroundColor = "#2a2a2a";
    input.style.color = "#ffffffa4"
    document.querySelector(".weather-details").style.backgroundColor = "#1b1b1b";
    document.querySelector("#dark").style.border = "3px solid white"
    document.querySelector("#light").style.border = "none"
    document.querySelector("#submit").style.color = "black";
    document.querySelector("#submit").style.backgroundColor = "#ffffff86";
})
document.querySelector("#light").addEventListener("click", function () {
    document.querySelector("#dark").style.border = "none";
    input.style.color = "black"
    document.querySelector("#light").style.border = "3px solid white";
    document.querySelector("body").style.backgroundColor = "rgb(52, 72, 149)";
    document.querySelector(".weather-details").style.backgroundColor = "#8697b0";
    input.style.backgroundColor = "white";
    document.querySelector(".wrapper").style.backgroundColor = "#8697b0";
    document.querySelector("body").style.color = "black";
    document.querySelector("#submit").style.color = "white";
    document.querySelector("#submit").style.backgroundColor = "black";
})

navigator.geolocation.getCurrentPosition((pos) => {
    weatherStartFn(pos.coords.latitude, pos.coords.longitude);
}, () => {
    console.log("Please allow location to get your current location weather status !!");
});
async function weatherStartFn(lat,lon) {
    try {
        const res = await fetch(`${apiUrl}&lat=${lat}&lon=${lon}&appid=${apiKey}`);
        let data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (err) {
        console.log('Error while fetching weather data:', err);
    };  
}

