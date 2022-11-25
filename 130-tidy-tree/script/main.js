import { Node } from "./tree.js";
// import { printTree } from "./treePrint.js";

// Nodes
const _O = new Node("O");
const _E = new Node("E", _O);
const _F = new Node("F", _O);
const _N = new Node("N", _O);
_O.children = [_E, _F, _N];

const _A = new Node("A", _E);
const _D = new Node("D", _E);
_E.children = [_A, _D];

const _B = new Node("B", _D);
const _C = new Node("C", _D);
_D.children = [_B, _C];

const _G = new Node("G", _N);
const _M = new Node("M", _N);
_N.children = [_G, _M];

const _H = new Node("H", _M);
const _I = new Node("I", _M);
const _J = new Node("J", _M);
const _K = new Node("K", _M);
const _L = new Node("L", _M);
_M.children = [_H, _I, _J, _K, _L];

console.log(_O)
console.log(_D.getLeftSibling())
// printTree(root)
