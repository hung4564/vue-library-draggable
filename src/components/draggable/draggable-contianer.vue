<template>
  <div v-resize="onResize" class="draggable-container">
    <slot v-if="container_id && init_done" />
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
    container_id: `draggable-container-${getUUIDv4()}`,
    init_done: false
  }),
  mounted() {
    setDraggableContainer(this.container_id);
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
      this.init_done = true;
    });
  },
  beforeDestroy() {
    removeDraggableContainer(this.container_id);
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    store() {
      return getStoreDraggable(this.container_id);
    }
  },
  provide() {
    return {
      containerId: this.container_id
    };
  },
  methods: {
    onResize() {
      setParentProps(this.container_id, {
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
