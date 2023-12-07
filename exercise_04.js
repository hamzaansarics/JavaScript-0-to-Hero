// //different alert for different buttons
// const func_alert = () =>{
//     alert("Alert is populated")
// }
// const func_prompt = () =>{
//     prompt("Alert is prompted")
// }
// const func_confirm = (e) =>{
//     confirm("Alert is confirmed")
//     console.log(e)
// }
// document.getElementsByName("btn")[0].addEventListener('click',func_alert);
// document.getElementsByName("btn")[1].addEventListener('click',func_prompt);
// document.getElementsByName("btn")[2].addEventListener('click',func_confirm);

// //click button to navigate from one location to ther
// const navigation_func = (path) =>{
//     window.location=path;
// }
// navigation.addEventListener('click',navigation_func("https://google.com"));

//create a simple day/night effect 
let controller = true;
let dn_func = ()=>{
    document.body.classList.toggle("body_night");
    document.getElementsByTagName("div")[0].classList.toggle("txt-white")
    if(controller)
    {
        DN.innerHTML="Day";
        controller=false
    }else{
        DN.innerHTML="Night";
        controller=true
    }
    
}
document.getElementById("DN").addEventListener('click',dn_func);

//create a blinking effect with bulb image