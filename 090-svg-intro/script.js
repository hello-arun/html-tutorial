abc = document.querySelector("#abc")
console.log(abc)

abc.addEventListener("pointerenter",e=>{
    abc.setAttribute("fill","cyan")
    console.log("Enter")
})

abc.addEventListener("pointerleave",e=>{
    abc.setAttribute("fill","red")
    console.log("leave")
})

