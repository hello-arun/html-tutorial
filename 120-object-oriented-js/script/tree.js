export class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


export function postOrderTravel(node, outPut = "") {
    if (node) {
        outPut = postOrderTravel(node.left, outPut)
        outPut = postOrderTravel(node.right, outPut)
        return outPut + node.data+",";
        // console.log(node.data)
    }
    return outPut
}