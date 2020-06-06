var button = document.querySelector("button")
var inputValue = document.querySelector(".inputValue")
let unit = document.querySelector(".unitInput")
var wind = document.querySelector(".wind")
var temp = document.querySelector(".temp")
var feelsLike = document.querySelector(".feelslike-val")
let loc = document.querySelector(".location")
let icon = document.querySelector(".icon-container")

   
    const apiKey = "73fa939da2c16c09f4a6421208f2974c"

button.addEventListener("click", function(e){
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&units=" + unit.value + "&APPID=" + apiKey
    e.preventDefault()
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
         let tempValue = data.main.temp
        let locationValue = data.name
        let feelslikeVal = data.main.feels_like
        let windVal = data.wind.speed
        let iconVal = data.weather[0].icon
        let image = "http://openweathermap.org/img/wn/" + iconVal + "@2x.png"
        console.log(image)


        
        loc.innerHTML = locationValue
        wind.innerHTML = windVal
        temp.innerHTML = tempValue
        feelsLike.innerHTML = feelslikeVal
        icon.innerHTML = "<img src="+ image + ">"

        console.log(image)
    
    }
        
        )
    
    .catch(err => alert("Wrong city name!"))

})


