//import ids from html and assign them to a const variable
const input = document.getElementById('city');
const main = document.getElementById('name');
const condition = document.getElementById('description');
const tempValue = document.getElementById('temp')
const tempHigh = document.getElementById('high');
const tempLow = document.getElementById('low');
const button = document.getElementById('submit');

//fetch api after button press
button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&units=metric&exclude=minutely,hourly,alerts&appid=851c447363aefd30ca3673f25c0318a0')
  .then(response => response.json())
  .then(data => {
      //grabs objects from data and assigns them to a variable
      console.log(data)
      var nameValue = data['name'];
      var countryValue = data['sys']['country'];
      var condition = data['weather'][0]['main'];
      var tempValue = data['main']['temp']
      var highValue = data['main']['temp_max'];
      var LowValue = data['main']['temp_min'];
      
      //edits html values to data from api
      main.innerHTML = nameValue + ' ' + countryValue;
      description.innerHTML = condition;
      temp.innerHTML = tempValue + '°C';
      tempHigh.innerHTML = highValue + '°C';
      tempLow.innerHTML = LowValue + '°C';
      input.value ="";
    })
  //catches errors and alerts
  .catch(err => alert("Wrong city name!"));
  })
  