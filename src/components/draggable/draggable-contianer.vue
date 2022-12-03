<template>
  <div v-resize="onResize" class="draggable-container">
    <slot v-if="drag_id && init_done" />
  </div>
</template>

<script>
import { getUUIDv4 } from "@/utils";
import resize from "vue-resize-directive";
import {
  removeDraggableContainer,
  setDraggableContainer,
  setParentProps,
  getStoreDraggable
} from "./store/store-draggable";
export default {
  directives: {
    resize
  },
  components: {},
  data: () => ({
    drag_id: `draggable-container-${getUUIDv4()}`,
    init_done: false
  }),
  mounted() {
    setDraggableContainer(this.drag_id);
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
      this.init_done = true;
    });
  },
  beforeDestroy() {
    removeDraggableContainer(this.drag_id);
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    store() {
      return getStoreDraggable(this.drag_id);
    }
  },
  provide() {
    return {
      drag_id: this.drag_id
    };
  },
  methods: {
    onResize() {
      setParentProps(this.drag_id, {
        width: this.$el.clientWidth,
        height: this.$el.clientHeight
      });
    }
  }
};
</script>

<style scoped>
.draggable-container {
  height: 100%;
  width: 100%;
}
</style>
