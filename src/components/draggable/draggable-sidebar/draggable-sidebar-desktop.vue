<template>
  <div
    class="sidebar-container"
    v-show="c_show"
    :class="{
      expand: c_expand,
      'left-sidebar-container': left,
      'right-sidebar-container': right,
      'auto-sidebar-container': isAutoWidth
    }"
    :style="{
      zIndex: p_zIndex
    }"
  >
    <div class="sidebar-container--content">
      <component :is="componentName" width="100%" height="100%">
        <div class="draggable-sidebar">
          <template v-if="!disabledHeader">
            <div class="draggable-sidebar-heading">
              <div class="draggable-sidebar-heading__content">
                <div class="draggable-sidebar-heading__title">
                  <slot name="title">
                    {{ title }}
                  </slot>
                </div>
                <div class="map-spacer"></div>
                <slot name="extra-btn"></slot>

                <template v-if="countPopup > 1 && !disabledOrder">
                  <map-button :disabled="isFirst" @click="onToBack()">
                    <ToBackIcon :size="18" />
                  </map-button>
                </template>
                <map-button v-if="!disabledClose" @click="onClose">
                  <CloseIcon :size="18" />
                </map-button>
              </div>
            </div>
            <hr class="map-divider" />
          </template>
          <div class="draggable-sidebar-content">
            <slot></slot>
          </div>
        </div>
      </component>
    </div>
    <div v-if="c_show && !disabledExpand" class="complex-button-close">
      <button @click="onToggleExpand">
        <span v-if="left">
          <SidebarLeftExpandedIcon v-if="c_expand" />
          <SidebarLeftCloseExpandedIcon v-else />
        </span>
        <span v-else-if="right">
          <SidebarRightExpandedIcon v-if="c_expand" />
          <SidebarRightCloseExpandedIcon v-else />
        </span>
      </button>
    </div>
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
    right: Boolean,
    disabledExpand: Boolean
  },
  data: () => ({
    drag_id: `sidebar-${getUUIDv4()}`,
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
    left() {
      return !this.right;
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
.draggable-sidebar-heading :deep(.map-control-button) {
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

<style scoped lang="scss">
.sidebar-container {
  position: absolute;
  pointer-events: all;
  z-index: 900;
  top: 0;
  height: 100%;
  transition: max-width 1s;
}
.sidebar-container > .sidebar-container--content {
  display: none;
  height: 100%;
  width: 100%;
}
.sidebar-container.expand > .sidebar-container--content {
  display: block;
}
.sidebar-container {
  transition: all 0.2s ease;
}
.complex-buton-close {
  position: absolute;
  top: 50%;
}
.left-sidebar-container {
  left: 0;
}
.right-sidebar-container {
  right: 0;
}
.sidebar-container {
  width: 0;
}
.complex-button-close > button {
  height: 48px;
  width: 23px;
  display: flex;
  background-color: rgba(32, 43, 54, 0.9);
  color: white;
  align-items: center;
  border-radius: 0px;
  border: none;
}
.complex-button-close > button:focus:not(:focus-visible) {
  outline: 0;
}
</style>

<style scoped lang="scss">
@media only screen and (max-width: 600px) {
  .auto-sidebar-container {
    width: 100%;
  }
}
@media only screen and (min-width: 600px) and (max-width: 1264px) {
  .auto-sidebar-container.expand {
    width: 320px;
  }
  .auto-sidebar-container.expand.left-sidebar-container .complex-button-close {
    left: 320px !important;
  }
  .auto-sidebar-container.expand.right-sidebar-container .complex-button-close {
    right: 320px !important;
  }
}
@media only screen and (min-width: 1264px) {
  .auto-sidebar-container.expand {
    width: 400px;
  }
  .auto-sidebar-container.expand.left-sidebar-container .complex-button-close {
    left: 400px !important;
  }
  .auto-sidebar-container.expand.right-sidebar-container .complex-button-close {
    right: 400px !important;
  }
}
.sidebar-container {
  position: absolute;
  pointer-events: all;
  z-index: 900;
  top: 0;
  transition: max-width 1s;
}

.sidebar-container {
  transition: all 0.2s ease;
}
.complex-button-close {
  position: absolute;
  top: 50%;
  transition: max-width 1s;
  transition: all 0.2s ease;
}
.left-sidebar-container {
  left: 0;
}
.right-sidebar-container {
  right: 0;
}
.sidebar-container {
  width: 0;
}
</style>

<style lang="scss" scoped>
.sidebar-container {
  &.left-sidebar-container {
    .complex-button-close {
      left: 0;
      transform: translateY(-50%);
    }
  }
  &.right-sidebar-container {
    .complex-button-close {
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
