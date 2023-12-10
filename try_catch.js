//They are used to handle the errors means when we expect that there might be some error
//we put into to try catch block so when error occured they don't stop the remaining executions 
//if we don't do this executions will be stoped automatically
//In the below example first line of will execute & the second line code will throw error that's the reason the last 3line will not be executed
// console.log("Pakistan is my home country"); //sucessfully executed
// console.log(unknown_variable) //error thrown
// console.log("I'm working at NETSOL technologies"); //failed to execute
// console.log("I'm almost 28Y old & still single");//failed to execute
// console.log("I'm trying to learn front end technologies to become FS Dev");//failed to execute



//All the lines of code will be executed successfuly because the second line error is handled
console.log("Pakistan is my home country");
try{
    
    console.log(unknown_variable)
    throw new SyntaxError("THis is not a syntax error:")//custom error throwing
}
catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
finally{
    console.log("finally your file is cleaned")
}
console.log("I'm working at NETSOL technologies");
console.log("I'm almost 28Y old & still single");
console.log("I'm trying to learn front end technologies to become FS Dev");


