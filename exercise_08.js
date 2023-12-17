//write a program to print to helo world after 2 seconds

let kill = setInterval(()=>{
    console.log("Hello \n World")
},2000)

clearInterval(kill)

//write an program to print average of array numbers using spread operator
let arr=[15,57,7,6,90,4,23,4]
let val=[...arr]
let sum=0;
val.forEach((elem)=>{
    sum+=elem;
})
console.log(sum/2)


//write a function which resolve the promise by n seconds as they passed as an arguments and function should be IIFE
let n=1000;
// ((n)=>{
//     let promise = new Promise((resolve,reject)=>{
//         resolve("Promise is resolved")
//     });
//     setInterval(()=>{
//         promise.then((value)=>{
//             console.log(value)
//         })
//     },n);
    
// })(n);