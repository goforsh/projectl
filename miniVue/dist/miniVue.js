/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "D:\\vue\\miniVue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/miniVue.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./VNode.js":
/*!******************!*\
  !*** ./VNode.js ***!
  \******************/
/*! exports provided: VNode, createTextVNode, node2VNode, parseVNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VNode\", function() { return VNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTextVNode\", function() { return createTextVNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"node2VNode\", function() { return node2VNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseVNode\", function() { return parseVNode; });\nclass VNode{\r\n    constructor(tag, data, text, type) {\r\n        this.tag = tag && tag.toLowerCase()\r\n        this.data = data\r\n        this.text = text\r\n        this.type = type\r\n        this.children = []\r\n\r\n    }\r\n    appendChild(vnode){\r\n        this.children.push(vnode)\r\n    }\r\n}\r\n\r\nfunction createTextVNode(text) {\r\n    return new VNode(undefined, undefined, text, 3)\r\n}\r\n\r\nfunction node2VNode(node) {\r\n    let type = node.nodeType\r\n    let vnode = null\r\n    if (type === 1)  {\r\n        let tag = node.nodeName.toLowerCase()    \r\n        let _data = node.attributes       \r\n        let data = {}        \r\n        for (let i = 0; i < _data.length; ++i) {\r\n            data[_data[i].nodeName] = _data[i].nodeValue\r\n        }\r\n        vnode = new VNode(tag, data, undefined, 1)\r\n      \r\n        let children = node.childNodes\r\n        for (let i = 0; i < children.length; ++i) {\r\n            vnode.appendChild(node2VNode(children[i]))\r\n        }\r\n    } else if (type === 3) {\r\n        let text = node.nodeValue\r\n        vnode = createTextVNode(text)\r\n    }\r\n    return vnode\r\n}\r\n\r\nfunction parseVNode(VNode) {\r\n    let type = VNode.type\r\n    let node = null\r\n    if (type === 1) {\r\n        node = document.createElement(VNode.tag)\r\n        Object.keys(VNode.data).forEach( attr => {\r\n            node.setAttribute(attr, VNode.data[attr])\r\n        })\r\n\r\n        VNode.children.forEach( child => {\r\n            let childnode = parseVNode(child)\r\n            node.appendChild(childnode)\r\n        })\r\n    } else if (type === 3) {\r\n        node = document.createTextNode(VNode.text)\r\n    }\r\n\r\n    return node\r\n}\n\n//# sourceURL=webpack:///./VNode.js?");

/***/ }),

/***/ "./src/miniVue.js":
/*!************************!*\
  !*** ./src/miniVue.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _VNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VNode */ \"./VNode.js\");\n\r\n\r\n\r\nconsole.log('wocao')\r\n//数组变异\r\n\r\nlet ArrayProto = Array.prototype\r\nlet mutationProto = Object.create(ArrayProto)\r\nlet mutationMethods = [\r\n    'push',\r\n    'pop',\r\n    'shift',\r\n    'unshift',\r\n    'splice',\r\n    'sort',\r\n    'reverse'\r\n]\r\n\r\n\r\nmutationMethods.forEach(item=>{\r\n    let oringin = ArrayProto[item]\r\n    \r\n    Object.defineProperty(mutationProto, item, {\r\n        enumerable: false,\r\n        configurable: true,\r\n        writable: true,\r\n        value:  function (...args) {\r\n            let inserted = null\r\n            switch (item) {\r\n                case 'push':\r\n                case 'unshift': inserted = args ;break\r\n                case 'splice': inserted = args.slice(2); break\r\n            }\r\n            if (inserted) {\r\n                observe(inserted)\r\n            }\r\n            return oringin.apply(this, args)\r\n        } \r\n        \r\n    })\r\n\r\n})\r\n\r\nfunction initData(vm) {\r\n    let keys = Object.keys(vm.$data)\r\n    for (let i = 0; i < keys.length; ++i) {\r\n        proxy(vm, '$data', keys[i])\r\n    }\r\n    \r\n    observe(vm.$data)\r\n    \r\n}\r\n//代理\r\nconst sharedPropertyDefinition = {\r\n    enumerable: true,\r\n    configurable: true,\r\n    get: null,\r\n    set: null\r\n  }\r\nfunction proxy(target, sourceKey, key) {\r\n    sharedPropertyDefinition.get = function () {\r\n        return this[sourceKey][key]\r\n    }\r\n    sharedPropertyDefinition.set = function (newValue) {\r\n        this[sourceKey][key] = newValue\r\n    }\r\n    Object.defineProperty(target, key, sharedPropertyDefinition)\r\n}\r\n\r\n//响应式\r\nfunction observe(ob) {\r\n    if (Array.isArray(ob)) {\r\n        ob.__proto__ = mutationProto\r\n        for (let j = 0; j < ob.length; ++j) {\r\n            observe(ob[j])\r\n        }\r\n    } else {\r\n        if (typeof ob === 'object') {\r\n            let keys = Object.keys(ob)\r\n            for (let i = 0; i < keys.length; ++i) {            \r\n                defineReactive(ob, keys[i], ob[keys[i]])\r\n            }\r\n        }\r\n        \r\n    }\r\n}\r\n\r\nfunction defineReactive(data, key, value) {\r\n   \r\n    observe(value)\r\n    let dep = new Dep()\r\n \r\n    \r\n    Object.defineProperty(data, key, {\r\n        configurable: false,\r\n        enumerable: true,\r\n        get () {\r\n            console.log( `get ${key}`);\r\n            if (Dep.target) {\r\n                dep.depend()\r\n            }\r\n            \r\n            return value\r\n        },\r\n        set(newValue) {\r\n            if (newValue !== value) {\r\n                observe(newValue)\r\n                value = newValue\r\n                dep.notify()\r\n            }\r\n            \r\n            console.log( `set ${key}`);\r\n        }\r\n    })  \r\n}\r\n//dep\r\nclass Dep {\r\n    constructor() {\r\n        this.subs = []\r\n    }\r\n\r\n    depend() {\r\n        if (Dep.target) {\r\n            Dep.target.addDep(this)\r\n        }\r\n    }\r\n    addSub(watcher) {\r\n        this.subs.push(watcher)\r\n    }\r\n    notify() {\r\n        this.subs.forEach (item => {\r\n            item.update()\r\n        })\r\n    }\r\n}\r\n\r\nDep.target = null\r\n\r\nfunction pushTarget(watcher) {\r\n   Dep.target = watcher\r\n}\r\n\r\nfunction popTarget() {\r\n    Dep.target = null\r\n}\r\n\r\n\r\n\r\n\r\n//watcher\r\nclass Watcher {\r\n    constructor(vm, fn) {\r\n        this.vm = vm\r\n        this.getter = fn\r\n\r\n        this.value = this.get()\r\n    }\r\n    get() {\r\n        pushTarget(this)\r\n        this.getter()\r\n        popTarget()\r\n    }\r\n    addDep(dep) {\r\n        dep.addSub(this)\r\n    }\r\n    update() {\r\n        this.getter()\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n//miniVue\r\nwindow.miniVue = function (options) {\r\n   \r\n    this.$el = options.el\r\n    this.$data = options.data\r\n    this.render = null\r\n\r\n    this._init()\r\n}\r\n\r\nminiVue.prototype._init = function() {\r\n    initData(this)\r\n    \r\n    if (this.$el) {\r\n        this.$mount()\r\n    }\r\n}\r\nfunction getData(path, data) {\r\n    let res\r\n    if (!/\\./.test(path)) {\r\n        res = data[path]\r\n    } else {\r\n        let _path = path.split('.')\r\n        res = _path.reduce( (pre, cur) => {\r\n            return pre = pre[cur]\r\n        }, data)\r\n        // for (let i = 0; i < _path.length; ++i) {\r\n        //     res = res[_path[i]]\r\n        // }\r\n    }\r\n\r\n    return res\r\n}\r\nfunction generate(vnode, data) {\r\n    let res = {}\r\n    let type = vnode.type\r\n    if (type === 1) {\r\n        res = new _VNode__WEBPACK_IMPORTED_MODULE_0__[\"VNode\"](vnode.tag, vnode.data, undefined, 1)\r\n        vnode.children.forEach( item=>{\r\n            res.appendChild(generate(item, data))\r\n        })\r\n    } else if (type === 3) {\r\n        let _text = vnode.text.replace(/\\{\\{(.+?)\\}\\}/g, (_, c) => {\r\n            return getData(c, data)\r\n        })\r\n        res = Object(_VNode__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(_text)\r\n    }\r\n    return res\r\n}\r\nminiVue.prototype.createRender = function (){\r\n \r\n    let el = this.$el && document.querySelector(this.$el)\r\n    let _vnode = Object(_VNode__WEBPACK_IMPORTED_MODULE_0__[\"node2VNode\"])(el)\r\n    return function() {\r\n        return generate(_vnode, this.$data)\r\n    }\r\n}\r\n\r\nminiVue.prototype.$mount = function() {\r\n    this.render = this.createRender();\r\n   \r\n\r\n    return this.mountComponent()\r\n\r\n}\r\n\r\nminiVue.prototype.mountComponent = function() {\r\n    let updateComponent = () => {\r\n        this.update(this.render())\r\n    }\r\n    new Watcher(this, updateComponent)\r\n}\r\n\r\nminiVue.prototype.update = function (vnode) {\r\n  \r\n    let _el = document.querySelector(this.$el)\r\n    let _parent = _el.parentNode\r\n  \r\n    _parent.replaceChild(Object(_VNode__WEBPACK_IMPORTED_MODULE_0__[\"parseVNode\"])(vnode), _el)\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/miniVue.js?");

/***/ })

/******/ });