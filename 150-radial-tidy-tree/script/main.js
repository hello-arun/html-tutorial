import { beautifyTree, drawTree } from "./tree.js";
import { Node } from "./Node.js";
// import { printTree } from "./treePrint.js";

// Nodes
const _Z = new Node("Z");

const _Z1 = new Node("Z1");
const _Z11 = new Node("Z11");
const _Z12 = new Node("Z12");
const _Z111 = new Node("Z111");
const _Z112 = new Node("Z112");
const _Z121 = new Node("Z121");
const _Z122 = new Node("Z122");

const _Z2 = new Node("Z2");
const _Z21 = new Node("Z21");
const _Z211 = new Node("Z211");

const _Z3 = new Node("Z3");

const _Z31 = new Node("Z31");
const _Z32 = new Node("Z32");
const _Z321 = new Node("Z321");
const _Z322 = new Node("Z322");
const _Z323 = new Node("Z323");
const _Z324 = new Node("Z324");
const _Z325 = new Node("Z325");

_Z.setChildren([_Z1, _Z2, _Z3]);
_Z1.setChildren([_Z11, _Z12]);
_Z2.setChildren([_Z21]);
_Z3.setChildren([_Z31, _Z32]);

_Z11.setChildren([_Z111, _Z112]);
_Z12.setChildren([_Z121, _Z122]);
_Z21.setChildren([_Z211]);
_Z32.setChildren([_Z321, _Z322, _Z323, _Z324, _Z325]);

beautifyTree(_Z);
drawTree(_Z)