let api=fetch("https://goweather.herokuapp.com/weather/CF")
api.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
   return response.json()
}).then((response)=>{
    console.log( response)
})

//posting data on fake server
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));