"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkvue_libary_draggable"] = (typeof self !== 'undefined' ? self : this)["webpackChunkvue_libary_draggable"] || []).push([[593],{

/***/ 2593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ draggable_contianer; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-contianer.vue?vue&type=template&id=704e1ac6&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    directives: [{
      name: "resize",
      rawName: "v-resize",
      value: _vm.onResize,
      expression: "onResize"
    }],
    staticClass: "draggable-container"
  }, [_vm.container_id && _vm.init_done ? _vm._t("default") : _vm._e()], 2);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(2325);
// EXTERNAL MODULE: ./node_modules/vue-resize-directive/dist/Vueresize.js
var Vueresize = __webpack_require__(6670);
var Vueresize_default = /*#__PURE__*/__webpack_require__.n(Vueresize);
// EXTERNAL MODULE: ./src/components/draggable/store/store-draggable.js
var store_draggable = __webpack_require__(8863);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-contianer.vue?vue&type=script&lang=js&



/* harmony default export */ var draggable_contianervue_type_script_lang_js_ = ({
  directives: {
    resize: (Vueresize_default())
  },
  components: {},
  data: () => ({
    container_id: `draggable-container-${(0,utils/* getUUIDv4 */.h)()}`,
    init_done: false
  }),

  mounted() {
    (0,store_draggable/* setDraggableContainer */.d6)(this.container_id);
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
      this.init_done = true;
    });
  },

  beforeDestroy() {
    (0,store_draggable/* removeDraggableContainer */.ki)(this.container_id);
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    store() {
      return (0,store_draggable/* getStoreDraggable */.Ep)(this.container_id);
    }

  },

  provide() {
    return {
      containerId: this.container_id
    };
  },

  methods: {
    onResize() {
      (0,store_draggable/* setParentProps */.UC)(this.container_id, {
        width: this.$el.clientWidth,
        height: this.$el.clientHeight
      });
    }

  }
});
;// CONCATENATED MODULE: ./src/components/draggable/draggable-contianer.vue?vue&type=script&lang=js&
 /* harmony default export */ var draggable_draggable_contianervue_type_script_lang_js_ = (draggable_contianervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-contianer.vue?vue&type=style&index=0&id=704e1ac6&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/draggable/draggable-contianer.vue?vue&type=style&index=0&id=704e1ac6&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/draggable/draggable-contianer.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  draggable_draggable_contianervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "704e1ac6",
  null
  
)

/* harmony default export */ var draggable_contianer = (component.exports);

/***/ }),

/***/ 8137:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ ACTION_CACHE; }
/* harmony export */ });
const ACTION_CACHE = {};

/***/ }),

/***/ 4839:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ep": function() { return /* binding */ getStoreDraggable; },
/* harmony export */   "UC": function() { return /* binding */ setParentProps; },
/* harmony export */   "b6": function() { return /* binding */ getParentHeight; },
/* harmony export */   "d6": function() { return /* binding */ setDraggableContainer; },
/* harmony export */   "ki": function() { return /* binding */ removeDraggableContainer; },
/* harmony export */   "oX": function() { return /* binding */ getParentWidth; },
/* harmony export */   "tq": function() { return /* binding */ isMobile; }
/* harmony export */ });
/* unused harmony exports getParentProps, setIsMobile */
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8137);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3797);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


const store = new (vue__WEBPACK_IMPORTED_MODULE_1___default().observable)({});
const setDraggableContainer = id => {
  _cache__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_CACHE */ .k[id] = {};
  vue__WEBPACK_IMPORTED_MODULE_1___default().set(store, id, {
    popup_ids: [],
    popup_ids_show: [],
    sidebar_ids: [],
    sidebar_ids_show: [],
    mobile_ids: [],
    mobile_ids_show: [],
    parent: {
      width: 0,
      height: 0
    },
    isMobile: false
  });
};
const removeDraggableContainer = id => {
  delete _cache__WEBPACK_IMPORTED_MODULE_0__/* .ACTION_CACHE */ .k[id];
  vue__WEBPACK_IMPORTED_MODULE_1___default()["delete"](store, id);
};
const getStoreDraggable = id => store[id] || {};
const getParentProps = id => getStoreDraggable(id).parent;
const getParentWidth = id => getStoreDraggable(id).parent.width;
const getParentHeight = id => getStoreDraggable(id).parent.height;
const setParentProps = (id, {
  width,
  height
}) => {
  if (!id) return;
  getStoreDraggable(id).parent.width = width;
  getStoreDraggable(id).parent.height = height;
  setIsMobile(id, width && width <= 600);
};
const isMobile = id => getStoreDraggable(id).isMobile;
const setIsMobile = (id, value) => {
  getStoreDraggable(id).isMobile = value;
};

/***/ }),

/***/ 8863:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ep": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.Ep; },
/* harmony export */   "UC": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.UC; },
/* harmony export */   "b6": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.b6; },
/* harmony export */   "ch": function() { return /* binding */ getMobileIdsShow; },
/* harmony export */   "d6": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.d6; },
/* harmony export */   "fX": function() { return /* binding */ checkIsLast; },
/* harmony export */   "ho": function() { return /* binding */ getSidebarIdsShow; },
/* harmony export */   "hq": function() { return /* binding */ getPopupIdsShow; },
/* harmony export */   "ki": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.ki; },
/* harmony export */   "oX": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.oX; },
/* harmony export */   "op": function() { return /* binding */ checkIsFirst; },
/* harmony export */   "tq": function() { return /* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.tq; }
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4839);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8137);



const checkIsLast = (id, popup_id, items) => {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[items.length - 1] == popup_id;
};
const checkIsFirst = (id, popup_id, items) => {
  if (!id || !popup_id) return;
  if (items.length < 1) return false;
  return items[0] == popup_id;
};
const getPopupIdsShow = id => {
  let p_store = (0,_container__WEBPACK_IMPORTED_MODULE_0__/* .getStoreDraggable */ .Ep)(id);

  if ((0,_container__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)(id)) {
    return p_store.mobie_ids;
  }

  return p_store.popup_ids_show;
};
const getSidebarIdsShow = (id, position) => {
  let p_store = (0,_container__WEBPACK_IMPORTED_MODULE_0__/* .getStoreDraggable */ .Ep)(id);

  if ((0,_container__WEBPACK_IMPORTED_MODULE_0__/* .isMobile */ .tq)(id)) {
    return p_store.mobie_ids;
  }

  return p_store.sidebar_ids_show.filter(sidebar_id => _cache__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_CACHE */ .k[id] && _cache__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_CACHE */ .k[id][sidebar_id] && _cache__WEBPACK_IMPORTED_MODULE_1__/* .ACTION_CACHE */ .k[id][sidebar_id]["position"] == position);
};
const getMobileIdsShow = id => {
  let p_store = (0,_container__WEBPACK_IMPORTED_MODULE_0__/* .getStoreDraggable */ .Ep)(id);
  return p_store.mobile_ids_show;
};

/***/ }),

/***/ 2325:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
//# sourceMappingURL=draggable.common.593.js.map