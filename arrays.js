let arr = [0,true,1.5,"Stromg",'f',undefined,null]
let int_arr = [0,1,24,43,6,65,23,45,2,59,8]
let i = 0;
let len = arr.length;
let temp = "";
let names = "Javasript"
//Classical way of printing array elements
for(i; i<len; i++)
{
    temp += arr[i]+" "
}
console.log(temp)

//Foreach loop in Javascript
arr.forEach((element=>{
    console.log(element)
}))

//for ... of loop similar working as Foreach loop in C# worked
for(let item of arr)
{
    console.log(item)
}


//for...in loop, they print the index of an array elements rather than element by itself
for(var item in arr){
    console.log(item)
}

//Array From, this is the method which turn into array 
let arr21 = Array.from(names)
console.log(arr21)
arr.forEach((elemetn,ind,arr)=>{
    console.log(elemetn,ind,arr)
})

//Map function, basically they are same as foreach but diff. is that return a new array 
let arr2 = int_arr.map((element)=>{
    return element
})
console.log(arr2)

//Filter function, bascically they are same as Map but difference is that filter each element of an array and return a new array
let arr3 = int_arr.filter((element)=>{
    return element<10
})
console.log(arr3)



