const key = "ff9cf51ddc8f6adf2dccb82e0f4eb309";
const url = "https://api.openweathermap.org/data/2.5/weather?q=";


window.addEventListener('load',() => fetchweather("Sahiwal"));


async function fetchweather(city) {
    const result = await fetch(`${url}${city}&appid=${key}&units=metric`);
    const data = await result.json();
    card.innerHTML = '';
    binddata(data);
}

function binddata(data) {
    const card = document.getElementById('card');
    const temp = document.getElementById('temp');

    const clone = temp.content.cloneNode(true);
    fill(clone, data);
    card.appendChild(clone);
}

function fill(clone,data) {
    const icon = clone.getElementById('icon');
    const location = clone.getElementById('location');
    const temprature = clone.getElementById('temprature');
    const humidity = clone.getElementById('humidity');
    const wind = clone.getElementById('wind');
    const inp = clone.getElementById('inp');
    const btn = clone.getElementById('btn');
    const weather = clone.getElementById('weather');

    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    location.innerHTML = data.name;
    temprature.innerHTML = `${data.main.temp}°C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    weather.innerHTML = data.weather[0].main;



    
btn.addEventListener('click', ()=>{
    const cityname = inp.value;
    if (!cityname) return;

    fetchweather(cityname);
    inp.value = '';
});
}
































// window.addEventListener('load', () => fetchweather("sydney"));

// async function fetchweather(city) {
//     const res = await fetch(`${url}${city}&appid=${key}&units=metric`);
//     const data = await res.json();
//     bindData(data);
// }

// function bindData(data) {
//     const card = document.getElementById('card');
//     const temp = document.getElementById('temp');

//     card.innerHTML = '';

//     const clone = temp.content.cloneNode(true);
//     fill(clone, data);
//     card.appendChild(clone);
// }

// function fill(clone, data) {
//     const icon = clone.querySelector('#icon');
//     const temprature = clone.querySelector('#temprature');
//     const location = clone.querySelector('#location');
//     const humidity = clone.querySelector('#humidity');
//     const wind = clone.querySelector('#wind');

//     icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
//     temprature.innerHTML = `${data.main.temp}°C`;
//     humidity.innerHTML = `${data.main.humidity}%`;
//     wind.innerHTML = `${data.wind.speed} km/h`;
//     location.innerHTML = data.name;
// }