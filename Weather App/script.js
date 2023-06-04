


const inputEl = document.getElementById('inputEl');
const Search = document.getElementById('search');
const countryName = document.getElementById('countryName');
const localTime = document.getElementById('localTime');
const temp = document.getElementById('temp');
const codition = document.getElementById('condition');
const icon = document.getElementById('icon');
const precip_in = document.querySelector('.precip_in');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const errorMessage = document.getElementById('error');
const data = document.querySelector('.data');

/////////////// The Country////////////////

let country = (Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]);
 WeatherApp(country);
// WeatherApp(country);
const Appearance = ()=>{
  country = inputEl.value;
  WeatherApp(country);
}
///////////////Html Element/////////////////
const style = (data)=>{
   
    countryName.innerText = data.location.name;
    icon.innerHTML = `<img width='100px' height='100px' src="${data.current.condition.icon}"/>`
    localTime.innerText = data.location.localtime;
    codition.innerHTML=`${data.current.condition.text}`;
    temp.innerHTML = data.current.temp_c +' <sup><i class="fa-regular fa-circle fa-2xs"></i></sup> C ' 
     + '<i class="fa-solid fa-grip-lines-vertical"></i>'+" "+ data.current.temp_f + ' <sup><i class="fa-regular fa-circle fa-2xs"></i></sup> F' 
    precip_in.innerText = `precipitation: ${data.current.precip_in} %`
    wind.innerText =`wind: ${data.current.wind_mph} MPH`
    humidity.innerText =`Humidity: ${data.current.humidity} %`
    
}


/////////////////////Fetch Api////////////////
async function WeatherApp (country){
    
    const ApiUrl = `https://api.weatherapi.com/v1/current.json?key=b96e31ae219a40cda35204836230306&q=${country}&aqi=yes`;

     try{
        const response = await fetch(ApiUrl); 
        const data = await response.json();
        console.log(data);
        errorMessage.classList.add('display');
        style(data);

    }catch(err){
        errorMessage.classList.remove('display');
        errorMessage.innerHTML = "No matching location found";
      

    }
   

}

/////////////////The Events////////////////
Search.addEventListener('click', Appearance);
inputEl.addEventListener('keydown', (e)=>{
    if( e.key === "Enter"){
       Appearance();
    } 
});