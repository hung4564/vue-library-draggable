import { checkIsFirst, checkIsLast } from "./store/store-draggable";

export default {
  props: {
    show: Boolean,
    container_id: { type: String, required: true },
    disableClose: { type: Boolean, default: false },
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
          this.container_id,
          this.drag_id,
          this.c_popupIds
        );
        this.isFirst = checkIsFirst(
          this.container_id,
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
