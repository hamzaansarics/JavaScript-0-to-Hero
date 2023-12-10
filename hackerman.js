document.body.style.background="black";
let elem = document.createElement("div");
elem.style.color="green"
elem.style.fontSize="20px"
document.body.appendChild(elem)
let array=["welcome to hackerbash...","hacking started.......","username quanted by user3429","password: fsd&34*890_","bank informsation is going to start........","Bank Alflah:2308984903284","balance Rs.124,23123,34 $$$$$$","remaining balance is 0.000 $$$$$$","hi user your all balance is stoled////","all balacne is empty please change your password------","please contact to hamza to recover your all accounts"]
// array.forEach(element => {
//     setTimeout(() => {
//         elem.innerHTML+=element+"<br>";
//     }, 1000);
// });

let count=0;
let inner_count=0;
let inner_len=0;
let len = array.length;


    let int_x= setInterval(() => {
        elem.innerHTML+=array[count]+"<br>";
   
        count++;
        if(count==len)
        {
            count=0;
           // clearInterval(int_x)
        }
       }, 200);

 

             
  
