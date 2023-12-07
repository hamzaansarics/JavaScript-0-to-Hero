let elem = document.getElementsByClassName("mouse")[0];
let val = elem.innerHTML;
let controller = true;
elem.onclick = ()=>{
    if(controller==true)
    {
        elem.innerHTML="JS updated from JS"
        controller=false;
    }else
    {
        elem.innerHTML = val;
        controller=true;
    }
    
};
const func=(obj)=>{
    
    console.log(obj.type,obj.clientX,obj.clientY)
}
document.getElementsByTagName("div")[1].addEventListener('click',func);
document.addEventListener('click',func)
//document.getElementsByTagName("div")[1].removeEventListener('click',func)