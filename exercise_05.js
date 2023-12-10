//write a program to load the script using promise and .then function
function callback(script){
    if(script){
        console.log("scirpt is loaded")
    }
}
function loadscript(src){
    var p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // console.log("promise is pending")
            let script = document.createElement("script");
            script.src=src
            script.onload=()=>{
                resolve(true);
            }
            
        },100)
    }).then(()=>{
        
    })
}



