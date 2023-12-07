/*Settimeout is a JS function which is used to execute JS code in a specific time
it's take 3arguments first is function second is time and third are the arguments these 
arguments may be n numbers bascially they are the function which we passed as first argument
if they are taking 2arguments then we have to pass 2arg after time and so on. They will
return a time id which is later used for controlling the function as clearing.
*/
let sum1 =(a,b)=>{
    alert("Called from sum function of setTimeout"+a+b)
}
let timer_id_to = setTimeout(sum1,100,20,4)
console.log(timer_id_to)
clearTimeout(timer_id_to)

/*setInterval is a JS function which is used to execute JS code in a while loop after a specific time
it's take 3arguments first is function second is time and third are the arguments these 
arguments may be n numbers bascially they are the function which we passed as first argument
if they are taking 2arguments then we have to pass 2arg after time and so on. They will
return a time id which is later used for controlling the function as clearing.

*/

let sum =(a,b)=>{
    alert("Called from sum function of setInterval"+a+b)
}
let timer_id_int = setInterval(sum,100,2,4)
console.log(timer_id_int)

clearInterval(timer_id_int)

//NOTE: only difference in settimeout and settimeinterval is that STO work once after a specific time but STI works like a loop they called after a specific time infinitely even we are not forcely stopped them