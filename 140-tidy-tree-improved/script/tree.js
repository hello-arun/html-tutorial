import { drawCircle } from "./circle.js";
const DISTANCE = 15;

export class Node {
    constructor(name, parent = null, number = 0) {
        this.name = name;
        this.children = null;
        this.parent = parent;
        this.x = 0;
        this.yFinal = null;
        this.prelim = 0; // Prelim x cord
        this.mod = 0; // Modifer
        this.thread = null;
        this.ancestor = this;
        this.number = number;

        this.change = 0
        this.shift = 0
        this.isLeaf = () => {
            return this.children === null;
        };
        this.getFirstChild = () => {
            // console.log(this)
            if (this.children) return this.children[0];
            else return null;
        };

        this.getLeftSibling = () => {
            if (this.parent === null) return null;
            const index = this.parent.children.indexOf(this);
            if (index === 0) return null;
            else return this.parent.children[index - 1];
        };

        this.getLeftMostSibling = () => {
            if (this.parent === null) return null;
            const index = this.parent.children.indexOf(this);
            if (index === 0) return null;
            else return this.parent.children[0];
        };

        this.getRightMostSibling = () => {
            if (this.parent === null) return null;
            const index = this.parent.children.indexOf(this);
            if (index === this.parent.children.length - 1) return null;
            else return this.parent.children.at(-1);
        };

        this.getRightSibling = () => {
            if (this.parent === null) return null;
            const index = this.parent.children.indexOf(this);
            if (index === this.parent.children.length - 1) return null;
            else return this.parent.children[index + 1];
        };

        this.getLeftNbr = () => {
            if (this.parent === null) return null;
            const parentleftSibling = this.parent.getLeftSibling();
            if (
                parentleftSibling === null ||
                parentleftSibling.children === null
            )
                return null;
            return parentleftSibling.children.at(-1);
        };

        this.getRightNbr = () => {
            if (this.parent === null) return null;
            const parentleftSibling = this.parent.getLeftSibling();
            if (
                parentleftSibling === null ||
                parentleftSibling.children === null
            )
                return null;
            return parentleftSibling.children[0];
        };
    }
}

/**
 * Initilize modifiers, threads and ancestors
 * And then implements first and second walk
 * @param {Node} root
 */
export function TreeLayout(root) {
    // We already Initilized modifiers in Node class
    FirstWalk(root);
    secondWalk(root, -root.prelim)
    // console.log("After Executing", root)
    printXY(root)
}
/**
 * Computes a prelimnary x-cords for each node
 * But this is applied to the children of v first
 * @param {Node} v
 */
function FirstWalk(v) {
    if (v.isLeaf()) {
        v.prelim = 0;
        let w = v.getLeftSibling();
        if (w !== null) {
            v.prelim = w.prelim + DISTANCE;
        }
    } else {
        let defaultAncestor = v.children[0];
        for (let i = 0; i < v.children.length; i++) {
            let w = v.children[i];
            FirstWalk(w);
            Apportion(w, defaultAncestor);
        }

        executeShifts(v);
        let midpoint = 0.5 * (v.children[0].prelim + v.children.at(-1).prelim);
        let w = v.getLeftSibling();
        if (w !== null) {
            v.prelim = w.prelim + DISTANCE;
            v.mod = v.prelim - midpoint;
        } else {
            v.prelim = midpoint;
        }
    }
}

/**
 * 
 * @param {Node} v 
 * @param {Node} defaultAncestor 
 */
function Apportion(v, defaultAncestor) {
    let w = v.getLeftSibling()
    if (w !== null) {
        let vIR = v
        let vOR = v
        let vIL = w
        let vOL = vIR.getLeftMostSibling()

        let sIR = vIR.mod
        let sOR = vOR.mod
        let sIL = vIL.mod
        let sOL = vOL.mod
        while (nextRight(vIL) !== null && nextLeft(vIR) !== null) {
            vIL = nextRight(vIL)
            vIR = nextLeft(vIR)
            vOL = nextLeft(vOL)
            vOR = nextRight(vOR)
            // console.log(vOR)
            vOR.ancestor = v
            let shift = vIL.prelim + sIL - (vIR.prelim + sIR) + DISTANCE
            if (shift > 0) {
                moveSubtree(ANCESTOR(vIL, v, defaultAncestor), v, shift)
                sIR += shift
                sOR += shift
            }
            sIL += vIL.mod
            sIR += vIR.mod
            sOL += vOL.mod
            sOR += vOR.mod
        }

        if (nextRight(vIL) !== null && nextRight(vOR) === null) {
            vOR.thread = nextRight(vIL)
            vOR.mod += sIL - sOR
        }

        if (nextLeft(vIR) !== null && nextLeft(vOL) === null) {
            vOL.thread = nextLeft(vIR)
            vOL.mod += sIR - sOL
            defaultAncestor = v
        }
    }
}
/**
 * 
 * @param {Node} v 
 */
function nextLeft(v) {
    if (!v.isLeaf()) {
        return v.children[0]
    }
    else {
        return v.thread
    }
}
/**
 * 
 * @param {Node} v 
 */
function nextRight(v) {
    // console.log(v)
    if (!v.isLeaf()) {
        // console.log("I am not leaf")
        // console.log()
        return v.children.at(-1)
    }
    else {
        return v.thread
    }
}
/**
 * 
 * @param {Node} wL 
 * @param {Node} wR 
 * @param {Number} shift 
 */
function moveSubtree(wL, wR, shift) {
    let subTress = wR.number - wL.number
    console.log(wR.name, wL.name, "subTress", subTress)
    wR.change -= (shift / subTress)
    wR.shift += shift
    wL.change += (shift / subTress)
    wR.prelim += shift
    wR.mod += shift
}

/**
 * 
 * @param {Node} v 
 */
function executeShifts(v) {
    let shift = 0
    let change = 0
    for (let i = v.children.length - 1; i >= 0; i--) {
        const w = v.children[i];
        w.prelim += shift
        w.mod += shift
        change += w.change
        shift += w.shift + change
    }
}

/**
 * 
 * @param {Node} vIL 
 * @param {Node} v 
 * @param {Node} defaultAncestor 
 */
function ANCESTOR(vIL, v, defaultAncestor) {
    if (isSibling(vIL.ancestor, v))
        return vIL.ancestor
    else
        return defaultAncestor
}


function isSibling(v, w) {
    if (v.parent === null || w.parent === null) {
        return false
    }
    else {
        return v.parent === w.parent
    }
}

function secondWalk(v, m) {
    v.x = v.prelim + m
    if (v.isLeaf())
        return

    for (let i = 0; i < v.children.length; i++) {
        const w = v.children[i];
        secondWalk(w, m + v.mod)
    }
}


function printXY(v, level = 0) {
    drawCircle(v.x, 20 * level)

    // console.log(v.name, v.x, 10 * level)

    if (v.isLeaf())
        return
    for (let i = 0; i < v.children.length; i++) {
        const w = v.children[i];
        printXY(w, level + 1)
    }
}
