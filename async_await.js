async function firstname(){
    setTimeout(function(){
        console.log("First name is Muahammad Ameer")
    },1000)
}
async function lastname(){
    setTimeout(function(){
        console.log("last name is Hamza");
    },1200)
}
async function execute_paralill(){
    let fn = await firstname();
    let ln = await lastname();
}
execute_paralill().then((value)=>{
    return value
});