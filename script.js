let search = document.querySelector(".search")
let button = document.querySelector(".search_button")
let i = document.querySelector(".w_img")
let b= document.querySelector("body")
let tmrw_img = document.querySelector(".tmrw_img")
let deg_next_tmrw=document.querySelector(".deg_next_tmrw")
let next_tmrw_img = document.querySelector(".next_tmrw_img")
// s= () =>{
// let n = prompt("enter the place ")
// console.log(n)
// }
// b.addEventListener("click",s,{once:true})


async function action (){
    let n = search.value
    console.log(n)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=6b2cf03b4c9c61442ebe13f9995c9b43&units=metric`)
    let data = await response.json();
    console.log(data)
    document.querySelector(".name").innerHTML=data.name
    console.log(data.name)
    document.querySelector(".tem").innerHTML=Math.floor(data.main.temp) + "°C"
    console.log( data.main.temp)
    document.querySelector(".h").innerHTML=data.main.humidity +"%"
    console.log(data.main.humidity)
    document.querySelector(".ws").innerHTML=data.wind.speed +"Km/hr"
    console.log(data.wind.speed)
    document.querySelector(".climate").innerHTML=data.weather[0].main
    console.log(data.weather[0].main)
    
    if(data.weather[0].main == "Clouds"){
        i.src = "pic/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        i.src = "pic/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        i.src = "pic/drizzle.png";
    }
    else if(data.weather[0].main == "Humidity"){
        i.src = "pic/humidity.png";
    }
    else if(data.weather[0].main == "Mist"){
        i.src = "pic/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        i.src = "pic/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        i.src = "pic/clouds.png";
    }
    else if(data.weather[0].main == "Wind"){
        i.src = "pic/wind.png";
    }
    next_action()
}

button.addEventListener("click",action)

async function next_action(){
    let n = search.value
    console.log("next:::" + n)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${n}&appid=6b2cf03b4c9c61442ebe13f9995c9b43&units=metric`)
    const data_next= await response.json();
    console.log(data_next)

    // tmrw

    document.querySelector(".deg_tmrw").innerHTML = Math.floor(data_next.list[8].main.temp) + "°C"
    console.log("tmrw" + data_next.list[8].main.temp)
    console.log("tmrw" + data_next.list[8].weather[0].main)

    if(data_next.list[8].weather[0].main == "Clouds"){
        tmrw_img.src = "pic/clouds.png";
    }
    else if(data_next.list[8].weather[0].main == "Clear"){
        tmrw_img.src = "pic/clear.png";
    }
    else if(data_next.list[8].weather[0].main == "Drizzle"){
        tmrw_img.src = "pic/drizzle.png";
    }
    else if(data_next.list[8].weather[0].main == "Humidity"){
        tmrw_img.src = "pic/humidity.png";
    }
    else if(data_next.list[8].weather[0].main == "Mist"){
        tmrw_img.src = "pic/mist.png";
    }
    else if(data_next.list[8].weather[0].main == "Rain"){
        tmrw_img.src = "pic/rain.png";
    }
    else if(data_next.list[8].weather[0].main == "Snow"){
        tmrw_img.src = "pic/clouds.png";
    }
    else if(data_next.list[8].weather[0].main== "Wind"){
        tmrw_img.src = "pic/wind.png";
    }

// day after tmrw
    document.querySelector(".deg_next_tmrw").innerHTML = Math.floor(data_next.list[17].main.temp) + "°C"
    console.log("day after tmrw" + data_next.list[17].main.temp)
    console.log("day after tmrw" + data_next.list[17].weather[0].main)

    if(data_next.list[17].weather[0].main == "Clouds"){
        next_tmrw_img.src = "pic/clouds.png";
    }
    else if(data_next.list[17].weather[0].main == "Clear"){
        next_tmrw_img.src = "pic/clear.png";
    }
    else if(data_next.list[17].weather[0].main == "Drizzle"){
        next_tmrw_img.src = "pic/drizzle.png";
    }
    else if(data_next.list[17].weather[0].main == "Humidity"){
        next_tmrw_img.src = "pic/humidity.png";
    }
    else if(data_next.list[17].weather[0].main == "Mist"){
        next_tmrw_img.src = "pic/mist.png";
    }
    else if(data_next.list[17].weather[0].main == "Rain"){
        next_tmrw_img.src = "pic/rain.png";
    }
    else if(data_next.list[17].weather[0].main == "Snow"){
        next_tmrw_img.src = "pic/clouds.png";
    }
    else if(data_next.list[17].weather[0].main== "Wind"){
        next_tmrw_img.src = "pic/wind.png";
    }
}

 

 
