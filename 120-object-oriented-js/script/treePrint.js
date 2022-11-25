import { Node, postOrderTravel } from "./tree.js";
import { drawCircle } from "./circle.js";
/**
 * @param {Node} root A root of a tree
 */
export function printTree(root) {
    console.log(root)
    console.log("Post Order Traversal")
    console.log(postOrderTravel(root))

    console.log("Updating Level of tree")
    setYPos(root);
    console.log(root)

    showGraphic(root)
}

/**
 * @param {Node} root A root of a tree
 */
function showGraphic(root) {
    if (root) {
        drawCircle(100, 50 + 30 * root.loc.y)
        showGraphic(root.left)
        showGraphic(root.right)
    }
}

function setYPos(root, level = 0) {
    if (root) {
        root.loc.y = level
        level++
        setYPos(root.left, level)
        setYPos(root.right, level)
    }
}