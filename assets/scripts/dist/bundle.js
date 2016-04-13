!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/assets/scripts/dist/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Choices=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(2),a=n(12),c=i(a),l=n(15),u=n(16),d=t.Choices=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?"[data-choice]":arguments[0],n=arguments[1];o(this,e);var i=document.createElement("fakeel"),s=n||{};if((0,u.isType)("String",t)){var a=document.querySelectorAll(t);if(a.length>1)for(var l=1;l<a.length;l++){var d=a[l];new e(d,n)}}var p={items:[],addItems:!0,removeItems:!0,editItems:!1,maxItems:!1,delimiter:",",allowDuplicates:!0,regexFilter:!1,debug:!1,placeholder:!1,prependValue:!1,appendValue:!1,selectAll:!0,classNames:{containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--items",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemOption:"choices__item--option",activeState:"is-active",disabledState:"is-disabled",hiddenState:"is-hidden",selectedState:"is-selected"},callbackOnInit:function(){},callbackOnRender:function(){},callbackOnRemoveItem:function(){},callbackOnAddItem:function(){}};this.initialised=!1,this.options=(0,u.extend)(p,s||{}),this.store=(0,r.createStore)(c.default),this.supports="querySelector"in document&&"addEventListener"in document&&"classList"in i,this.passedElement=(0,u.isType)("String",t)?document.querySelector(t):t,this.presetItems=[],this.options.items.length?this.presetItems=this.options.items:""!==this.passedElement.value&&(this.presetItems=this.passedElement.value.split(this.options.delimiter)),this.init=this.init.bind(this),this.render=this.render.bind(this),this.destroy=this.destroy.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onClick=this.onClick.bind(this),this.init()}return s(e,[{key:"isDisabled",value:function(){return!!this.input.disabled}},{key:"isEmpty",value:function(){return 0===this.store.getState().items.length}},{key:"onKeyDown",value:function(e){var t=this,n=this.getItems(),i=this.getItemsFilteredByActive(),o=e.ctrlKey||e.metaKey,s=8,r=13,a=65;if(e.target===this.input){if(o&&e.keyCode===a&&this.list&&this.list.children){var c=function(){t.options.removeItems&&!t.input.value&&t.options.selectAll&&t.input===document.activeElement&&t.selectAll(t.list.children)};c()}e.keyCode===r&&e.target.value&&!function(){var e=t.input.value,i=function(){var i=!0;if(t.options.maxItems&&t.options.maxItems<=t.list.children.length&&(i=!1),t.options.allowDuplicates===!1&&t.passedElement.value&&(i=!n.some(function(t){return t.value===e})),i&&t.options.addItems&&"text"===t.passedElement.type){var o=!0;t.options.regexFilter&&(o=t.regexFilter(e)),o&&(t.addItem(e),t.clearInput(t.passedElement))}};i()}()}if(e.keyCode===s&&!e.target.value){var l=function(){if(t.options.removeItems){var e=t.input===document.activeElement,o=i[i.length-1],s=n.some(function(e){return e.selected===!0});n&&o&&!t.options.editItems&&e&&t.options.removeItems&&t.selectItem(o),n&&t.options.removeItems&&t.options.editItems&&o&&!s&&e?(t.input.value=o.value,t.removeItem(o)):t.removeAllItems(!0)}};e.preventDefault(),l()}}},{key:"onClick",value:function(e){var t=this;this.dropdown&&this.toggleDropdown(),this.containerOuter.contains(e.target)?(this.input!==document.activeElement&&this.input.focus(),e.target.hasAttribute("data-choice-item")?!function(){var n=t.getItems(),i=e.target,o=function(e){t.options.removeItems&&!function(){var i=e.getAttribute("data-choice-id");n.forEach(function(e){e.id!==parseInt(i)||e.selected?t.deselectItem(e):t.selectItem(e)})}()};o(i)}():e.target.hasAttribute("data-choice-selectable")&&!function(){var n=t.getOptions(),i=e.target.getAttribute("data-choice-id"),o=n.find(function(e){return e.id===parseInt(i)});o.selected||(t.selectOption(i,!0),t.addItem(o.value))}()):(this.deselectAll(),this.dropdown&&this.dropdown.classList.contains(this.options.classNames.activeState)&&this.toggleDropdown())}},{key:"clearInput",value:function(){this.input.value&&(this.input.value="")}},{key:"regexFilter",value:function(e){var t=new RegExp(this.options.regexFilter,"i"),n=t.test(e);return n}},{key:"getItemById",value:function(e){if(!e)return void console.error("getItemById: An id must be a number");var t=this.getItems(),n=t.find(function(t){return t.id===parseInt(e)}),i=this.list.querySelector("[data-choice-id='"+n.id+"']");return i}},{key:"selectItem",value:function(e){if(e){var t=e.id;this.store.dispatch((0,l.selectItem)(t,!0))}}},{key:"deselectItem",value:function(e){if(e){var t=e.id;this.store.dispatch((0,l.selectItem)(t,!1))}}},{key:"selectAll",value:function(){var e=this,t=this.getItems();t.forEach(function(t){e.selectItem(t)})}},{key:"deselectAll",value:function(){var e=this,t=this.getItems();t.forEach(function(t){e.deselectItem(t)})}},{key:"selectOption",value:function(e,t){e&&this.store.dispatch((0,l.selectOption)(e,t))}},{key:"addItem",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.options.callbackOnAddItem:arguments[1];this.options.debug&&console.debug("Add item");var n=e;this.options.prependValue&&(n=this.options.prependValue+n.toString()),this.options.appendValue&&(n+=this.options.appendValue.toString());var i=this.store.getState().items.length+1;this.dropdown&&this.dropdown.classList.contains("is-active")&&this.toggleDropdown(),t&&((0,u.isType)("Function",t)?t(i,e):console.error("callbackOnAddItem: Callback is not a function")),this.store.dispatch((0,l.addItem)(n,i))}},{key:"removeItem",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?this.options.callbackOnRemoveItem:arguments[1];if(!e)return void console.error("removeItem: No item or value was passed to be removed");var n=e.id,i=e.value;t&&((0,u.isType)("Function",t)?t(i):console.error("callbackOnRemoveItem: Callback is not a function")),this.store.dispatch((0,l.removeItem)(n))}},{key:"removeAllItems",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?!1:arguments[0],n=this.getItems();n.forEach(function(n){t?n.selected&&n.active&&e.removeItem(n):n.active&&e.removeItem(n)})}},{key:"toggleDropdown",value:function(){if(!this.dropdown)return void console.error("No dropdown set");var e=this.dropdown.classList.contains("is-active");this.dropdown.classList[e?"remove":"add"]("is-active")}},{key:"addOptionToDropdown",value:function(e){var t=this.store.getState(),n=t.options.length+1;this.store.dispatch((0,l.addOption)(e,n))}},{key:"getItems",value:function(){var e=this.store.getState();return e.items}},{key:"getItemsFilteredByActive",value:function(){var e=this.getItems(),t=e.filter(function(e){return e.active===!0},[]);return t}},{key:"getItemsFilteredByValue",value:function(){var e=this.getItems(),t=e.reduce(function(e,t){return e.push(t.value),e},[]);return t}},{key:"getOptions",value:function(){var e=this.store.getState();return e.options}},{key:"renderTextInput",value:function(){var e=this,t=(0,u.strToEl)('<div class="'+this.options.classNames.containerOuter+'"></div>'),n=(0,u.strToEl)('<div class="'+this.options.classNames.containerInner+'"></div>');this.passedElement.classList.add(this.options.classNames.input,this.options.classNames.hiddenState),this.passedElement.tabIndex="-1",this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),(0,u.wrap)(this.passedElement,n),(0,u.wrap)(n,t);var i=(0,u.strToEl)('<ul class="'+this.options.classNames.list+" "+this.options.classNames.listItems+'"></ul>'),o=(0,u.strToEl)('<input type="text" class="'+this.options.classNames.input+" "+this.options.classNames.inputCloned+'">');this.passedElement.placeholder&&(o.placeholder=this.passedElement.placeholder),this.options.addItems||(o.disabled=!0,t.classList.add(this.options.classNames.disabledState)),t.appendChild(n),n.appendChild(i),n.appendChild(o),this.containerOuter=t,this.containerInner=n,this.input=o,this.list=i,this.presetItems.forEach(function(t){e.addItem(t)}),this.store.subscribe(this.render),this.render(),this.addEventListeners()}},{key:"renderMultipleSelectInput",value:function(){var e=this,t=(0,u.strToEl)('<div class="'+this.options.classNames.containerOuter+'"></div>'),n=(0,u.strToEl)('<div class="'+this.options.classNames.containerInner+'"></div>');this.passedElement.classList.add(this.options.classNames.input,this.options.classNames.hiddenState),this.passedElement.tabIndex="-1",this.passedElement.setAttribute("style","display:none;"),this.passedElement.setAttribute("aria-hidden","true"),(0,u.wrap)(this.passedElement,n),(0,u.wrap)(n,t);var i=(0,u.strToEl)('<ul class="'+this.options.classNames.list+" "+this.options.classNames.listItems+'"></ul>'),o=(0,u.strToEl)('<input type="text" class="'+this.options.classNames.input+" "+this.options.classNames.inputCloned+'">'),s=(0,u.strToEl)('<div class="'+this.options.classNames.list+" "+this.options.classNames.listDropdown+'"></div>');o.placeholder&&(o.placeholder=this.passedElement.placeholder),this.options.addItems||(o.disabled=!0),t.appendChild(n),t.appendChild(s),n.appendChild(i),n.appendChild(o),this.containerOuter=t,this.containerInner=n,this.input=o,this.list=i,this.dropdown=s,this.presetItems.forEach(function(t){e.addItem(t)});var r=Array.prototype.slice.call(this.passedElement.options);r.forEach(function(t){e.addOptionToDropdown(t.value)}),this.store.subscribe(this.render),this.render(),this.addEventListeners()}},{key:"addEventListeners",value:function(){document.addEventListener("keydown",this.onKeyDown),document.addEventListener("click",this.onClick)}},{key:"removeEventListeners",value:function(){document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("click",this.onClick)}},{key:"render",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?this.options.callbackOnRender:arguments[0],n=this.options.classNames,i=this.getItems(),o=this.getOptions();if(this.dropdown)if(this.dropdown.innerHTML="",o)o.forEach(function(t){var i=(0,u.strToEl)('<li class="'+n.item+" "+n.itemOption+" "+(t.selected?n.selectedState+" "+n.itemDisabled:n.itemSelectable)+'" data-choice-selectable data-choice-id="'+t.id+'" data-choice-value="'+t.value+'">'+t.value+"</li>");e.dropdown.appendChild(i)});else{var s=(0,u.strToEl)('<li class="'+n.item+'">No options to select</li>');this.dropdown.appendChild(s)}var r=this.getItemsFilteredByValue();this.passedElement.value=r.join(this.options.delimiter),this.list.innerHTML="",i.forEach(function(t){if(t.active){var i=(0,u.strToEl)('<li class="'+n.item+" "+(e.options.removeItems?n.itemSelectable:"")+" "+(t.selected?n.selectedState:"")+'" data-choice-item data-choice-id="'+t.id+'" data-choice-selected="'+t.selected+'">'+t.value+"</li>");e.list.appendChild(i)}}),t&&((0,u.isType)("Function",t)?t(i,o):console.error("callbackOnRender: Callback is not a function"))}},{key:"renderInput",value:function(e){switch(this.options.debug&&console.debug("Render"),e.type){case"text":this.renderTextInput();break;case"select-one":break;case"select-multiple":this.renderMultipleSelectInput();break;default:this.renderTextInput()}}},{key:"init",value:function(){var e=arguments.length<=0||void 0===arguments[0]?this.options.callbackOnInit:arguments[0];this.supports||console.error("init: Your browser doesn'nt support shit"),this.initialised=!0,this.renderInput(this.passedElement),e&&((0,u.isType)("Function",e)?e():console.error("callbackOnInit: Callback is not a function"))}},{key:"destroy",value:function(){this.options=null,this.passedElement=null,this.initialised=null}}]),e}();document.addEventListener("DOMContentLoaded",function(){var e=(new d("#choices-1",{delimiter:" ",editItems:!0,maxItems:5,callbackOnRender:function(e){console.log(e)}}),new d("#choices-2",{allowDuplicates:!1,editItems:!0}),new d("#choices-3",{allowDuplicates:!1,editItems:!0,regexFilter:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}),new d("#choices-4",{addItems:!1,removeItems:!1}),new d("#choices-5",{prependValue:"item-",appendValue:"-"+Date.now()}));e.removeAllItems();var t=new d("#choices-6",{items:["josh@joshuajohnson.co.uk","joe@bloggs.co.uk"]});new d("#choices-7",{callbackOnRender:function(e,t){console.log(e)}}),new d;t.addItem("josh2@joshuajohnson.co.uk",function(){console.log("Custom add item callback")}),t.removeItem("josh@joshuajohnson.co.uk"),console.log(t.getItemById(1))})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var o=n(3),s=i(o),r=n(7),a=i(r),c=n(9),l=i(c),u=n(10),d=i(u),p=n(11),h=i(p),f=n(8);i(f);t.createStore=s.default,t.combineReducers=a.default,t.bindActionCreators=l.default,t.applyMiddleware=d.default,t.compose=h.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){function i(){f===h&&(f=h.slice())}function s(){return p}function c(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return i(),f.push(e),function(){if(t){t=!1,i();var n=f.indexOf(e);f.splice(n,1)}}}function l(e){if(!(0,r.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,p=d(p,e)}finally{m=!1}for(var t=h=f,n=0;n<t.length;n++)t[n]();return e}function u(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");d=e,l({type:a.INIT})}if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var d=e,p=t,h=[],f=h,m=!1;return l({type:a.INIT}),{dispatch:l,subscribe:c,getState:s,replaceReducer:u}}t.__esModule=!0,t.ActionTypes=void 0,t.default=o;var s=n(4),r=i(s),a=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t,n){function i(e){if(!s(e)||u.call(e)!=r||o(e))return!1;var t=d(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==l}var o=n(5),s=n(6),r="[object Object]",a=Object.prototype,c=Function.prototype.toString,l=c.call(Object),u=a.toString,d=Object.getPrototypeOf;e.exports=i},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=t&&t.type,i=n&&'"'+n.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+i+". To ignore an action, you must explicitly return the previous state."}function s(e){Object.keys(e).forEach(function(t){var n=e[t],i=n(void 0,{type:a.ActionTypes.INIT});if("undefined"==typeof i)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function r(e){for(var t=Object.keys(e),n={},i=0;i<t.length;i++){var r=t[i];"function"==typeof e[r]&&(n[r]=e[r])}var a,c=Object.keys(n);try{s(n)}catch(l){a=l}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(a)throw a;for(var i=!1,s={},r=0;r<c.length;r++){var l=c[r],u=n[l],d=e[l],p=u(d,t);if("undefined"==typeof p){var h=o(l,t);throw new Error(h)}s[l]=p,i=i||p!==d}return i?s:e}}t.__esModule=!0,t.default=r;var a=n(3),c=n(4),l=(i(c),n(8));i(l)},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t.default=n},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),o={},s=0;s<i.length;s++){var r=i[s],a=e[r];"function"==typeof a&&(o[r]=n(a,t))}return o}t.__esModule=!0,t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,i,o){var r=e(n,i,o),c=r.dispatch,l=[],u={getState:r.getState,dispatch:function(e){return c(e)}};return l=t.map(function(e){return e(u)}),c=a.default.apply(void 0,l)(r.dispatch),s({},r,{dispatch:c})}}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.__esModule=!0,t.default=o;var r=n(11),a=i(r)},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],n=t.slice(0,-1);return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),s=n(13),r=i(s),a=n(14),c=i(a),l=(0,o.combineReducers)({items:r.default,options:c.default});t.default=l},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"ADD_ITEM":var i=[].concat(n(e),[{id:parseInt(t.id),value:t.value,active:!0,selected:!1}]);return i.map(function(e){return e.selected&&(e.selected=!1),e});case"REMOVE_ITEM":return e.map(function(e){return e.id===parseInt(t.id)&&(e.active=!1),e});case"SELECT_ITEM":return e.map(function(e){return e.id===parseInt(t.id)&&(e.selected=t.selected),e});default:return e}};t.default=i},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"ADD_OPTION":var i=[].concat(n(e),[{id:parseInt(t.id),value:t.value,disabled:!1,selected:!1}]);return i;case"SELECT_OPTION":return e.map(function(e){return e.id===parseInt(t.id)&&(e.selected=t.selected),e});default:return e}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addItem=function(e,t){return{type:"ADD_ITEM",value:e,id:t}},t.removeItem=function(e){return{type:"REMOVE_ITEM",id:e}},t.selectItem=function(e,t){return{type:"SELECT_ITEM",id:e,selected:t}},t.addOption=function(e,t){return{type:"ADD_OPTION",value:e,id:t}},t.selectOption=function(e,t){return{type:"SELECT_OPTION",id:e,selected:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(t.hasClass=function(e,t){return new RegExp(" "+t+" ").test(" "+e.className+" ")},t.capitalise=function(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})},t.isType=function(e,t){var n=Object.prototype.toString.call(t).slice(8,-1);return void 0!==t&&null!==t&&n===e}),i=(t.extend=function o(){for(var e={},t=!1,i=arguments.length,s=function(i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t&&n("Object",i[s])?e[s]=o(!0,e[s],i[s]):e[s]=i[s])},r=0;i>r;r++){var a=arguments[r];n("Object",a)?s(a):console.error("Custom options must be an object")}return e},t.whichTransitionEvent=function(){var e,t=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in n)if(void 0!==t.style[e])return n[e]},t.whichAnimationEvent=function(){var e,t=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in n)if(void 0!==t.style[e])return n[e]});t.getParentsUntil=function(e,t,n){for(var i=[];e&&e!==document;e=e.parentNode){if(t){var o=t.charAt(0);if("."===o&&e.classList.contains(t.substr(1)))break;if("#"===o&&e.id===t.substr(1))break;if("["===o&&e.hasAttribute(t.substr(1,t.length-1)))break;if(e.tagName.toLowerCase()===t)break}if(n){var s=n.charAt(0);"."===s&&e.classList.contains(n.substr(1))&&i.push(e),"#"===s&&e.id===n.substr(1)&&i.push(e),"["===s&&e.hasAttribute(n.substr(1,n.length-1))&&i.push(e),e.tagName.toLowerCase()===n&&i.push(e)}else i.push(e)}return 0===i.length?null:i},t.wrap=function(e,t){return t=t||document.createElement("div"),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t),t.appendChild(e)},t.getSiblings=function(e){for(var t=[],n=e.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t},t.findAncestor=function(e,t){for(;(e=e.parentElement)&&!e.classList.contains(t););return e},t.debounce=function(e,t,n){var i;return function(){var o=this,s=arguments,r=function(){i=null,n||e.apply(o,s)},a=n&&!i;clearTimeout(i),i=setTimeout(r,t),a&&e.apply(o,s)}},t.getElemDistance=function(e){var t=0;if(e.offsetParent)do t+=e.offsetTop,e=e.offsetParent;while(e);return t>=0?t:0},t.getElementOffset=function(e,t){var n=t;return n>1&&(n=1),n>0&&(n=0),Math.max(e.offsetHeight*n)},t.getScrollPosition=function(e){return"bottom"===e?Math.max((window.scrollY||window.pageYOffset)+(window.innerHeight||document.documentElement.clientHeight)):window.scrollY||window.pageYOffset},t.isInView=function(e,t,n){return this.getScrollPosition(t)>this.getElemDistance(e)+this.getElementOffset(e,n)},t.stripHTML=function(e){var t=document.createElement("DIV");return t.innerHTML=e,t.textContent||t.innerText||""},t.addAnimation=function(e,t){var n=i(),o=function s(){e.classList.remove(t),e.removeEventListener(n,s,!1)};e.classList.add(t),e.addEventListener(n,o,!1)},t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.strToEl=function(){var e=document.createElement("div");return function(t){var n;for(e.innerHTML=t,n=e.children[0];e.firstChild;)e.removeChild(e.firstChild);return n}}(),t.getWidthOfInput=function(){var e=document.createElement("span");e.className="tmp-element",e.innerHTML=inputEl.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),document.body.appendChild(e);var t=e.getBoundingClientRect().width;return document.body.removeChild(e),t}}]);