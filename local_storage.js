//if we want to add information in browser and the this information not sent server on each request then we use them
localStorage.setItem("name","Hamza Ansari")
localStorage.setItem("name","Hamza Ansari sb")
localStorage.setItem("name1","NETSOL Technologies")
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("name1"))
//localStorage.clear()
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("name1"))
console.log(localStorage.key(1))
let json_obj="{'name':'hamza','address','kalowal pakistan'}"
console.log(JSON.stringify(json_obj))
localStorage.getItem( JSON.parse(JSON.stringify(json_obj)))
window.onstorage=()=>{
    alert("local storate is updated")
}
