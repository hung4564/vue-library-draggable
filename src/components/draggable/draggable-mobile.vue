<template>
  <div
    v-show="p_show"
    class="popup-mobile-container"
    :class="{ 'full-height': isFullScreen }"
    :style="{ zIndex: p_zIndex, height: isFullScreen ? '100%' : '45%' }"
  >
    <map-card>
      <div class="draggable-mobile">
        <div class="draggable-mobile-heading">
          <div class="draggable-mobile-heading__title">
            <slot name="title"></slot>
          </div>
          <div class="draggable-mobile-heading__content"> </div>
          <div class="map-spacer"></div>
          <slot name="extra-btn"></slot>

          <template v-if="countPopup > 1">
            <map-button
              :disabled="isFirst"
              icon
              small
              @click.prevent.stop="onToBack()"
            >
              <map-icon>mdi-arrange-send-backward</map-icon>
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
              mdi-arrow-down-drop-circle-outline
            </map-icon>
            <map-icon v-else> mdi-arrow-up-drop-circle-outline </map-icon>
          </map-button>
          <map-button v-if="!disableClose" icon small @click="onClose">
            <map-icon>mdi-close</map-icon>
          </map-button>
        </div>

        <hr class="map-divider" />
        <div class="draggable-mobile-content">
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
    register(this.container_id, this.drag_id, {
      setIndex: this.onSetIndex.bind(this)
    });
    registerShow(this.container_id, this.drag_id, this.show);
  },
  beforeDestroy() {
    unRegister(this.container_id, this.drag_id);
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
        if (this.container_id && this.drag_id)
          registerShow(this.container_id, this.drag_id, val);
      }
    },
    c_popupIds() {
      return getMobileIdsShow(this.container_id);
    }
  },
  methods: {
    onFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    onToBack() {
      setToBack(this.container_id, this.drag_id);
    },
    onToFront() {
      setToFront(this.container_id, this.drag_id);
    }
  }
};
</script>

<style scoped>
.draggable-mobile .map-divider {
  flex-grow: 0;
}
.popup-mobile-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
.draggable-mobile {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.draggable-mobile-heading {
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  flex-grow: 0;
  max-width: 100%;
  padding: 0 8px;
}
.draggable-mobile-heading__content {
  contain: layout;
  display: block;
  flex: 1 1 auto;
}
.draggable-mobile-heading,
.draggable-mobile-heading__content {
  height: 48px;
}
.draggable-mobile-heading >>> .map-control-button {
  background-color: unset;
}
.draggable-mobile-heading__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.draggable-mobile-content {
  flex-grow: 1;
  overflow: auto;
}
</style>
