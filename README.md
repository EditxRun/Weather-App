# Weather Application

A simple Weather Application built using HTML, CSS, and JavaScript.  
This application fetches real-time weather data using the OpenWeatherMap API based on the city name entered by the user.

---

## Description

The Weather Application allows users to check the current weather conditions of any city.  
By entering a city name, users can view details such as temperature, wind speed, and overall weather condition.

This project demonstrates the use of API integration, asynchronous JavaScript, and DOM manipulation.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

---

## Features

- Search weather by city name  
- Real-time weather data  
- Temperature displayed in Celsius  
- Humidity and wind speed information  
- Simple and responsive user interface  

---

## How It Works

1. User enters a city name  
2. JavaScript sends a request to the OpenWeatherMap API  
3. Weather data is received in JSON format  
4. Data is extracted and displayed dynamically on the webpage  

---

## API Information

Weather data is fetched from OpenWeatherMap.

**API Base URL**
https://api.openweathermap.org/data/2.5/weather

**Parameters Used**
- `q` – City name  
- `appid` – Your API key  

Note:  
You must generate your own API key from https://openweathermap.org/

---

## Project Setup

1. Clone the repository
2. Open the project folder  
3. Open `index.html` in your browser  
4. Add your OpenWeatherMap API key in `config.js`

---

## Folder Structure

```WEATHER-APP/
│
├── .gitignore
├── config.js
├── index.html
├── style.css
├── app.js
└── README.md

---
```
## Future Enhancements
  
- 5-day weather forecast  
- Auto-detect user location  
- Improve UI and animations  

---

## Author

Bhudev Bhanwar
