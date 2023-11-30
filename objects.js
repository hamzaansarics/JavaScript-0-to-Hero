const obj = {
    "hamza":90,
    "Ahmed":90,
    "kashif":"90"
}

for(let i=0; i<Object.keys(obj).length; i++)
{
    console.log(i+"  "+Object.keys(obj)+" "+obj[i]+" "+obj[Object.keys(obj)[i]])
}

let names = "Khan Sahib SsRrR";
let n_name;
for(let i=0; i<names.length; i++){
    if(names[i]==names[i].toUpperCase())
    {
        n_name+=String(names[i].toLowerCase())
    }else
    {
        n_name+=String(names[i].toUpperCase())
    }
}
//console.log("Before processing: "+names)
console.log("After processing: "+n_name)