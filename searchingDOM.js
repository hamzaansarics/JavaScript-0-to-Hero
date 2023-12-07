// let doc = document.getElementById("unique");
// doc.style.color="blue"
let doc = document.getElementsByClassName("unique")[0];
let cname = document.getElementsByClassName("name-class")[0]
cname.style.color="red"
let idname = document.getElementById("name-id1");
idname.style.color='green'
let qsall = document.querySelectorAll(".name-class");
qsall[0].style.color="yellow"
let qs = document.querySelector(".name-class");
qs.style.color="brown"
let snames = document.getElementsByName("inp")[0];
snames.style.color="pink" 
console.log(cname)