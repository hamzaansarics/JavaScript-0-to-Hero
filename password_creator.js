class Password_Genrator
{
    chracters=['-','_','@',"*","^",'{','}',':',';']
    symbols=['(','!','&',"$","%","?","<",">","+","|","/",'#']
    alpha=['a','b','c',"d","e","f","g","h","i","j","k","l","m"]
    funnyPasswords=['admin','helo','123456','mypassword','nice','master']
    GenrateWeakPassword(n)
    {
        let weakpassword = "";
        for(var i=0; i<=n; i++){
            weakpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)].toUpperCase();
            weakpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)];
        }
        console.log("Weak Password! ",weakpassword)
    }
    GenrateStrongPassword()
    {
        let strongpassword="";
        strongpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)].toUpperCase();
        strongpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)]
        strongpassword+=this.chracters[Math.floor(Math.random()*this.chracters.length)]
        strongpassword+=this.symbols[Math.floor(Math.random()*this.symbols.length)]
        
        console.log("Strong Password: ",strongpassword)
    }
    GenrateSupertrongPassword(n)
    {
        var superstrongpassword="";
        for(let i=0; i<=n; i++)
        {
            superstrongpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)].toUpperCase();
            superstrongpassword+=this.alpha[Math.floor(Math.random()*this.alpha.length)]
            superstrongpassword+=this.chracters[Math.floor(Math.random()*this.chracters.length)]
            superstrongpassword+=this.symbols[Math.floor(Math.random()*this.symbols.length)] 
        }
        console.log("Super Strong Password: ",superstrongpassword)
    }
    GenrateFunnyPassword(){
        var funnypassword="";
        funnypassword+=this.funnyPasswords[Math.floor(Math.random()*this.funnyPasswords.length)]
        console.log("Funny Password: ",funnypassword)

    }

}

var pg = new Password_Genrator();
pg.GenrateWeakPassword(4)
pg.GenrateFunnyPassword()
pg.GenrateStrongPassword();
pg.GenrateSupertrongPassword(2);