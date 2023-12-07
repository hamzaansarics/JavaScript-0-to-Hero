//Working with nodes
//accessing first childnodes
console.log(document.firstChild) //they will return first node of element
console.log(document.body.lastChild) //they will return last node of element
console.log(document.body) 
console.log(document.head)
console.log(document.title)
console.log(document.childNodes[0])
console.log(document.body.previousSibling)
console.log(document.body.firstChild.parentNode)
console.log(document.body.firstChild.parentElement)
console.log(document.hasChildNodes)
let table = document.body.childNodes[3]
console.log(table.rows)
console.log(table.thead)
console.log(table.tbodies)
console.log(table.title)
console.log(table.caption)