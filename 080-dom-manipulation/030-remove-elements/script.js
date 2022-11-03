const body = document.body
const div = document.querySelector("div")
const hi = document.querySelector("#hi")
const bye = document.querySelector("#bye")

// Any of them will work 
// bye.remove()
// or
div.removeChild(bye)

// To add back the element
div.append(bye)