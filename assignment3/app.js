var inputValue=document.querySelector('#search-text-input');
var submit=document.querySelector('#submit');
var place=document.querySelector('#city');
var temp=document.querySelector('#temp');
var country=document.querySelector('#country');
var humidity=document.querySelector('#humidity');


submit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=017291c1a57fa8a7cd4d8ec19170da4d')
    .then(response => response.json())
    .then(data=>{
        var placeValue=data['name'];
        var countryValue=data['sys']['country'];
        var tempValue=Math.round(data['main']['temp']-273);
        var humidityvalue=data['main']['humidity'];


        place.innerHTML=placeValue;
        country.innerHTML=countryValue;
        temp.innerHTML=`${tempValue}°`;
        humidity.innerHTML=`${humidityvalue}%`;
    })
    .catch(err => alert("You Enter a wrong city Name"))
})