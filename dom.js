// //agr ham apne pure html code ko js bject me convert krdu to usko mai documemnt khta hu and usii ko hm document kht hai 

// //isii ko dom khte hai 
// //query selector 

// null
// document.querySelector(ul)
// VM1933:1 Uncaught ReferenceError: ul is not defined
//     at <anonymous>:1:24
// (anonymous) @ VM1933:1
// document.querySelector('ul')
// <ul id=​"list">​…​</ul>​
// document.querySelector('li')
// <li style=​"background-color:​ orange;​">​::marker​"one "</li>​
// const ans =document.querySelector('li')
// undefined
// ans.style.backgroundColor:'orange'
// VM2114:1 Uncaught SyntaxError: Unexpected token ':'
// ans.style.backgroundColor='orange'
// 'orange'
// const ans =document.querySelector('li+1')
// VM2135:1 Uncaught DOMException: Failed to execute 'querySelector' on 'Document': 'li+1' is not a valid selector.
//     at <anonymous>:1:21
// (anonymous) @ VM2135:1
// ans.innerText
// 'one'
// ans.innerText='eleven'
// 'eleven'
// ans.textContent

const divi = document.createElement('div')
console.log(divi);
divi.className = "main"
divi.id = Math.round(Math.random() * 10)

divi.setAttribute("tittle", "hare krishna")
divi.style.backgroundColor = "orange"
    // divi.innerText = "DHRUV IS THR KING"
    // ye do trip me value written krega mtllb value overwrite hte hai 

const alter = document.createTextNode('HARII BOLL')
divi.appendChild(alter)
document.body.appendChild(divi);

// document.body.innerText(divi)