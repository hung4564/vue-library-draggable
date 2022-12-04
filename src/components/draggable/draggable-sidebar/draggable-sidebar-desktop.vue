<template>
  <side-bar
    :right="right"
    :show.sync="c_show"
    :style="{
      zIndex: p_zIndex
    }"
  >
    <map-card width="100%" height="100%">
      <div class="draggable-sidebar">
        <div class="draggable-sidebar-heading">
          <div class="draggable-sidebar-heading__content">
            <div class="draggable-sidebar-heading__title">
              <slot name="title">
                {{ title }}
              </slot>
            </div>
            <div class="map-spacer"></div>
            <slot name="extra-btn"></slot>

            <template v-if="countPopup > 1">
              <map-button :disabled="isFirst" icon small @click="onToBack()">
                <map-icon small>mdi-arrange-send-backward</map-icon>
              </map-button>
            </template>
            <map-button v-if="!disabledClose" icon small @click="onClose">
              <map-icon small>mdi-close</map-icon>
            </map-button>
          </div>
        </div>
        <hr class="map-divider" />
        <div class="draggable-sidebar-content">
          <slot></slot>
        </div>
      </div>
    </map-card>
  </side-bar>
</template>

<script>
import MapButton from "../../MapButton.vue";
import MapCard from "../../MapCard.vue";
import MapIcon from "../../MapIcon.vue";
import SideBar from "./map-sidebar.vue";
import ModuleMixin from "../draggable-popup.mixin";
import { getUUIDv4 } from "@/utils";
import {
  register,
  registerShow,
  unRegister,
  setToBack,
  setToFront
} from "../store/sidebar";
import { getSidebarIdsShow } from "../store/store-draggable";
export default {
  mixins: [ModuleMixin],
  components: { MapCard, MapIcon, SideBar, MapButton },
  props: {
    show: Boolean,
    title: {
      type: String,
      default: ""
    },
    right: Boolean,
    disabledClose: { type: Boolean, default: false }
  },
  data: () => ({
    drag_id: `sidebar-${getUUIDv4()}`,
    p_show: false,
    is_first: false,
    count: 0
  }),
  watch: {
    show: {
      handler(val) {
        this.c_show = val;
      },
      immediate: true
    }
  },
  mounted() {
    register(this.containerId, this.drag_id, {
      setIndex: this.onSetIndex.bind(this),
      position: this.position
    });
    registerShow(this.containerId, this.drag_id, this.show);
  },
  beforeDestroy() {
    unRegister(this.containerId, this.drag_id);
  },
  computed: {
    position() {
      return this.right ? "right" : "left";
    },
    c_popupIds() {
      if (this.right) return this.c_right_popupIds;
      return this.c_left_popupIds;
    },
    c_right_popupIds() {
      return getSidebarIdsShow(this.containerId, "right");
    },
    c_left_popupIds() {
      return getSidebarIdsShow(this.containerId, "left");
    },
    c_show: {
      get() {
        return this.p_show;
      },
      set(val) {
        this.p_show = val;
        this.$emit("update:show", val);
        if (this.containerId && this.drag_id)
          registerShow(this.containerId, this.drag_id, val);
      }
    }
  },
  methods: {
    onClose() {
      this.c_show = false;
    },
    onToBack() {
      setToBack(this.containerId, this.drag_id);
    },
    onToFront() {
      setToFront(this.containerId, this.drag_id);
    }
  }
};
</script>

<style scoped></style>

<style scoped>
.draggable-sidebar .map-divider {
  flex-grow: 0;
}
.draggable-sidebar .map-spacer {
  flex-grow: 1;
}
.draggable-sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.draggable-sidebar-heading {
  flex-grow: 0;
  contain: layout;
  display: block;
  max-width: 100%;
}
.draggable-sidebar-heading__content {
  padding: 0 4px 0 8px;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  flex: 1 1 auto;
}
.draggable-sidebar-heading__content .drag {
  margin: 4px;
}
.draggable-sidebar-heading,
.draggable-sidebar-heading__content {
  height: 48px;
}
.draggable-sidebar-heading >>> .map-control-button {
  background-color: unset;
}
.draggable-sidebar-heading__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.draggable-sidebar-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
