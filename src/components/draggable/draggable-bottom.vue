<template>
  <div
    v-show="p_show"
    class="popup-mobile-container"
    :class="{ 'full-height': isFullScreen }"
    :style="{ zIndex: p_zIndex, height: isFullScreen ? '100%' : '45%' }"
  >
    <map-card>
      <div class="draggable-bottom">
        <template v-if="!disabledHeader">
          <div class="draggable-bottom-heading">
            <div class="draggable-bottom-heading__title">
              <slot name="title"></slot>
            </div>
            <div class="draggable-bottom-heading__content"> </div>
            <div class="map-spacer"></div>
            <slot name="extra-btn"></slot>

            <template v-if="countPopup > 1 && !disabledOrder">
              <map-button
                :disabled="isFirst"
                icon
                small
                @click.prevent.stop="onToBack()"
              >
                <map-icon>
                  {{ ICON_CONFIG["action.to-back"] }}
                </map-icon>
              </map-button>
              <!-- <map-button
              :disabled="isLast"
              icon
              small
              @click.prevent.stop="onToFront()"
            >
              <map-icon>mdi-arrange-bring-forward</map-icon>
            </map-button> -->
            </template>
            <map-button icon small @click="onFullScreen()">
              <map-icon v-if="isFullScreen">
                {{ ICON_CONFIG["action.on-fullscreen"] }}
              </map-icon>
              <map-icon v-else>
                {{ ICON_CONFIG["action.off-fullscreen"] }}
              </map-icon>
            </map-button>
            <map-button v-if="!disabledClose" icon small @click="onClose">
              <map-icon>{{ ICON_CONFIG["action.close"] }}</map-icon>
            </map-button>
          </div>

          <hr class="map-divider" />
        </template>
        <div class="draggable-bottom-content">
          <slot></slot>
        </div>
      </div>
    </map-card>
  </div>
</template>

<script>
import MapCard from "../MapCard.vue";
import MapIcon from "../MapIcon.vue";
import MapButton from "../MapButton.vue";
import ModuleMixin from "./draggable-popup.mixin";
import { getMobileIdsShow } from "./store/store-draggable";
import {
  register,
  registerShow,
  unRegister,
  setToBack,
  setToFront
} from "./store/mobile";
import { getUUIDv4 } from "@/utils";
export default {
  components: { MapIcon, MapButton, MapCard },
  mixins: [ModuleMixin],
  props: {},
  data: () => ({
    isFullScreen: false,
    drag_id: `mobile-${getUUIDv4()}`
  }),
  mounted() {
    register(this.containerId, this.drag_id, {
      setIndex: this.onSetIndex.bind(this)
    });
    registerShow(this.containerId, this.drag_id, this.show);
  },
  beforeDestroy() {
    unRegister(this.containerId, this.drag_id);
  },
  watch: {},
  computed: {
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
    c_popupIds() {
      return getMobileIdsShow(this.containerId);
    }
  },
  methods: {
    onFullScreen() {
      this.isFullScreen = !this.isFullScreen;
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
.draggable-bottom .map-divider {
  flex-grow: 0;
}
.popup-mobile-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.draggable-bottom {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.draggable-bottom-heading {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  flex-grow: 0;
  max-width: 100%;
  padding: 0 8px;
}
.draggable-bottom-heading__content {
  contain: layout;
  display: block;
  flex: 1 1 auto;
}
.draggable-bottom-heading,
.draggable-bottom-heading__content {
  height: 48px;
}
.draggable-bottom-heading :deep(.map-control-button) {
  background-color: unset;
}
.draggable-bottom-heading__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.draggable-bottom-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
