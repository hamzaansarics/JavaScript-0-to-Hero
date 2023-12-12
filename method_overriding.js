class parent{
    constructor(arg){
        alert(arg)
    }
     func(){
        console.log("method of parent class")
    }
}
 class child extends parent{

    constructor(arg,arg1){
        super(arg)
        alert(arg,arg1)
    }
     func(){
        super.func();
    }
}

let cobj = new child("power of constructor","nice data");
cobj.func();