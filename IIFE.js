//they are used to call the function immedately
async function data(){
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(true);
    },1000)
})
}
async function OPP_IIFE(){
    console.log(await data())
    console.log("opposite of IIFE function");
}

(async ()=>{
    setTimeout(OPP_IIFE(),7000);
    console.log("Immidate function is called")
})();


