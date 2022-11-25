export class Node {
    constructor(name, parent = null) {
        this.name = name;
        this.children = null;
        this.parent = parent;
        this.x = 0;
        this.level = 0;
        this.prelim = 0; // Prelim x cord
        this.mod = 0; // Modifer
        this.thread = null;
        this.ancestor = this;
        this.number = -1;

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

        /**
         * 
         * @param {Node []} children 
         */
        this.setChildren = (children) => {
            this.children=children
            children.forEach(child => {
                child.parent=this
            });
        }
    }
}
