import { Node ,TreeLayout} from "./tree.js";
// import { printTree } from "./treePrint.js";

// Nodes
const _O = new Node("O");
const _E = new Node("E", _O,1);
const _F = new Node("F", _O,2);
const _N = new Node("N", _O,3);
_O.children = [_E, _F, _N];

const _A = new Node("A", _E,1);
const _D = new Node("D", _E,2);
_E.children = [_A, _D];

const _B = new Node("B", _D,1);
const _C = new Node("C", _D,2);
_D.children = [_B, _C];

const _G = new Node("G", _N,1);
const _M = new Node("M", _N,2);
_N.children = [_G, _M];

const _H = new Node("H", _M,1);
const _I = new Node("I", _M,2);
const _J = new Node("J", _M,3);
const _K = new Node("K", _M,4);
const _L = new Node("L", _M,5);
_M.children = [_H, _I, _J, _K, _L];

// console.log(_O)
// console.log(_D.getLeftSibling())

TreeLayout(_O)
console.log(_O)
// printTree(root)



