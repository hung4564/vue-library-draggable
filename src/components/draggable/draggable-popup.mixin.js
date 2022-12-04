import { checkIsFirst, checkIsLast } from "./store/store-draggable";

import { ICON_CONFIG } from "./store/config";

export default {
  props: {
    show: Boolean,
    containerId: { type: String, required: true },
    disabledClose: { type: Boolean, default: false },
    disabledOrder: Boolean,
    disabledHeader: Boolean,
    title: {
      type: String,
      default: ""
    }
  },
  inject: [],
  data: () => ({ isLast: false, isFirst: false, p_zIndex: 0 }),
  watch: {
    p_zIndex: { handler: "updateZIndex", immediate: true },
    c_popupIds: { handler: "updateZIndex" },
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
        this.isLast = checkIsLast(
          this.containerId,
          this.drag_id,
          this.c_popupIds
        );
        this.isFirst = checkIsFirst(
          this.containerId,
          this.drag_id,
          this.c_popupIds
        );
      });
    },
    onSetIndex(index) {
      this.p_zIndex = index;
    },
    onClose() {
      this.c_show = false;
    }
  }
};
