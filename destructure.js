//destructuring are used to unpack the arrays,objects into variables
//unpacking arrays,objects without destructuring
let arr=[1,24,53,64,45]
let a=arr[0] //1
let b=arr[1] //24

let obj = {
    "name":"Muhammad Ameer Hamza",
    "city":"Kalowal Chiniot",
    "worked":"Worked at NETSOL Technologies"
}
let o1 = obj.name;
let o2 = obj.city

//unpacking using destructuring
let [a1,a2] = arr
console.log(a1,a2) //1,24

let [a3,a4,...spread1]=arr
console.log(a3,a4,spread1) //1,2,[53,64,45]

let [,a5,,,...spread2]=arr //first ,third & fourth are missed other are unpacked 
console.log(a5,spread2) 

let {o3,o4,...so} = obj
console.log({"name":"Hamza Ansri","city":"Chiniot",...obj}) //they will display only object data by spread opertor
console.log({...obj,"name":"Hamza Ansri","city":"Chiniot"}) //they will replace the values first then display remaining values






