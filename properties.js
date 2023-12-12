class Properties_Test{
    constructor(_name)
    {
        this._name=_name;
        console.log("constructor is called",this._name);
    }
    get name()
    {
        return "getter property is called "+this._name;
    }
    set prop(param)
    {
        if(param=="set")
        {
            this._name=param;         
        }
        else
        {
            this._name="Properties are failed to add";    
        }
    }
}

let obj = new Properties_Test("Simple data")
obj.prop="set"
console.log(obj.name)

console.log(obj instanceof Properties_Test)//return if the object is instanse of this or it's parent class

