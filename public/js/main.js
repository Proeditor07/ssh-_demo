const submitBtn= document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');


// const d = new Date();
// let day = d.getDay();
const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


const d = new Date();
let day = weekday[d.getDay()];
    if(cityVal=="")
    {
        city_name.innerText = `Please write the city name before search`

    }else{
        try{

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=cce9f19808408fe6bddd8a8f711dc71a`
            const response = await fetch(url)
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

            const tempMood = arrData[0].weather[0].main;
            document.getElementById("day").innerHTML = day;
            const d = new Date();
           
            // const date = new Date();
            // document.getElementById("date").innerHTML = d.getDate();
            // let month = months[d.getMonth()];
            // document.getElementById("month").innerHTML = month;

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                } else if (tempMood == "Rain") {
                temp_status.innerHTML = 
                    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                } else {
                temp_status.innerHTML =
                    "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
    
                }
        }
        catch{
        city_name.innerText = `Please enter the city name correctly`

        }
    }

  
}
submitBtn.addEventListener('click',getInfo)