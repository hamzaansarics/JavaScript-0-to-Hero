//Chractertristics of DataTypes
/*
Properties of *var* datatypes
-Can be re declared
-Can be re defined value
-Can be intilize or not at declarion time
-Global Scope
*/
var a=12
var a=23

a = 12
{
    var a=0
    console.log(a)//
}
console.log(a); //0

/*
Properties of *let* datatypes
-Can note be re declared
-Can be re defined value
-Can be intilize or not at declarion time
-local Scope
*/

let c
//let c=12 throw an error
c = 12
{
    let c = 19
    console.log(c) //19
}
console.log

/*
Properties of *const* datatypes
-Can not be re declared
-Can not be re defined value
-Can be initilized and declared at the same time
-local Scope
*/
{
    //const d throw an error
    const d = 10;
}
const d = 23;
console.log(d)
