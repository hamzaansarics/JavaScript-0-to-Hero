let api=fetch("https://goweather.herokuapp.com/weather/CF")
api.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
   return response.json()
}).then((response)=>{
    console.log( response)
})