//fetch api data and put them into a table
let pr = fetch("http://api.citybik.es/v2/networks")
pr.then((response)=>{
    return response.json()
}).then((response)=>{
    for(var item in response.networks){
       // a.innerHTML=response.networks[item].company
        tbody.innerHTML+=`<tr>
            <th id="a" scope="row">${response.networks[item].id}</th>
            <td>${response.networks[item].company}</td>
            <td>${response.networks[item].location.city}</td>
            <td>${response.networks[item].location.country}</td>
            <td>${response.networks[item].name}</td>
         </tr>`
    }
})
