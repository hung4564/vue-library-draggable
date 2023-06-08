import { checkIsFirst, checkIsLast } from "./store/store-draggable";

import ArrangeBringForwardIcon from "vue-material-design-icons/ArrangeBringForward.vue";
import ArrangeSendBackwardIcon from "vue-material-design-icons/ArrangeSendBackward.vue";
import ArrowDownDropCircleOutlineIcon from "vue-material-design-icons/ArrowDownDropCircleOutline.vue";
import ArrowUpDropCircleOutlineIcon from "vue-material-design-icons/ArrowUpDropCircleOutline.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import DragVariantIcon from "vue-material-design-icons/DragVariant.vue";
import MenuLeftIcon from "vue-material-design-icons/MenuLeft.vue";
import MenuRightIcon from "vue-material-design-icons/MenuRight.vue";

export default {
  components: {
    CloseIcon,
    FullscreenIcon: ArrowDownDropCircleOutlineIcon,
    OffFullscreenIcon: ArrowUpDropCircleOutlineIcon,
    ToBackIcon: ArrangeSendBackwardIcon,
    ToFrontIcon: ArrangeBringForwardIcon,
    ExpandedIcon: ArrowUpDropCircleOutlineIcon,
    CloseExpandedIcon: ArrowDownDropCircleOutlineIcon,
    DragIcon: DragVariantIcon,
    SidebarLeftExpandedIcon: MenuLeftIcon,
    SidebarLeftCloseExpandedIcon: MenuRightIcon,
    SidebarRightExpandedIcon: MenuRightIcon,
    SidebarRightCloseExpandedIcon: MenuLeftIcon
  },
  props: {
    show: Boolean,
    containerId: { type: String, required: true },
    disabledClose: { type: Boolean, default: false },
    disabledOrder: Boolean,
    disabledHeader: Boolean,
    title: {
      type: String,
      default: ""
    },
    cardComponent: { type: String }
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
