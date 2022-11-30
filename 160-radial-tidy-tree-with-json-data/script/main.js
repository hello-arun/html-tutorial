import { beautifyTree, drawTree } from "./tree.js";
import { Node } from "./Node.js";
import { Person } from "./person.js"
import { genomeData } from "./genome.js";

// import { printTree } from "./treePrint.js";
function generateTree(rootId, maxLevel = 0) {
    const genomeMap = new Map();
    genomeData.forEach(entry => {
        genomeMap.set(entry.id, entry)
    });
    const rootData = genomeMap.get(rootId)
    const root = new Person(rootId, rootData.name, rootData.sex)
    let level = 0
    let toExpand = [root]
    while (level < maxLevel) {
        let toExpandNext = []
        toExpand.forEach(person => {
            const personData = genomeMap.get(person.id)
            if (!personData.relationships) {
                return;
            }
            personData.relationships.forEach(relation => {
                const { partnerId: pid, children: childrenIds } = relation
                const { name, sex } = genomeMap.get(pid)
                const partener = new Person(pid, name, sex)
                let children = []
                childrenIds.forEach(cid => {
                    const { name, sex } = genomeMap.get(cid)
                    let child = new Person(cid, name, sex)
                    children.push(child)
                });
                person.addRelationship(partener, children)
                toExpandNext = [...toExpandNext, ...children]
            });
        });
        level += 1
        toExpand = [...toExpandNext]
    }
    return root

}


/**
 * 
 * @param {Person} person 
 * @param {Number} maxLevel 
 */
function generateNodes(person, maxLevel = 0) {
    const root = new Node(person)
    let level = 0
    let toExpand = [root]
    while (level < maxLevel) {
        let toExpandNext = []
        toExpand.forEach(node => {
            let allChildren = []
            if (!node.person.relationships) {
                return;
            }
            node.person.relationships.forEach(relation => {
                const { children } = relation
                children.forEach(child => {
                    allChildren.push(new Node(child))
                });
                toExpandNext = [...toExpandNext, ...allChildren]
                node.setChildren(allChildren)
            });

        });
        level += 1
        toExpand = [...toExpandNext]
    }
    return root
}

const maxLevel = 5
const rootId = "7dc35801-ce7a-c5f6-b468-47e9670594ee"
const rootPerson = generateTree(rootId, maxLevel)
const rootNode = generateNodes(rootPerson, maxLevel)
console.log(rootNode)
beautifyTree(rootNode);
drawTree(rootNode)