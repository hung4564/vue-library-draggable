((typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] = (typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] || []).push([[350],{

/***/ 3304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MapButton; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapButton.vue?vue&type=template&id=5b75036b&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('button', _vm._g({
    staticClass: "map-control-button",
    class: _vm.bindClass,
    style: _vm.bindStyle
  }, _vm.$listeners), [_c('span', {
    staticClass: "map-control-button__content"
  }, [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapButton.vue?vue&type=script&lang=js&
/* harmony default export */ var MapButtonvue_type_script_lang_js_ = ({
  props: {
    height: {
      default: 32
    },
    width: {
      default: 32
    },
    disabled: Boolean
  },
  computed: {
    bindStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    },

    bindClass() {
      return {
        "map-control-button--disabled": this.disabled
      };
    }

  }
});
;// CONCATENATED MODULE: ./src/components/MapButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapButtonvue_type_script_lang_js_ = (MapButtonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapButton.vue?vue&type=style&index=0&id=5b75036b&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MapButton.vue?vue&type=style&index=0&id=5b75036b&prod&lang=scss&scoped=true&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/MapButton.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_MapButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5b75036b",
  null
  
)

/* harmony default export */ var MapButton = (component.exports);

/***/ }),

/***/ 3958:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MapCard; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapCard.vue?vue&type=template&id=49508faf&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', _vm._g(_vm._b({
    staticClass: "card",
    style: _vm.cardStyle
  }, 'div', _vm.$attrs, false), _vm.$listeners), [_c('div', {
    staticClass: "card-container"
  }, [_vm._t("default")], 2), _vm._m(0)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "card-arrow"
  }, [_c('div', {
    staticClass: "card-arrow-top-left"
  }), _c('div', {
    staticClass: "card-arrow-top-right"
  }), _c('div', {
    staticClass: "card-arrow-bottom-left"
  }), _c('div', {
    staticClass: "card-arrow-bottom-right"
  })]);
}];

;// CONCATENATED MODULE: ./src/components/MapCard.vue?vue&type=template&id=49508faf&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapCard.vue?vue&type=script&lang=js&
/* harmony default export */ var MapCardvue_type_script_lang_js_ = ({
  props: {
    height: {},
    width: {}
  },
  data: () => ({}),
  computed: {
    cardStyle() {
      return {
        height: this.height,
        width: this.width
      };
    }

  },
  methods: {}
});
;// CONCATENATED MODULE: ./src/components/MapCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapCardvue_type_script_lang_js_ = (MapCardvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-64.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-64.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-64.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-64.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapCard.vue?vue&type=style&index=0&id=49508faf&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MapCard.vue?vue&type=style&index=0&id=49508faf&prod&scoped=true&lang=scss&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/MapCard.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_MapCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "49508faf",
  null
  
)

/* harmony default export */ var MapCard = (component.exports);

/***/ }),

/***/ 4765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ MapIcon; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapIcon.vue?vue&type=template&id=32bbe292&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.icon || _vm.$slots.default ? _c('i', {
    staticClass: "map-icon",
    class: _vm.icon || _vm.$slots.default[0].text
  }) : _vm._e();
};

var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapIcon.vue?vue&type=script&lang=js&
/* harmony default export */ var MapIconvue_type_script_lang_js_ = ({
  props: {
    icon: {
      type: String
    }
  },
  computed: {}
});
;// CONCATENATED MODULE: ./src/components/MapIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MapIconvue_type_script_lang_js_ = (MapIconvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/MapIcon.vue?vue&type=style&index=0&id=32bbe292&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/MapIcon.vue?vue&type=style&index=0&id=32bbe292&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/MapIcon.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_MapIconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "32bbe292",
  null
  
)

/* harmony default export */ var MapIcon = (component.exports);

/***/ }),

/***/ 8350:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ draggable_bottom; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-bottom.vue?vue&type=template&id=6a89ac08&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.p_show,
      expression: "p_show"
    }],
    staticClass: "popup-mobile-container",
    class: {
      'full-height': _vm.isFullScreen
    },
    style: {
      zIndex: _vm.p_zIndex,
      height: _vm.isFullScreen ? '100%' : '45%'
    }
  }, [_c('map-card', [_c('div', {
    staticClass: "draggable-bottom"
  }, [!_vm.disabledHeader ? [_c('div', {
    staticClass: "draggable-bottom-heading"
  }, [_c('div', {
    staticClass: "draggable-bottom-heading__title"
  }, [_vm._t("title")], 2), _c('div', {
    staticClass: "draggable-bottom-heading__content"
  }), _c('div', {
    staticClass: "map-spacer"
  }), _vm._t("extra-btn"), _vm.countPopup > 1 && !_vm.disabledOrder ? [_c('map-button', {
    attrs: {
      "disabled": _vm.isFirst,
      "icon": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return _vm.onToBack();
      }
    }
  }, [_c('map-icon', [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.to-back"]) + " ")])], 1)] : _vm._e(), _c('map-button', {
    attrs: {
      "icon": "",
      "small": ""
    },
    on: {
      "click": function ($event) {
        return _vm.onFullScreen();
      }
    }
  }, [_vm.isFullScreen ? _c('map-icon', [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.on-fullscreen"]) + " ")]) : _c('map-icon', [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.off-fullscreen"]) + " ")])], 1), !_vm.disabledClose ? _c('map-button', {
    attrs: {
      "icon": "",
      "small": ""
    },
    on: {
      "click": _vm.onClose
    }
  }, [_c('map-icon', [_vm._v(_vm._s(_vm.ICON_CONFIG["action.close"]))])], 1) : _vm._e()], 2), _c('hr', {
    staticClass: "map-divider"
  })] : _vm._e(), _c('div', {
    staticClass: "draggable-bottom-content"
  }, [_vm._t("default")], 2)], 2)])], 1);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/components/MapCard.vue + 6 modules
var MapCard = __webpack_require__(3958);
// EXTERNAL MODULE: ./src/components/MapIcon.vue + 5 modules
var MapIcon = __webpack_require__(4765);
// EXTERNAL MODULE: ./src/components/MapButton.vue + 5 modules
var MapButton = __webpack_require__(3304);
// EXTERNAL MODULE: ./src/components/draggable/draggable-popup.mixin.js + 1 modules
var draggable_popup_mixin = __webpack_require__(104);
// EXTERNAL MODULE: ./src/components/draggable/store/store-draggable.js
var store_draggable = __webpack_require__(3159);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6699);
// EXTERNAL MODULE: ./src/components/draggable/store/cache.js
var cache = __webpack_require__(4804);
// EXTERNAL MODULE: ./src/components/draggable/store/container.js
var container = __webpack_require__(9780);
;// CONCATENATED MODULE: ./src/components/draggable/store/mobile.js




const register = (id, mobile_id, {
  setIndex
}) => {
  if (!id || !mobile_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);

  if (!p_store.mobile_ids.includes(mobile_id)) {
    p_store.mobile_ids.push(mobile_id);
  }

  if (!cache/* ACTION_CACHE */.k[id]) {
    cache/* ACTION_CACHE */.k[id] = {};
  }

  cache/* ACTION_CACHE */.k[id][mobile_id] = {
    setIndex
  };
};

const unRegister = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  if (cache/* ACTION_CACHE */.k[id] && cache/* ACTION_CACHE */.k[id][mobile_id]) cache/* ACTION_CACHE */.k[id][mobile_id] = undefined;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  if (!p_store || !p_store.mobile_ids) return;
  p_store.mobile_ids = p_store.mobile_ids.filter(x => x != id);
  p_store.mobile_ids_show = p_store.mobile_ids_show.filter(x => x != id);
};

const registerShow = (id, mobile_id, show) => {
  if (!id || !mobile_id) return;
  setShowId(id, mobile_id, show);
  updateAllIndex(id);
};

const setShowId = (id, mobile_id, show) => {
  if (!id || !mobile_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let mobile_ids_show = p_store.mobile_ids_show;

  if (show && !mobile_ids_show.includes(mobile_id)) {
    mobile_ids_show.push(mobile_id);
  } else if (!show) {
    var index = mobile_ids_show.indexOf(mobile_id);

    if (index !== -1) {
      mobile_ids_show.splice(index, 1);
    }
  }

  p_store.mobile_ids_show = mobile_ids_show;
};

const updateAllIndex = id => {
  if (!id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  p_store.mobile_ids_show.forEach((mobile_id, index) => {
    if (cache/* ACTION_CACHE */.k[id][mobile_id]) cache/* ACTION_CACHE */.k[id][mobile_id].setIndex(index < 0 ? 1 : index + 2);
  });
};

const setToBack = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let index = p_store.mobile_ids_show.findIndex(x => x == mobile_id);

  if (index > 0) {
    p_store.mobile_ids_show.splice(index, 1);
    p_store.mobile_ids_show.unshift(mobile_id);
    updateAllIndex(id);
  }
};

const setToFront = (id, mobile_id) => {
  if (!id || !mobile_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let index = p_store.mobile_ids_show.findIndex(x => x == mobile_id);

  if (index < p_store.mobile_ids_show.length - 1) {
    p_store.mobile_ids_show.splice(index, 1);
    p_store.mobile_ids_show.push(mobile_id);
    updateAllIndex(id);
  }
};


// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(2107);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-bottom.vue?vue&type=script&lang=js&







/* harmony default export */ var draggable_bottomvue_type_script_lang_js_ = ({
  components: {
    MapIcon: MapIcon/* default */.Z,
    MapButton: MapButton/* default */.Z,
    MapCard: MapCard/* default */.Z
  },
  mixins: [draggable_popup_mixin/* default */.Z],
  props: {},
  data: () => ({
    isFullScreen: false,
    drag_id: `mobile-${(0,utils/* getUUIDv4 */.h)()}`
  }),

  mounted() {
    register(this.containerId, this.drag_id, {
      setIndex: this.onSetIndex.bind(this)
    });
    registerShow(this.containerId, this.drag_id, this.show);
  },

  beforeDestroy() {
    unRegister(this.containerId, this.drag_id);
  },

  watch: {},
  computed: {
    c_show: {
      get() {
        return this.p_show;
      },

      set(val) {
        this.p_show = val;
        this.$emit("update:show", val);
        if (this.containerId && this.drag_id) registerShow(this.containerId, this.drag_id, val);
      }

    },

    c_popupIds() {
      return (0,store_draggable/* getMobileIdsShow */.ch)(this.containerId);
    }

  },
  methods: {
    onFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },

    onToBack() {
      setToBack(this.containerId, this.drag_id);
    },

    onToFront() {
      setToFront(this.containerId, this.drag_id);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/draggable/draggable-bottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var draggable_draggable_bottomvue_type_script_lang_js_ = (draggable_bottomvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-bottom.vue?vue&type=style&index=0&id=6a89ac08&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/draggable/draggable-bottom.vue?vue&type=style&index=0&id=6a89ac08&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/draggable/draggable-bottom.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  draggable_draggable_bottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6a89ac08",
  null
  
)

/* harmony default export */ var draggable_bottom = (component.exports);

/***/ }),

/***/ 1223:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5112);
var create = __webpack_require__(30);
var defineProperty = (__webpack_require__(3070).f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ 490:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(5005);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ 30:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(9670);
var definePropertiesModule = __webpack_require__(6048);
var enumBugKeys = __webpack_require__(748);
var hiddenKeys = __webpack_require__(3501);
var html = __webpack_require__(490);
var documentCreateElement = __webpack_require__(317);
var sharedKey = __webpack_require__(6200);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ 6048:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(9781);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
var definePropertyModule = __webpack_require__(3070);
var anObject = __webpack_require__(9670);
var toIndexedObject = __webpack_require__(5656);
var objectKeys = __webpack_require__(1956);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ 1956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(6324);
var enumBugKeys = __webpack_require__(748);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ 6699:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(2109);
var $includes = (__webpack_require__(1318).includes);
var fails = __webpack_require__(7293);
var addToUnscopables = __webpack_require__(1223);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ 104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ draggable_popup_mixin; }
});

// EXTERNAL MODULE: ./src/components/draggable/store/store-draggable.js
var store_draggable = __webpack_require__(3159);
;// CONCATENATED MODULE: ./src/components/draggable/store/config.js
const ICON_CONFIG = {
  "action.close": "mdi mdi-close",
  "action.on-fullscreen": "mdi mdi-arrow-down-drop-circle-outline",
  "action.off-fullscreen": "mdi mdi-arrow-up-drop-circle-outline",
  "action.to-back": "mdi mdi-arrange-send-backward",
  "action.to-front": "mdi mdi-arrange-bring-forward",
  "action.expanded": "mdi mdi-arrow-up-drop-circle-outline",
  "action.close-expanded": "mdi mdi-arrow-down-drop-circle-outline",
  "action.drag": "mdi mdi-drag-variant",
  "action.sidebar-left-expanded": "mdi mdi-menu-left",
  "action.sidebar-left-close-expanded": "mdi mdi-menu-right",
  "action.sidebar-right-expanded": "mdi mdi-menu-right",
  "action.sidebar-right-close-expanded": "mdi mdi-menu-left"
};
;// CONCATENATED MODULE: ./src/components/draggable/draggable-popup.mixin.js


/* harmony default export */ var draggable_popup_mixin = ({
  props: {
    show: Boolean,
    containerId: {
      type: String,
      required: true
    },
    disabledClose: {
      type: Boolean,
      default: false
    },
    disabledOrder: Boolean,
    disabledHeader: Boolean,
    title: {
      type: String,
      default: ""
    }
  },
  inject: [],
  data: () => ({
    isLast: false,
    isFirst: false,
    p_zIndex: 0
  }),
  watch: {
    p_zIndex: {
      handler: "updateZIndex",
      immediate: true
    },
    c_popupIds: {
      handler: "updateZIndex"
    },
    show: {
      handler(val) {
        this.p_show = val;
      },

      immediate: true
    }
  },
  computed: {
    ICON_CONFIG() {
      return ICON_CONFIG;
    },

    c_show: {
      get() {
        return this.show;
      },

      set(val) {
        this.$emit("update:show", val);
      }

    },

    c_popupIds() {
      return [];
    },

    countPopup() {
      return this.c_popupIds.length;
    }

  },
  methods: {
    updateZIndex() {
      this.$nextTick(() => {
        this.isLast = (0,store_draggable/* checkIsLast */.fX)(this.containerId, this.drag_id, this.c_popupIds);
        this.isFirst = (0,store_draggable/* checkIsFirst */.op)(this.containerId, this.drag_id, this.c_popupIds);
      });
    },

    onSetIndex(index) {
      this.p_zIndex = index;
    },

    onClose() {
      this.c_show = false;
    }

  }
});

/***/ }),

/***/ 2107:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": function() { return /* binding */ getUUIDv4; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8675);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3462);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7380);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1118);
/* harmony import */ var core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_3__);




const getUUIDv4 = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
};

/***/ })

}]);
//# sourceMappingURL=draggable.umd.350.js.map