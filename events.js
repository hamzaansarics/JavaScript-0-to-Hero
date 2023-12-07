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