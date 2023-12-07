// let attr = id3.getAttribute("name-class");
// console.log(attr)
let a = document.getElementsByTagName("div")[0]
let vari = document.createElement("div")
vari.innerHTML="Dynamic created div"
a.append(vari)
a.prepend(vari)
a.appendChild(vari)
a.before(vari)
a.after(vari)
a.replaceWith(vari)

let elem = document.getElementById("spid")
elem.insertAdjacentElement('beforebegin','<h1>fjsdlfjdls</h1>')