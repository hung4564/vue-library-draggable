<template>
  <component
    v-if="c_containerId"
    v-bind:is="currentComponent"
    :containerId="c_containerId"
    v-bind="$attrs"
    class="draggable-popup"
    :show.sync="c_show"
    :zIndex="p_zIndex"
    v-on="$listeners"
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
import DraggablePopupDesktop from "./draggable-popup-desktop.vue";
import DraggableBottom from "../draggable-bottom.vue";
import { isMobile } from "../store/config";
export default {
  components: {
    DraggablePopupDesktop,
    DraggableBottom
  },
  props: {
    show: Boolean,
    title: {
      type: String,
      default: ""
    },
    containerId: String
  },
  inject: {
    $drag: {
      default: () => ({})
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
    c_containerId() {
      return this.containerId || this.$drag.id;
    },
    isMobile() {
      return isMobile(this.c_containerId);
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
      return this.isMobile ? "draggable-bottom" : "draggable-popup-desktop";
    }
  },
  methods: {}
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
