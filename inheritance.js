class parent{
    name(){
        console.log("Father name::")
    }
}
class child extends parent{
    childname="khan";
    name()
    {
        console.log("child name::")
    }
    
}

let child_obj = new child();
child_obj.name();
console.log(child_obj.childname)