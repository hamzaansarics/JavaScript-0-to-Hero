//if we declare variable with let keyword then it's scope will be limited deponds on scope
let a1=10 //global scope

{
    let a2=20; //local scope
}

(async ()=>{
    let a3 = 45; //local scope
})();

console.log(a1); //10
console.log(a2); //Error Unknown variable :referenceError
console.log(a3); //Error Unknown variable :referenceError