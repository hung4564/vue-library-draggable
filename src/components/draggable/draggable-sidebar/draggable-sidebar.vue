<template>
  <component
    v-bind:is="currentComponent"
    :container_id="drag_id"
    v-bind="$attrs"
    class="draggable-popup"
    :show.sync="c_show"
    :zIndex="p_zIndex"
    v-on="$listeners"
    :right="right"
    :width="width"
  >
    <template #extra-btn>
      <slot name="extra-btn" />
    </template>
    <template #title>
      <slot name="title">
        <span :title="title">{{ title }} </span>
      </slot>
    </template>
    <div class="fill-height"> <slot /> </div>
  </component>
</template>

<script>
import { isMobile } from "../store/store-draggable";
export default {
  components: {
    DraggableSidebarDesktop: () => import("./draggable-sidebar-desktop.vue"),
    DraggableMobile: () => import("../draggable-mobile.vue")
  },
  props: {
    show: Boolean,
    title: {
      type: String,
      default: ""
    },
    right: Boolean,
    width: { type: [String, Number], default: "auto" }
  },
  inject: {
    drag_id: { default: "" }
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
      return isMobile(this.drag_id);
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
      return this.isMobile ? "draggable-mobile" : "draggable-sidebar-desktop";
    }
  },
  methods: {
    onSetIndex(index) {
      this.p_zIndex = index;
    }
  }
};
</script>

<style>
.draggable-popup {
  pointer-events: all;
}
.draggable-popup .map-spacer {
  flex-grow: 1;
}
.draggable-popup.vdr::before {
  outline: none !important;
}
</style>
