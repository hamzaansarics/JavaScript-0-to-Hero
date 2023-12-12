//take input from user to add values in the local storage and then remove them

submit.addEventListener('click',(e)=>{
    let keyss=document.getElementById("keyf").value;
    let vals = document.getElementById("valf").value;
    localStorage.setItem(keyss,vals);
});

remove.addEventListener('click',()=>{
    let key = document.getElementById("keyf").value;
    localStorage.removeItem(key);
})