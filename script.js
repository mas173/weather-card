 const btn =document.querySelector("button");
 const input = document.querySelector("input");
 const img = document.querySelector("img");
 const temprature = document.querySelector(".temp");
 const weather = document.querySelector(".weather");
 const city_val = document.querySelector(".city");
 const humidity = document.querySelector("#value");
 const wind  = document.querySelector("#speed");
 const direction = document.querySelector("#direction");

let weatherfun = async() =>{

  let city = input.value;
  const  url = `https://api.positionstack.com/v1/forward?access_key=847918d8e25c64ca5193d971e6461fd2&query=${city}`

  let response = await fetch(url);
  let value = await response.json();
  console.log(value);
  lat = value.data[0].latitude;
  lon = value.data[0].longitude;

  // lat = 25.691469;
  // lon = 85.207465;

  console.log(lat , lon);
  console.log(city);



  const url1 = `https://ai-weather-by-meteosource.p.rapidapi.com/time_machine?lat=${lat}&lon=${lon}&date=2021-08-24&units=auto`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6c14bd9feamshdbfcf1ed07bef9bp1b7a81jsn9840dfcc3c64',
		'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url1, options);
	const result = await response.json();
	console.log(result);
// temperautre section
  city_val.innerText = city;
  let maintemp1 = result.data[0].temperature;
  // let maintemp1 = (result.data[0].temperature - 32) * 0.55;
// let maintempvalue = maintemp1.toFixed(1);
  
temprature.innerText = `${maintemp1}°C`;
// wind section
let wind_val = result.data[0].wind.speed;
 let wind_dir = result.data[0].wind.dir;
wind.innerText = `${wind_val}kmph `;
direction.innerText = wind_dir;

// humidity section
humidity.innerText = `${result.data[0].humidity}%`;


// weather type section
weather.innerText = result.data[1].weather;
let weather_val = result.data[0].weather;
console.log(weather_val);

 if(weather_val.includes("sunny")){
  img.src = "sun-of-may.gif"
 }
 if(weather_val.includes("rain")){
  img.src = "rain.gif"
 }
 if(weather_val.includes("cloud")){
  img.src= "cloudy.gif"
 }
 
 if(weather_val.includes("thunderstorm")){
  img.src= "storm.gif"
 }

 if(weather_val.includes("snow")){
  img.src= "snow.gif"
 }
 if(weather_val.includes("fog")){
  img.src= "foggy.gif"
 }



} catch (error) {
	console.error(error);
}
}

btn.addEventListener("click", (evnt)=>{
  evnt.preventDefault();
  weatherfun();

})

