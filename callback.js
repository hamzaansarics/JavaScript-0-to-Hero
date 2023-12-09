let x_ = (url) =>{
    
   let script = document.createElement("script")
   script.src=url;
   document.body.appendChild(script)
}
function callback(x,url){
    console.log("main funciton is called now")
    let y = prompt("Do you want to call the function");
    if(y){
        return x(url);
    }
}
callback(x_,"https://google.com");