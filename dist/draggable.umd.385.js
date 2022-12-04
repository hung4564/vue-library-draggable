"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] = (typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] || []).push([[385],{

/***/ 3385:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ draggable_sidebar; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-sidebar/draggable-sidebar.vue?vue&type=template&id=ab062630&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c(_vm.currentComponent, _vm._g(_vm._b({
    tag: "component",
    staticClass: "draggable-popup",
    attrs: {
      "containerId": _vm.containerId,
      "show": _vm.c_show,
      "zIndex": _vm.p_zIndex,
      "right": _vm.right,
      "width": _vm.width
    },
    on: {
      "update:show": function ($event) {
        _vm.c_show = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "extra-btn",
      fn: function () {
        return [_vm._t("extra-btn")];
      },
      proxy: true
    }, {
      key: "title",
      fn: function () {
        return [_vm._t("title", function () {
          return [_c('span', {
            attrs: {
              "title": _vm.title
            }
          }, [_vm._v(_vm._s(_vm.title) + " ")])];
        })];
      },
      proxy: true
    }], null, true)
  }, 'component', _vm.$attrs, false), _vm.$listeners), [_c('div', {
    staticClass: "fill-height"
  }, [_vm._t("default")], 2)]);
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/components/draggable/store/store-draggable.js
var store_draggable = __webpack_require__(3159);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-sidebar/draggable-sidebar.vue?vue&type=script&lang=js&

/* harmony default export */ var draggable_sidebarvue_type_script_lang_js_ = ({
  components: {
    DraggableSidebarDesktop: () => Promise.all(/* import() */[__webpack_require__.e(945), __webpack_require__.e(203)]).then(__webpack_require__.bind(__webpack_require__, 3203)),
    DraggableBottom: () => Promise.all(/* import() */[__webpack_require__.e(945), __webpack_require__.e(350)]).then(__webpack_require__.bind(__webpack_require__, 8350))
  },
  props: {
    show: Boolean,
    title: {
      type: String,
      default: ""
    },
    right: Boolean,
    width: {
      type: [String, Number],
      default: "auto"
    }
  },
  inject: {
    containerId: {
      default: ""
    }
  },
  data: () => ({
    p_zIndex: 0,
    p_show: false
  }),
  watch: {
    show: {
      handler(val) {
        this.c_show = val;
      },

      immediate: true
    }
  },
  computed: {
    isMobile() {
      return (0,store_draggable/* isMobile */.tq)(this.containerId);
    },

    c_show: {
      get() {
        return this.p_show;
      },

      set(val) {
        this.p_show = val;
        this.$emit("update:show", val);

        if (!val && this.$listeners["close"]) {
          this.$emit("close", val);
        }
      }

    },

    currentComponent() {
      return this.isMobile ? "draggable-bottom" : "draggable-sidebar-desktop";
    }

  },
  methods: {
    onSetIndex(index) {
      this.p_zIndex = index;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/draggable/draggable-sidebar/draggable-sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var draggable_sidebar_draggable_sidebarvue_type_script_lang_js_ = (draggable_sidebarvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-sidebar/draggable-sidebar.vue?vue&type=style&index=0&id=ab062630&prod&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/draggable/draggable-sidebar/draggable-sidebar.vue?vue&type=style&index=0&id=ab062630&prod&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/draggable/draggable-sidebar/draggable-sidebar.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  draggable_sidebar_draggable_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var draggable_sidebar = (component.exports);

/***/ }),

/***/ 1001:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 4804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": function() { return /* binding */ ACTION_CACHE; }
/* harmony export */ });
const ACTION_CACHE = {};

/***/ }),

/***/ 9780:
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
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4804);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7203);
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

/***/ 3159:
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
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9780);
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4804);



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

/***/ })

}]);
//# sourceMappingURL=draggable.umd.385.js.map