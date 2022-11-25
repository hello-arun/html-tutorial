import { Node } from "./tree.js"
import { printTree } from "./treePrint.js";

// Nodes
const root = new Node("A");
const al = new Node("AL");
const all = new Node("ALL");
const alr = new Node("ALR");
const ar = new Node("AR");
const arl = new Node("ARL");
const arr = new Node("ARR");
// Node connections
root.left = al
root.right = ar
al.left = all
al.right = alr
ar.left = arl
ar.right = arr


printTree(root)