let promise = new Promise((resolve,reject)=>{
    console.log("Promis is pending...")
    setTimeout(()=>{
        console.log("data is dumped into database successfuly ");
        resolve({username:"hamzaansari",password:"$123@p"});
      // reject(new Error("Hello form Error"))
    },1000)
});
console.log(promise)//show the properties of promise

//execute when promise return result succesfuly
promise.then((value)=>{
    console.log(value)
    return value;
}).then((val)=>{
    console.log(val)
})
//Handle the errors
promise.catch(()=>{
    console.log("Promise failed to execute")
})