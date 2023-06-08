<template>
  <div
    class="float-container"
    v-show="c_show"
    :class="{
      'auto-float-container': isAutoWidth
    }"
    :style="c_style"
  >
    <component :is="componentName">
      <div class="draggable-float">
        <template v-if="!disabledHeader && headerLocation === 'top'">
          <div class="draggable-float-heading">
            <div class="draggable-float-heading__content">
              <div class="draggable-float-heading__title">
                <slot name="title">
                  {{ title }}
                </slot>
              </div>
              <div class="map-spacer"></div>
              <slot name="extra-btn"></slot>
              <map-button @click="onToggleExpand">
                <ExpandedIcon v-if="c_expand" :size="16" />
                <CloseExpandedIcon v-else :size="16" />
              </map-button>
              <template v-if="countPopup > 1 && !disabledOrder">
                <map-button :disabled="isFirst" @click="onToBack()">
                  <ToBackIcon :size="16" />
                </map-button>
              </template>
              <map-button v-if="!disabledClose" @click="onClose">
                <CloseIcon :size="16" />
              </map-button>
            </div>
          </div>
          <hr class="map-divider" />
        </template>
        <div
          class="draggable-float-content"
          v-show="c_expand"
          :style="c_styleContent"
        >
          <slot></slot>
        </div>
        <template v-if="!disabledHeader && headerLocation === 'bottom'">
          <div class="draggable-float-heading">
            <div class="draggable-float-heading__content">
              <div class="draggable-float-heading__title">
                <slot name="title">
                  {{ title }}
                </slot>
              </div>
              <div class="map-spacer"></div>
              <slot name="extra-btn"></slot>
              <map-button @click="onToggleExpand">
                <ExpandedIcon v-if="c_expand" :size="16" />
                <CloseExpandedIcon v-else :size="16" />
              </map-button>
              <template v-if="countPopup > 1 && !disabledOrder">
                <map-button :disabled="isFirst" @click="onToBack()">
                  <ToBackIcon :size="16" />
                </map-button>
              </template>
              <map-button v-if="!disabledClose" @click="onClose">
                <CloseIcon :size="16" />
              </map-button>
            </div>
          </div>
          <hr class="map-divider" />
        </template>
      </div>
    </component>
  </div>
</template>

<script>
import MapButton from "../../MapButton.vue";
import MapCard from "../../MapCard.vue";
import MapIcon from "../../MapIcon.vue";
import ModuleMixin from "../draggable-popup.mixin";
import { getUUIDv4 } from "@/utils";
import {
  register,
  registerShow,
  unRegister,
  setToBack,
  setToFront
} from "../store/sidebar";
import {
  getCardSidebarComponent,
  getSidebarIdsShow
} from "../store/store-draggable";
export default {
  mixins: [ModuleMixin],
  components: { MapCard, MapIcon, MapButton },
  props: {
    show: Boolean,
    title: {
      type: String,
      default: ""
    },
    top: { type: Number, default: undefined },
    left: { type: Number, default: undefined },
    bottom: { type: Number, default: undefined },
    right: { type: Number, default: undefined },
    width: { type: [Number, String], default: "auto" },
    maxHeight: { type: Number, default: 500 },
    headerLocation: {
      type: String,
      default: "top",
      validator: function (value) {
        // The value must match one of these strings
        return ["top", "bottom"].includes(value);
      }
    }
  },
  data: () => ({
    drag_id: `float-${getUUIDv4()}`,
    p_show: false,
    p_expand: true
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
    c_styleContent() {
      let style = {};
      style.maxHeight = this.maxHeight + "px";
      return style;
    },
    c_style() {
      let style = {};
      style.zIndex = this.p_zIndex;
      if (this.top) {
        style.top = this.top + "px";
      }
      if (this.left) {
        style.left = this.left + "px";
      }
      if (this.right) {
        style.right = this.right + "px";
      }
      if (this.bottom) {
        style.bottom = this.bottom + "px";
      }
      if (this.width && this.width != "auto") {
        if (!isNaN(this.width)) style.width = this.width + "px";
        else {
          style.width = this.width;
        }
      }
      return style;
    },
    componentName() {
      return (
        this.cardComponent ||
        getCardSidebarComponent(this.containerId) ||
        "map-card"
      );
    },
    isAutoWidth() {
      return !this.width || this.width == "auto";
    },
    c_expand: {
      get() {
        return this.p_expand;
      },
      set(value) {
        this.p_expand = value;
        this.$emit("update:expand", value);
      }
    },
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
    },
    onToggleExpand() {
      this.c_expand = !this.c_expand;
    }
  }
};
</script>

<style scoped></style>

<style scoped>
.draggable-float .map-divider {
  flex-grow: 0;
}
.draggable-float .map-spacer {
  flex-grow: 1;
}
.draggable-float {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.draggable-float-heading {
  flex-grow: 0;
  contain: layout;
  display: block;
  max-width: 100%;
}
.draggable-float-heading__content {
  padding: 0 4px 0 8px;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  flex: 1 1 auto;
}
.draggable-float-heading__content .drag {
  margin: 4px;
}
.draggable-float-heading,
.draggable-float-heading__content {
  height: 48px;
}
.draggable-float-heading :deep(.map-control-button) {
  background-color: unset;
}
.draggable-float-heading__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.draggable-float-content {
  flex-grow: 1;
  overflow: auto;
}
</style>

<style scoped lang="scss">
.float-container {
  position: absolute;
  pointer-events: all;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.float-container > .float-container--content {
  display: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.float-container > .float-container--content {
  display: block;
}
.float-container {
  transition: all 0.2s ease;
}
</style>

<style scoped lang="scss">
@media only screen and (max-width: 600px) {
  .auto-float-container {
    width: 100%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1264px) {
  .auto-float-container {
    width: 320px;
  }
}
@media only screen and (min-width: 1264px) {
  .auto-float-container {
    width: 400px;
  }
}
</style>
