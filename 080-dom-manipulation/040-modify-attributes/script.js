const body = document.body
const div = document.querySelector("div")
const hi = document.querySelector("#hi")
const bye = document.querySelector("#bye")


// To get attributes
console.log("HOVER TEXT "+hi.getAttribute("title"))
// or
console.log(hi.title)

// properties with syntax data-<propertyname> are accessed by .dataset
// hyphens are removed and chaged to camelCases
console.log("Name "+hi.dataset.name+"\nAge "+hi.dataset.age+"\nHome Address"+hi.dataset.homeAddr)
// Set attributes
hi.title="Hello Arun"
// or this 
// hi.setAttribute("title","Hello Arun")
console.log("Hover Text is changed now to\n"+hi.title)

