//a function return with it's lexical envirenment is called closures
//suppose there is a function which are using a block level variable so when we return
//that particular function they will they will also return the reference of variables whis funciton are using
//if we change its refference value outside the function they value will aslo change as given below example

function nice()
{
    console.log(hi)
}
let hi="This is the simplest example of closures"
nice();

function closure()
{
    let message = "Data is dumped into database";
    let func= ()=>{
        console.log(message) //they are using message reffernce not it's orignal value
    }
    message="Data is failed to add"
    return func;
}
let inner_func = closure();
inner_func(); //they will return Data is failed to add

let a=()=>{
    let message="function a"
    console.log(message)
    let b =()=>{
         //message="function b"
        console.log(message)
        let c=()=>{
            // message="function c"
            console.log(message)
        }
        message="C Message is updated++"
        c();
    }
    message="B Message is updated++"
    b();
}
a();

