"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] = (typeof self !== 'undefined' ? self : this)["webpackChunkdraggable"] || []).push([[549],{

/***/ 3304:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ 6549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ draggable_popup_desktop; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-popup/draggable-popup-desktop.vue?vue&type=template&id=56e6b1ac&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.p_show && _vm.init_done ? _c('vue-drag-resize', _vm._b({
    attrs: {
      "dragHandle": ".drag",
      "h": _vm.p_height,
      "is-active": "",
      "minh": _vm.c_minHeight,
      "minw": _vm.c_minWidth,
      "parent-limitation": "",
      "parentH": _vm.c_parentHeight,
      "parentW": _vm.c_parentWidth,
      "sticks": _vm.sticks,
      "w": _vm.p_width,
      "x": _vm.p_x,
      "y": _vm.p_y,
      "z": _vm.p_zIndex,
      "isActive": _vm.isActive
    },
    on: {
      "resizing": _vm.onResize,
      "activated": function ($event) {
        return _vm.activateEv();
      },
      "deactivated": function ($event) {
        return _vm.deactivateEv();
      }
    }
  }, 'vue-drag-resize', _vm.$attrs, false), [_c(_vm.componentName, {
    tag: "component",
    attrs: {
      "width": _vm.p_width,
      "height": _vm.p_height
    }
  }, [_c('div', {
    staticClass: "draggable-popup-desktop"
  }, [!_vm.disabledHeader ? [_c('div', {
    staticClass: "draggable-popup-desktop-heading"
  }, [_c('div', {
    staticClass: "draggable-popup-desktop-heading__content"
  }, [_c('map-icon', {
    staticClass: "drag grabbing"
  }, [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.drag"]) + " ")]), _c('div', {
    staticClass: "draggable-popup-desktop-heading__title"
  }, [_vm._t("title")], 2), _c('div', {
    staticClass: "map-spacer"
  }), _vm._t("extra-btn"), _vm.countPopup > 1 && !_vm.disabledOrder ? [_c('map-button', {
    attrs: {
      "disabled": _vm.isFirst
    },
    on: {
      "click": function ($event) {
        return _vm.onToBack();
      }
    }
  }, [_c('map-icon', [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.to-back"]) + " ")])], 1), _c('map-button', {
    attrs: {
      "disabled": _vm.isLast
    },
    on: {
      "click": function ($event) {
        return _vm.onToFront();
      }
    }
  }, [_c('map-icon', [_vm._v(" " + _vm._s(_vm.ICON_CONFIG["action.to-front"]) + " ")])], 1)] : _vm._e(), _c('map-button', {
    on: {
      "click": _vm.toggleExpanded
    }
  }, [_c('map-icon', {
    attrs: {
      "icon": _vm.isExpanded ? _vm.ICON_CONFIG['action.expanded'] : _vm.ICON_CONFIG['action.close-expanded']
    }
  })], 1), !_vm.disabledClose ? _c('map-button', {
    on: {
      "click": _vm.onClose
    }
  }, [_c('map-icon', [_vm._v(_vm._s(_vm.ICON_CONFIG["action.close"]) + " ")])], 1) : _vm._e()], 2)]), _c('hr', {
    staticClass: "map-divider"
  })] : _vm._e(), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isExpanded,
      expression: "isExpanded"
    }],
    staticClass: "draggable-popup-desktop-content"
  }, [_vm._t("default")], 2)], 2)])], 1) : _vm._e();
};

var staticRenderFns = [];

// EXTERNAL MODULE: ./src/components/MapCard.vue + 6 modules
var MapCard = __webpack_require__(3958);
// EXTERNAL MODULE: ./src/components/MapIcon.vue + 5 modules
var MapIcon = __webpack_require__(4765);
// EXTERNAL MODULE: ./src/components/MapButton.vue + 5 modules
var MapButton = __webpack_require__(3304);
// EXTERNAL MODULE: ./node_modules/vue-drag-resize/dist/index.js
var dist = __webpack_require__(2794);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(7351);
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
;// CONCATENATED MODULE: ./src/components/draggable/store/popup.js




const register = (id, popup_id, {
  setIndex
}) => {
  if (!id || !popup_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);

  if (!p_store.popup_ids.includes(popup_id)) {
    p_store.popup_ids.push(popup_id);
  }

  if (!cache/* ACTION_CACHE */.k[id]) {
    cache/* ACTION_CACHE */.k[id] = {};
  }

  cache/* ACTION_CACHE */.k[id][popup_id] = {
    setIndex
  };
};

const unRegister = (id, popup_id) => {
  if (!id || !popup_id) return;
  if (cache/* ACTION_CACHE */.k[id] && cache/* ACTION_CACHE */.k[id][popup_id]) cache/* ACTION_CACHE */.k[id][popup_id] = undefined;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  if (!p_store || !p_store.popup_ids) return;
  p_store.popup_ids = p_store.popup_ids.filter(x => x != id);
  p_store.popup_ids_show = p_store.popup_ids_show.filter(x => x != id);
};

const registerShow = (id, popup_id, show) => {
  if (!id || !popup_id) return;
  setShowId(id, popup_id, show);
  updateAllIndex(id);
};

const setShowId = (id, popup_id, show) => {
  if (!id || !popup_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let popup_ids_show = p_store.popup_ids_show;

  if (show && !popup_ids_show.includes(popup_id)) {
    popup_ids_show.push(popup_id);
  } else if (!show) {
    var index = popup_ids_show.indexOf(popup_id);

    if (index !== -1) {
      popup_ids_show.splice(index, 1);
    }
  }

  p_store.popup_ids_show = popup_ids_show;
};

const updateAllIndex = id => {
  if (!id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  p_store.popup_ids_show.forEach((popup_id, index) => {
    if (cache/* ACTION_CACHE */.k[id][popup_id]) cache/* ACTION_CACHE */.k[id][popup_id].setIndex((index < 0 ? 1 : index) + p_store.sidebar_ids_show.length + 10);
  });
};

const setToBack = (id, popup_id) => {
  if (!id || !popup_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let index = p_store.popup_ids_show.findIndex(x => x == popup_id);

  if (index > 0) {
    var b = p_store.popup_ids_show[index];
    p_store.popup_ids_show[index] = p_store.popup_ids_show[index - 1];
    p_store.popup_ids_show[index - 1] = b;
    updateAllIndex(id);
  }
};

const setToFront = (id, popup_id) => {
  if (!id || !popup_id) return;
  let p_store = (0,container/* getStoreDraggable */.Ep)(id);
  let index = p_store.popup_ids_show.findIndex(x => x == popup_id);

  if (index < p_store.popup_ids_show.length - 1) {
    var b = p_store.popup_ids_show[index];
    p_store.popup_ids_show[index] = p_store.popup_ids_show[index + 1];
    p_store.popup_ids_show[index + 1] = b;
    updateAllIndex(id);
  }
};


// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(2107);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-popup/draggable-popup-desktop.vue?vue&type=script&lang=js&









/* harmony default export */ var draggable_popup_desktopvue_type_script_lang_js_ = ({
  mixins: [draggable_popup_mixin/* default */.Z],
  components: {
    MapCard: MapCard/* default */.Z,
    MapIcon: MapIcon/* default */.Z,
    VueDragResize: (dist_default()),
    MapButton: MapButton/* default */.Z
  },
  props: {
    minWidth: {
      type: Number,
      default: 200
    },
    minHeigth: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 200
    },
    sticks: {
      type: Array,
      default: () => ["bl", "br"]
    },
    top: {
      type: Number,
      default: undefined
    },
    left: {
      type: Number,
      default: undefined
    },
    bottom: {
      type: Number,
      default: undefined
    },
    right: {
      type: Number,
      default: undefined
    },
    centerX: Boolean,
    centerY: Boolean,
    center: Boolean
  },
  data: () => ({
    drag_id: `popup-${(0,utils/* getUUIDv4 */.h)()}`,
    p_show: false,
    p_width: 200,
    p_height: 200,
    p_x: 0,
    p_y: 0,
    isActive: true,
    init_done: false
  }),
  inject: {},

  mounted() {
    this.p_x = 0;
    this.p_y = 0;
    this.p_height = this.height;
    this.p_width = this.width;
    register(this.containerId, this.drag_id, {
      setIndex: this.onSetIndex.bind(this)
    });
    registerShow(this.containerId, this.drag_id, this.show);
    this.$nextTick(() => {
      if (this.show) this.$nextTick(() => {
        this.init();
      });
    });
  },

  beforeDestroy() {
    unRegister(this.containerId, this.drag_id);
  },

  watch: {
    height: {
      handler(val) {
        this.p_height = val;
      }

    },
    width: {
      handler(val) {
        this.p_width = val;
      }

    },
    show: {
      handler(val) {
        this.p_show = val;

        if (val) {
          this.$nextTick(() => {
            this.init();
          });
        }
      }

    }
  },
  computed: {
    componentName() {
      return this.cardComponent || (0,store_draggable/* getCardPopupComponent */.Du)(this.containerId) || "map-card";
    },

    c_popupIds() {
      return (0,store_draggable/* getPopupIdsShow */.hq)(this.containerId);
    },

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

    isExpanded() {
      return this.p_height > 50;
    },

    c_minWidth() {
      return this.minWidth;
    },

    c_minHeight() {
      return this.minHeigth;
    },

    c_parentWidth() {
      return (0,store_draggable/* getParentWidth */.oX)(this.containerId);
    },

    c_parentHeight() {
      return (0,store_draggable/* getParentHeight */.b6)(this.containerId);
    }

  },
  methods: {
    activateEv() {
      this.isActive = true;
    },

    deactivateEv() {
      this.isActive = false;
    },

    init() {
      this.init_done = false;
      if (!this.show) return;

      if (!(0,lodash.isNil)(this.left)) {
        this.p_x = this.left;
      }

      if (!(0,lodash.isNil)(this.top)) {
        this.p_y = this.top;
      }

      if (!(0,lodash.isNil)(this.right)) {
        this.p_x = this.c_parentWidth - this.right - this.p_width;
      }

      if (!(0,lodash.isNil)(this.bottom)) {
        this.p_y = this.c_parentHeight - this.bottom - this.p_height;
      }

      if (this.center || this.centerX) {
        this.p_x = (this.c_parentWidth - this.p_width) / 2;
      }

      if (this.center || this.centerY) {
        this.p_y = (this.c_parentHeight - this.p_height) / 2;
      }

      this.init_done = true;
    },

    toggleExpanded() {
      this.p_height = !this.isExpanded ? this.height : 50;
    },

    onResize(newRect) {
      this.p_width = newRect.width;
      this.p_height = newRect.height;
    },

    onToBack() {
      setToBack(this.containerId, this.drag_id);
    },

    onToFront() {
      setToFront(this.containerId, this.drag_id);
    }

  }
});
;// CONCATENATED MODULE: ./src/components/draggable/draggable-popup/draggable-popup-desktop.vue?vue&type=script&lang=js&
 /* harmony default export */ var draggable_popup_draggable_popup_desktopvue_type_script_lang_js_ = (draggable_popup_desktopvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/draggable/draggable-popup/draggable-popup-desktop.vue?vue&type=style&index=0&id=56e6b1ac&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/draggable/draggable-popup/draggable-popup-desktop.vue?vue&type=style&index=0&id=56e6b1ac&prod&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/draggable/draggable-popup/draggable-popup-desktop.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  draggable_popup_draggable_popup_desktopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "56e6b1ac",
  null
  
)

/* harmony default export */ var draggable_popup_desktop = (component.exports);

/***/ }),

/***/ 104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
    },
    cardComponent: {
      type: String
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
//# sourceMappingURL=draggable.umd.549.js.map