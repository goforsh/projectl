export class VNode{
    constructor(tag, data, text, type) {
        this.tag = tag && tag.toLowerCase()
        this.data = data
        this.text = text
        this.type = type
        this.children = []

    }
    appendChild(vnode){
        this.children.push(vnode)
    }
}

export function createTextVNode(text) {
    return new VNode(undefined, undefined, text, 3)
}

export function node2VNode(node) {
    let type = node.nodeType
    let vnode = null
    if (type === 1)  {
        let tag = node.nodeName.toLowerCase()    
        let _data = node.attributes       
        let data = {}        
        for (let i = 0; i < _data.length; ++i) {
            data[_data[i].nodeName] = _data[i].nodeValue
        }
        vnode = new VNode(tag, data, undefined, 1)
      
        let children = node.childNodes
        for (let i = 0; i < children.length; ++i) {
            vnode.appendChild(node2VNode(children[i]))
        }
    } else if (type === 3) {
        let text = node.nodeValue
        vnode = createTextVNode(text)
    }
    return vnode
}

export function parseVNode(VNode) {
    let type = VNode.type
    let node = null
    if (type === 1) {
        node = document.createElement(VNode.tag)
        Object.keys(VNode.data).forEach( attr => {
            node.setAttribute(attr, VNode.data[attr])
        })

        VNode.children.forEach( child => {
            let childnode = parseVNode(child)
            node.appendChild(childnode)
        })
    } else if (type === 3) {
        node = document.createTextNode(VNode.text)
    }

    return node
}