let clock_ = document.getElementById("clock");
let len = clock_.textContent.length;
let sec=0;
let min=0;
let hour=0;

let clock=()=>
{
    if(sec!=60)
    {
        sec+=1;
        if(sec<10){
            if(min<10){
                clock_.innerHTML="00:0"+min+":0"+sec;
            }else{
                clock_.innerHTML="00:"+min+":0"+sec;
            }
            
        }else{
            if(min<10){
                clock_.innerHTML="00:0"+min+":"+sec;
            }else{
                clock_.innerHTML="00:"+min+":"+sec;
            }
        }
    }
    if(sec==60 && min!=60)
    {
        min+=1;
        sec=0
        if(min<10){
            clock_.innerHTML="00:0"+min+":00"
        }else{
            clock_.innerHTML="00:"+min+":00"
        }
    }
    if(sec==60 && min==60 && hour!=12)
    {
        sec=0;
        min=0;
        if(hour<10){
            clock_.innerHTML="0"+hour+":00:00"
        }else{
            clock_.innerHTML=hour+":00:00"
        }
    }
    if(sec==60 && min==60 && hour==12)
    {
        sec=0;
        min=0;
        hour=0;
    }
   // console.log("clock is ticking...")
}
let ref = setInterval(clock,1,0,0)
 //clearInterval(ref)

