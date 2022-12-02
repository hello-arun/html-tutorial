import { eachAfter, eachBefore, Node } from "./node.js";


var root = new Node("A")
let A = new Node("AA", root)
let B = new Node("AB", root)
let C = new Node("AC", root)

root.children = [A, B, C]
let BA = new Node("ABA", B)
let BB = new Node("ABB", B)
let BC = new Node("ABC", B)
B.children = [BA, BB, BC]


function sayHi(node, i, k) {
    // console.log(arguments)
    console.log(this)
    console.log("Hello", node.data, i, k)
}

console.log(root)
root.eachAfter(sayHi, "eachAf")
root.eachBefore(sayHi, "eachBe")

