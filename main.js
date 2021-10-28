// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "6cc1f62923b1f3e5d18e9f13a51e3535",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


window.addEventListener("load", () => {
    let long;
    let lang;


    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((position) => {

            long = position.coords.longitude;
            lang = position.coords.latitude;
            long = long.toFixed(4);
            lang = lang.toFixed(4);
            document.querySelector('.weather-body').style.display = "block";

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lang}&lon=${long}&appid=6cc1f62923b1f3e5d18e9f13a51e3535`)
                .then(weather => {
                    return weather.json();
                }).then(showWeatherReport2);
        })
    }

});

const searchInputBox = document.getElementById('input-box');


searchInputBox.addEventListener('keypress', (event) => {

    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});


// function getWeatherReport(city) {
//     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
//         .then(weather => {
//             return weather.json();
//         }).then(showWeatherReport);
// }

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(showWeatherReport).catch((error) => {
            alert("Location not Found");
            console.log(error);
        });

}

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;


    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);


    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/Clear.jpg')";
        var audio = new Audio('audio/clear.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        var audio = new Audio('audio/wind22.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/fog.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('images/rain.jpg')";
        var audio = new Audio('audio/rainRingtone.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('images/Snow.jpg')";
        var audio = new Audio('audio/wind22.mp3');
        audio.play();


    } else if (weatherType.textContent == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        var audio = new Audio('audio/thunderstormclap2RingtoneRingtone.mp3');
        audio.play();
    }

    else if (weatherType.textContent == 'Fog') {

        document.body.style.backgroundImage = "url('images/fog.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }
    else if (weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/MIST.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }

    else if (weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url('images/smoke.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }

    let windBlow = document.getElementById('wind');
    windBlow.innerHTML = `${"Wind Speed : " + weather.wind.speed}` + " m/s ";


    let pressure = document.getElementById('pressure');
    pressure.innerHTML = `${"Pressure : " + weather.main.pressure + " mb"}`;


    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `${"Humidity : " + weather.main.humidity + "%"}`;

}


function showWeatherReport2(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp - 274)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min - 274)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max - 274)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;


    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);



    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/Clear.jpg')";
        var audio = new Audio('audio/clear.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        var audio = new Audio('audio/wind22.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('images/fog.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Rain') {

        document.body.style.backgroundImage = "url('images/rain.jpg')";
        var audio = new Audio('audio/rainRingtone.mp3');
        audio.play();

    } else if (weatherType.textContent == 'Snow') {

        document.body.style.backgroundImage = "url('images/Snow.jpg')";
        var audio = new Audio('audio/wind22.mp3');
        audio.play();


    } else if (weatherType.textContent == 'Thunderstorm') {

        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        var audio = new Audio('audio/thunderstormclap2RingtoneRingtone.mp3');
        audio.play();
    }

    else if (weatherType.textContent == 'Fog') {

        document.body.style.backgroundImage = "url('images/fog.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }
    else if (weatherType.textContent == 'Mist') {

        document.body.style.backgroundImage = "url('images/MIST.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }

    else if (weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url('images/smoke.jpg')";
        var audio = new Audio('audio/jay.mp3');
        audio.play();

    }


    let windBlow = document.getElementById('wind');
    windBlow.innerHTML = `${"Wind Speed : " + weather.wind.speed}` + " m/s ";


    let pressure = document.getElementById('pressure');
    pressure.innerHTML = `${"Pressure : " + weather.main.pressure + " mb"}`;


    let humidity = document.getElementById('humidity');
    humidity.innerHTML = `${"Humidity : " + weather.main.humidity + "%"}`;
}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}







