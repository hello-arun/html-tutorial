export class Node {
    constructor(name, parent = null) {
        this.name = name;
        this.children = null;
        this.parent = parent;
        this.xFinal = null;
        this.yFinal = null;
        this.prelimX = 0; // Prelim x cord
        this.mod = 0; // Modifer
        this.getFirstChild = () => {
            // console.log(this)
            if (this.children)
                return this.children[0]
            else return null
        }

        this.getLeftSibling = () => {
            if (this.parent === null)
                return null
            const index = this.parent.children.indexOf(this)
            if (index === 0)
                return null
            else
                return this.parent.children[index - 1]
        }

        this.getRightSibling = () => {
            if (this.parent === null)
                return null
            const index = this.parent.children.indexOf(this)
            if (index === this.parent.children.length - 1)
                return null
            else
                return this.parent.children[index + 1]
        }

        this.getLeftNbr = () => {
            if (this.parent === null)
                return null
            const parentleftSibling = this.parent.getLeftSibling()
            if (parentleftSibling === null || parentleftSibling.children === null)
                return null
            return parentleftSibling.children.at(-1)
        }

        this.getRightNbr = () => {
            if (this.parent === null)
                return null
            const parentleftSibling = this.parent.getLeftSibling()
            if (parentleftSibling === null || parentleftSibling.children === null)
                return null
            return parentleftSibling.children[0]
        }

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

