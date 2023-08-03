<template>
  <div v-resize="onResize" class="draggable-container">
    <slot v-if="container_id && init_done" />
  </div>
</template>

<script>
import { getUUIDv4 } from "@/utils";
import resize from "vue-resize-directive";
import { init, remove } from "./store";
import { setCardComponent } from "./store/component";
import { setParentProps } from "./store/config";
export default {
  props: {
    cardComponent: { type: String, default: "map-card" },
    cardPopupComponent: { type: String },
    cardSidebarComponent: { type: String },
    cardBottomComponent: { type: String }
  },
  directives: {
    resize
  },
  components: {},
  data: () => ({
    container_id: `draggable-container-${getUUIDv4()}`,
    init_done: false
  }),
  watch: {
    cardComponent() {
      this.onUpdateCardComponent();
    },
    cardPopupComponent() {
      this.onUpdateCardComponent();
    },
    cardSidebarComponent() {
      this.onUpdateCardComponent();
    },
    cardBottomComponent() {
      this.onUpdateCardComponent();
    }
  },
  mounted() {
    init(this.container_id);
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
      this.init_done = true;
      this.$emit("init-done", { id: this.container_id });
    });
    this.onUpdateCardComponent();
  },
  beforeDestroy() {
    remove(this.container_id);
    window.removeEventListener("resize", this.onResize);
  },

  provide() {
    const $drag = {};
    Object.defineProperty($drag, "id", {
      enumerable: true,
      get: () => this.container_id
    });
    return {
      $drag
    };
  },
  methods: {
    onUpdateCardComponent() {
      setCardComponent(this.container_id, {
        cardComponent: this.cardComponent,
        cardPopupComponent: this.cardPopupComponent,
        cardSidebarComponent: this.cardBottomComponent,
        cardBottomComponent: this.cardBottomComponent
      });
    },
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
