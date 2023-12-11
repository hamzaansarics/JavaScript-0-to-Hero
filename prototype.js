//prototype is the properties of javascript object
const obj = {
    "Laptop":"DELL:1902",
    "Model":"GFX:123",
    "run":()=>{
        alert("Pakistan is the first country");
    }
}
const p={
    "first":"name",
    "run":()=>{
        alert("P Run")
    }
}
obj.__proto__=p
obj.run();
console.log(obj)