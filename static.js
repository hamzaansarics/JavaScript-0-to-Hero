//static are used to access by class level & if we want to create multiple objects of the same class
//and want the some data common for all objects that's data make the static
class company{
    static common="NETSOL TECHNOLOGIES";
    constructor(name)
    {
        this.name=company.capitalize(name);
        alert(this.name);
    }
    static capitalize(name){
        return name.toUpperCase();
    }
}
let obj = new company("show me");
let obj1 = new company("hi");
let obj2 = new company("helo");
// obj.common="power of data"
console.log(company.common)