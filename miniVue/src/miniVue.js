class VNode{
    constructor(tag, data, text, type) {
        this.tag = tag 
        this.data = data
        this.text = text
        this.type = type
        this.children = []

    }
    appendChild(vnode){
        this.children.push(vnode)
    }
}

function createTextVNode(text) {
    return new VNode(undefined, undefined, text, 3)
}

function node2VNode(node) {
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

function parseVNode(VNode) {
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
//数组变异

let ArrayProto = Array.prototype
let mutationProto = Object.create(ArrayProto)
let mutationMethods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]


mutationMethods.forEach(item=>{
    let oringin = ArrayProto[item]
    
    Object.defineProperty(mutationProto, item, {
        enumerable: false,
        configurable: true,
        writable: true,
        value:  function (...args) {
            let inserted = null
            switch (item) {
                case 'push':
                case 'unshift': inserted = args ;break
                case 'splice': inserted = args.slice(2); break
            }
            if (inserted) {
                observe(inserted)
            }
            return oringin.apply(this, args)
        } 
        
    })

})

function initData(vm) {
    let keys = Object.keys(vm.$data)
    for (let i = 0; i < keys.length; ++i) {
        proxy(vm, '$data', keys[i])
    }
    
    observe(vm.$data)
    
}
//代理
const sharedPropertyDefinition = {
    enumerable: true,
    configurable: true,
    get: null,
    set: null
  }
function proxy(target, sourceKey, key) {
    sharedPropertyDefinition.get = function () {
        return this[sourceKey][key]
    }
    sharedPropertyDefinition.set = function (newValue) {
        this[sourceKey][key] = newValue
    }
    Object.defineProperty(target, key, sharedPropertyDefinition)
}

//响应式
function hasOwn(target, key) {
    return Object.prototype.hasOwnProperty.call(target, key)
}
function def (obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
      value: val,
      enumerable: !!enumerable,
      writable: true,
      configurable: true
    })
  }

class Observer{
    constructor(ob) {
        console.log(ob)
        this.ob = ob
        this.dep = new Dep()
        def(ob, '__ob__', this)
     
        if (Array.isArray(ob)) {
            ob.__proto__ = mutationProto
            for (let j = 0; j < ob.length; ++j) {
                observe(ob[j])
            }
        } else {
            if (typeof ob === 'object') {
                let keys = Object.keys(ob)
                for (let i = 0; i < keys.length; ++i) {            
                    defineReactive(ob, keys[i], ob[keys[i]])
                }
            }
            
        }
    }
}

function isPlainObject(ob) {
    return Object.prototype.toString.call(ob) === '[object Object]'
}

function observe(ob) {
    let obed
    if (hasOwn(ob, '__ob__') && ob.__ob__ instanceof Observer) {
        obed = ob.__ob__
    } else if ((Array.isArray(ob) || isPlainObject(ob))){
        obed = new Observer(ob)
    }

    return obed    
}

function defineReactive(data, key, value) {
   
    observe(value)
    let dep = new Dep()
 
    
    Object.defineProperty(data, key, {
        configurable: false,
        enumerable: true,
        get () {
            console.log( `get ${key}`);
            if (Dep.target) {
                dep.depend()
            }
            
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                observe(newValue)
                value = newValue
                dep.notify()
            }
            
            console.log( `set ${key}`);
        }
    })  
   if (key === 'apple') {
       console.log(dep)
   }
}
//dep
let depId = 0
class Dep {
    constructor() {
        this.depId = depId++
        this.subs = []
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }
    addSub(watcher) {
        this.subs.push(watcher)
    }
    notify() {
        this.subs.forEach (item => {
            item.update()
        })
    }
}

Dep.target = null

function pushTarget(watcher) {
   Dep.target = watcher
}

function popTarget() {
    Dep.target = null
}




//watcher
let hasWatcher = {}
let queue = []
let flushing = false
let waiting = false
function nextTick() {
    
}

function queueWatcher(watcher) {
    let id = watcher.uid
    if (!hasWatcher[id]) {
        hasWatcher[id] = true
        queue.push(watcher)
    }
    if (!waiting) {
        waiting = true
        setTimeout(queueFlushing(), 0)
    }
}

function queueFlushing() {
    flushing = true


    queue.sort((a,b) => a.uid - b.uid)
    for (let i = 0; i < queue.length; ++i) {
        queue[i].run()
    }


    waiting = flushing = false
}

let watcherId = 0

class Watcher {
    constructor(vm, fn) {
        this.vm = vm
        this.getter = fn

        this.uid = watcherId++

        this.deps = []
        this.depIds = new Set()
        this.newDeps = []
        this.newDepIds = new Set()

        this.sync = false

        this.value = this.get()
    }
    get() {
        pushTarget(this)
        this.getter.call(this.vm)
        popTarget()
    }
    addDep(dep) {
        let id = dep.depId
        if (!this.newDepIds.has(id)) {
            this.newDepIds.add(id)
            this.newDeps.push(dep)
            if (!this.depIds.has(id)) {
              dep.addSub(this)
            }
        }
    }
    update() {
        if (this.sync) {
            this.run()
        } else {
            queueWatcher(this)
        }
    }
    run() {
        this.get()
    }
}

//miniVue
function miniVue (options) {
    this.$el = options.el
    this.$data = options.data
    this.render = null

    this._init()
}

miniVue.prototype._init = function() {
    initData(this)
    
    if (this.$el) {
        this.$mount()
    }
}
function getData(path, data) {
    let res
    if (!/\./.test(path)) {
        res = data[path]
    } else {
        let _path = path.split('.')
        res = _path.reduce( (pre, cur) => {
            return pre = pre[cur]
        }, data)
    }

    return res
}
function generate(vnode, data) {
    let res = {}
    let type = vnode.type
    if (type === 1) {
        res = new VNode(vnode.tag, vnode.data, undefined, 1)
        vnode.children.forEach( item=>{
            res.appendChild(generate(item, data))
        })
    } else if (type === 3) {
        let _text = vnode.text.replace(/\{\{(.+?)\}\}/g, (_, c) => {
            return getData(c, data)
        })
        res = createTextVNode(_text)
    }
    return res
}
miniVue.prototype.createRender = function (){
 
    let el = this.$el && document.querySelector(this.$el)
    let _vnode = node2VNode(el)
    return function() {
        return generate(_vnode, this.$data)
    }
}

miniVue.prototype.$mount = function() {
    this.render = this.createRender();
   

    return this.mountComponent()

}

miniVue.prototype.mountComponent = function() {
    let updateComponent = () => {
        this._update(this.render())
    }
    new Watcher(this, updateComponent)
}

miniVue.prototype._update = function (vnode) {
  
    let _el = document.querySelector(this.$el)
    let _parent = _el.parentNode
  
    _parent.replaceChild(parseVNode(vnode), _el)
}

