//COOKIES ARE STORED  in the browser to send the user interest to server
//cookies have key and value pair we have to give meaningful key as without special chracters
//if we want to use them then we have to use encode function as given below example
console.log(document.cookie)
document.cookie="name=fjflksdjlk"
document.cookie="@#%$=power of cookies" //only store value not cookie key in the browser
document.cookie=`${encodeURIComponent("@#$$^")}=fksfksdfjskdfjl`//they will store key in the string form
document.cookie=`${decodeURIComponent("@#$$^")}=fksfksdfjskdfjl`//decode will turn to see the orignal value before encoding