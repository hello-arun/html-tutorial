export class Node {
    constructor(data, loc = { x: 0, y: 0 }) {
        this.data = data;
        this.loc = loc;
        this.left = null;
        this.right = null;
    }
}

export function postOrderTravel(node, outPut = "") {
    if (node) {
        outPut = postOrderTravel(node.left, outPut);
        outPut = postOrderTravel(node.right, outPut);
        return outPut + node.data + ",";
        // console.log(node.data)
    }
    return outPut;
}

