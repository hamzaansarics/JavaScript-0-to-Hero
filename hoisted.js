//hoisted means variables and functions are declared in the start even we declared them
//end or some other part of code 
//NOTE: hoisted works only for var type variables and named functions not function expressions

console.log(a); //Hoisted working because internally a is declared before using as var a;
dump_data();

var a = 10;
function dump_data()
{
    console.log("data is dumped successfuly")
}

console.log(b); //Error occured
recive_data();  //function data 

let b=1034; 
let recive_data=()=>
{
    console.log("data is recieved")
}