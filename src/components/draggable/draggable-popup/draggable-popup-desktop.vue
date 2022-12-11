<template>
  <vue-drag-resize
    v-if="p_show && init_done"
    v-bind="$attrs"
    dragHandle=".drag"
    :h="p_height"
    is-active
    :minh="c_minHeight"
    :minw="c_minWidth"
    parent-limitation
    :parentH="c_parentHeight"
    :parentW="c_parentWidth"
    :sticks="sticks"
    :w="p_width"
    :x="p_x"
    :y="p_y"
    :z="p_zIndex"
    @resizing="onResize"
    :isActive="isActive"
    @activated="activateEv()"
    @deactivated="deactivateEv()"
  >
    <component :is="componentName" :width="p_width" :height="p_height">
      <div class="draggable-popup-desktop">
        <template v-if="!disabledHeader">
          <div class="draggable-popup-desktop-heading">
            <div class="draggable-popup-desktop-heading__content">
              <map-icon class="drag grabbing">
                {{ ICON_CONFIG["action.drag"] }}
              </map-icon>
              <div class="draggable-popup-desktop-heading__title">
                <slot name="title"></slot>
              </div>
              <div class="map-spacer"></div>
              <slot name="extra-btn"></slot>
              <template v-if="countPopup > 1 && !disabledOrder">
                <map-button :disabled="isFirst" @click="onToBack()">
                  <map-icon> {{ ICON_CONFIG["action.to-back"] }} </map-icon>
                </map-button>
                <map-button :disabled="isLast" @click="onToFront()">
                  <map-icon>
                    {{ ICON_CONFIG["action.to-front"] }}
                  </map-icon>
                </map-button>
              </template>

              <map-button @click="toggleExpanded">
                <map-icon
                  :icon="
                    isExpanded
                      ? ICON_CONFIG['action.expanded']
                      : ICON_CONFIG['action.close-expanded']
                  "
                >
                </map-icon>
              </map-button>
              <map-button v-if="!disabledClose" @click="onClose">
                <map-icon>{{ ICON_CONFIG["action.close"] }} </map-icon>
              </map-button>
            </div>
          </div>
          <hr class="map-divider" />
        </template>
        <div v-show="isExpanded" class="draggable-popup-desktop-content">
          <slot></slot>
        </div>
      </div>
    </component>
  </vue-drag-resize>
</template>

<script>
import MapCard from "../../MapCard.vue";
import MapIcon from "../../MapIcon.vue";
import MapButton from "../../MapButton.vue";
import VueDragResize from "vue-drag-resize";
import { isNil } from "lodash";
import ModuleMixin from "../draggable-popup.mixin";
import {
  getCardPopupComponent,
  getParentHeight,
  getParentWidth,
  getPopupIdsShow
} from "../store/store-draggable";
import {
  register,
  registerShow,
  unRegister,
  setToBack,
  setToFront
} from "../store/popup";
import { getUUIDv4 } from "@/utils";
export default {
  mixins: [ModuleMixin],
  components: { MapCard, MapIcon, VueDragResize, MapButton },
  props: {
    minWidth: { type: Number, default: 200 },
    minHeigth: { type: Number, default: 50 },
    width: { type: Number, default: 200 },
    height: { type: Number, default: 200 },
    sticks: { type: Array, default: () => ["bl", "br"] },
    top: { type: Number, default: undefined },
    left: { type: Number, default: undefined },
    bottom: { type: Number, default: undefined },
    right: { type: Number, default: undefined },
    centerX: Boolean,
    centerY: Boolean,
    center: Boolean
  },
  data: () => ({
    drag_id: `popup-${getUUIDv4()}`,
    p_show: false,
    p_width: 200,
    p_height: 200,
    p_x: 0,
    p_y: 0,
    isActive: true,
    init_done: false
  }),
  inject: {},

  mounted() {
    this.p_x = 0;
    this.p_y = 0;
    this.p_height = this.height;
    this.p_width = this.width;
    register(this.containerId, this.drag_id, {
      setIndex: this.onSetIndex.bind(this)
    });
    registerShow(this.containerId, this.drag_id, this.show);
    this.$nextTick(() => {
      if (this.show)
        this.$nextTick(() => {
          this.init();
        });
    });
  },
  beforeDestroy() {
    unRegister(this.containerId, this.drag_id);
  },
  watch: {
    height: {
      handler(val) {
        this.p_height = val;
      }
    },
    width: {
      handler(val) {
        this.p_width = val;
      }
    },
    show: {
      handler(val) {
        this.p_show = val;
        if (val) {
          this.$nextTick(() => {
            this.init();
          });
        }
      }
    }
  },
  computed: {
    componentName() {
      return (
        this.cardComponent ||
        getCardPopupComponent(this.containerId) ||
        "map-card"
      );
    },
    c_popupIds() {
      return getPopupIdsShow(this.containerId);
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
    },
    isExpanded() {
      return this.p_height > 50;
    },
    c_minWidth() {
      return this.minWidth;
    },
    c_minHeight() {
      return this.minHeigth;
    },
    c_parentWidth() {
      return getParentWidth(this.containerId);
    },
    c_parentHeight() {
      return getParentHeight(this.containerId);
    }
  },
  methods: {
    activateEv() {
      this.isActive = true;
    },
    deactivateEv() {
      this.isActive = false;
    },

    init() {
      this.init_done = false;
      if (!this.show) return;
      if (!isNil(this.left)) {
        this.p_x = this.left;
      }
      if (!isNil(this.top)) {
        this.p_y = this.top;
      }
      if (!isNil(this.right)) {
        this.p_x = this.c_parentWidth - this.right - this.p_width;
      }
      if (!isNil(this.bottom)) {
        this.p_y = this.c_parentHeight - this.bottom - this.p_height;
      }
      if (this.center || this.centerX) {
        this.p_x = (this.c_parentWidth - this.p_width) / 2;
      }
      if (this.center || this.centerY) {
        this.p_y = (this.c_parentHeight - this.p_height) / 2;
      }
      this.init_done = true;
    },
    toggleExpanded() {
      this.p_height = !this.isExpanded ? this.height : 50;
    },
    onResize(newRect) {
      this.p_width = newRect.width;
      this.p_height = newRect.height;
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

<style scoped>
.grabbing {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}
.draggable-popup-desktop .map-divider {
  flex-grow: 0;
}
.draggable-popup-desktop {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.draggable-popup-desktop-heading {
  flex-grow: 0;
  contain: layout;
  display: block;
  max-width: 100%;
}
.draggable-popup-desktop-heading__content {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  flex: 1 1 auto;
}
.draggable-popup-desktop-heading__content .drag {
  margin: 4px;
}
.draggable-popup-desktop-heading,
.draggable-popup-desktop-heading__content {
  height: 48px;
}
.draggable-popup-desktop-heading :deep(.map-control-button) {
  background-color: unset;
}
.draggable-popup-desktop-heading__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.draggable-popup-desktop-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
