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
  setCardComponent,
  setEmitForChangeSideBar,
  getStoreDraggable
} from "./store/store-draggable";
import { getFunctionActionCache } from "./store/cache";
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
    setDraggableContainer(this.container_id);
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
      this.init_done = true;
      this.$emit("init-done", { id: this.container_id });
    });
    if (this.$listeners["show-count:side-bar"])
      setEmitForChangeSideBar(this.container_id, () => {
        let store = getStoreDraggable(this.container_id);
        if (!store) {
          return;
        }
        let sidebar_ids_show = store.sidebar_ids_show;
        let left_count = 0,
          right_count = 0;
        sidebar_ids_show.forEach((sidebar_id) => {
          let action = getFunctionActionCache(this.container_id, sidebar_id);
          if (!action) return;
          let position = action.position;
          if (position === "right") {
            right_count++;
          } else if (position === "left") {
            left_count++;
          }
        });
        this.$emit("show-count:side-bar", {
          left_count,
          right_count
        });
      });
    this.onUpdateCardComponent();
  },
  beforeDestroy() {
    removeDraggableContainer(this.container_id);
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
