const apiKey="&appid=a5b7fedfd3aed7c44f5bc2ee93334d10";
const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

btn=document.querySelector(".btn");
SearchBox=document.querySelector(".search");
image=document.querySelector(".image");
getWeather("Delhi")
btn.addEventListener("click",()=>{
    getWeather(SearchBox.value);
});

SearchBox.addEventListener("keypress",(evt)=>{
    if(evt.key=="Enter"){
    getWeather(SearchBox.value);
    }
});

async function getWeather(city)
{
    const response=await fetch(URL+city+apiKey);
    var data=await response.json();

    city=document.querySelector(".City");
    Temperature=document.querySelector(".temperature");
    Humidity=document.querySelector(".Humidity");
    Wind=document.querySelector(".Wind");
    city.innerText=data.name;
    Temperature.innerText=Math.round(data.main.temp)+" °C";
    Humidity.innerText=data.main.humidity+"%";
    Wind.innerText=data.wind.speed+"Km/h";
    

    if(data.weather[0].main=="Clouds")
    {
        image.src="Images/Cloud.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        image.src="Images/Clear.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        image.src="Images/Mist.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        image.src="Images/Drizzle.png";
    }
    else if(data.weather[0].main=="Rain")
    {
            image.src="Images/Rain.png";
    }   
    else if(data.weather[0].main=="Snow")
    {
        image.src="Images/snow.png";
    } 

    SearchBox.value="";
}
