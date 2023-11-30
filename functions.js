/*
-Functions are used to follow the DRY principle
there are different ways to write functions but the working will be same for all
*/
//Normal Function
function simple_func(){
    return "this is very simple function"
}
let c = simple_func();
console.log(c);

//Arrow Function
const arrow_func = () =>{
    return "hellow from arrow function of javascript";
}
let output = arrow_func()
console.log(output);

//Anonomyious Function
(function(){
    console.log("hellow from direct function")
})();




