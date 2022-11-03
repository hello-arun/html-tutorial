const body = document.body
body.append("Adding div using javascript")
const div = document.createElement("div")
// Only one of the below three option will work
div.innerText = "Inner Text" // you can also use textContent which is slightly different
div.textContent = "Text Content" // you can also use textContent which is slightly different
div.innerHTML = "<strong>Hello World</strong>" // To put html  markup 
body.append(div)