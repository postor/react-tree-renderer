_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{BmbP:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),a=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&i(e,t,n);return a(e,t),e},c=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var l=u(n("q1tI")),p=c(n("Q1Z0")),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this,n=this.props,r=n.data,i=void 0===r?{}:r,a=n.path,u=n.onUpdateData,c=n.onTreeEvent,d=n.Template,f=n.i,s=n.onDelete,h=n.onUpdateParent,_=function(e){return t.updateData(e(t.props.data))}.bind(this),v=p.default({TreeNode:e,data:i,onUpdateData:u,onTreeEvent:c,Template:d,path:a,deleteChildAt:function(e){return t.updateData(o(o({},i),{children:(i.children||[]).filter((function(t,n){return e!==n}))}))},updateMyData:_});return l.default.createElement(d,{data:i,i:f,updateData:this.updateData.bind(this),treeEvent:this.treeEvent.bind(this),updateParent:h,children:v,deleteMe:s,addChildren:function(e){return t.updateData(o(o({},i),{children:(i.children||[]).concat(e)}))},isRoot:void 0===f})},e.prototype.updateData=function(t){var e=this.props,n=e.path;(0,e.onUpdateData)(n,t)},e.prototype.treeEvent=function(t,e){var n=this.props,r=n.path;(0,n.onTreeEvent)(t,e,r)},e}(l.Component);e.default=d},Q1Z0:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("q1tI"));e.default=function(t){var e=t.TreeNode,n=t.data,r=void 0===n?{}:n,i=t.onUpdateData,a=t.onTreeEvent,u=t.Template,c=t.path,l=void 0===c?"":c,p=t.deleteChildAt,d=t.updateMyData;if(!r.children)return[];var f=l?l+".":"";return r.children.map((function(t,n){return o.default.createElement(e,{data:t,onUpdateData:i,onTreeEvent:a,onDelete:function(){return p(n)},onUpdateParent:d,Template:u,path:f+"children."+n,i:n})}))}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("yc8A"),a=n.n(i),u=o.a.createElement,c={title:"root",children:[{title:"test1",children:[{title:"test2",children:[{title:"test3"},{title:"test4"}]}]}]},l=function(t){var e=t.data,n=void 0===e?{}:e,r=t.children,o=void 0===r?[]:r;return u("div",null,u("p",null,n.title),u("ul",null,o.map((function(t,e){return u("li",{key:e},t)}))))};e.default=function(t){return u(a.a,{Template:l,data:c})}},q79p:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.pathGet=e.pathMerge=void 0,e.pathMerge=function(t,e,n){if(!e)return n;var i=e.split("."),a=i.pop(),u=r({},t);return i.reduce((function(t,e){return!t[e]&&(t[e]={}),Array.isArray(t[e])?(t[e]=o(t[e]),t[e]):(t[e]=r({},t[e]),t[e])}),u)[a]=n,u},e.pathGet=function(t,e){return e?e.split(".").reduce((function(t,e){return null===t||"undefined"===typeof t[e]?null:t[e]}),t):t}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xqxS:function(t,e,n){"use strict";var r=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.hasOwnProperty.call(t,n)&&o(e,t,n);return i(e,t),e},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var c=a(n("q1tI")),l=u(n("BmbP")),p=n("q79p"),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.data,n=t.Template,r=t.onTreeEvent;return c.default.createElement(l.default,{data:e,onUpdateData:this.onUpdateData.bind(this),onTreeEvent:r,Template:n,onDelete:function(){console.log("trying to delete root node")},onUpdateParent:function(){console.log("trying to update parent of root")}})},e.prototype.onUpdateData=function(t,e){var n=this.props,r=n.data;(0,n.onUpdateData)(p.pathMerge(r,t,e))},e}(c.Component);e.default=d},yc8A:function(t,e,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),o=this&&this.__exportStar||function(t,e){for(var n in t)"default"===n||e.hasOwnProperty(n)||r(e,t,n)},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("xqxS"));o(n("q79p"),e),e.default=a.default}},[["vlRD",0,1]]]);