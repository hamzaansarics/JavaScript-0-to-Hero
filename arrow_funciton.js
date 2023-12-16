let arrow_func = () => {
    console.log("Arrow function is called")
}
arrow_func();

let arrow_func_param = (names) =>{
    console.log(names);
}
arrow_func_param("print the name please");

let arrow_func_param_1 = param => console.log("This is the first param",param);
arrow_func_param_1("show men here data with parameters")

let arrow_func_param_2 = (p1,p2)=> 
{
    console.log(p1);
    console.log(p2);
}
arrow_func_param_2("parameter 1","parameter 2");

const obj = {
    "name":"Muhammad Ameer Hamza",
    "address":"Kalowal Pakistan",
    show_detail:()=>
    {
        console.log(this.name);
        console.log(this.address);
    }
}
obj.show_detail();