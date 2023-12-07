//ClassName
//they are used to replace the new class to the existing class
console.log(country.className) //showing the class 
country.className = "yellow red"
console.log(country.classList)
country.classList.remove("yellow");//Just remove the existing class
country.classList.toggle("yellow");//they will add class if not existed if existed then they will remove them
country.classList.add("txt-purple");//Just add the new class