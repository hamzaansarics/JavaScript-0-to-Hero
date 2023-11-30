//Adding Number into string
let a = "10";
let b = 20;
let c = BigInt(a)+BigInt(b);
console.log(c);
//Adding object inside object
//NOTE: we can't write the name object if they already declared const or let type
const a1 = {
    first_k:"nice data",
    second_k:{
        first_k:{
            second_k:"inner of inner key"
        },
        second_k:"inner key"
    }
}
console.log(a1.second_k.first_k.second_k); // Executing inner of inner key
