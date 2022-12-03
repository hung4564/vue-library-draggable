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
  >
    <div class="sidebar-container--content">
      <slot />
    </div>
    <div v-if="c_show" class="complex-button-close">
      <button @click="onToggleExpand">
        <span v-if="left">
          <map-icon>{{
            c_expand ? "mdi-menu-left" : "mdi-menu-right"
          }}</map-icon>
        </span>
        <span v-else-if="right">
          <map-icon>{{
            !c_expand ? "mdi-menu-left" : "mdi-menu-right"
          }}</map-icon>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import MapIcon from "../../MapIcon.vue";
export default {
  components: { MapIcon },
  props: { show: Boolean, right: Boolean },
  data: () => ({ p_show: true, p_expand: true }),
  computed: {
    isAutoWidth() {
      return !this.width || this.width == "auto";
    },
    left() {
      return !this.right;
    },
    c_show: {
      get() {
        return this.p_show;
      },
      set(value) {
        this.p_show = value;
        this.$emit("update:show", value);
      }
    },
    c_expand: {
      get() {
        return this.p_expand;
      },
      set(value) {
        this.p_expand = value;
        this.$emit("update:expand", value);
      }
    }
  },
  watch: {
    show: {
      immediate: true,
      handler(value) {
        this.p_show = value;
      }
    }
  },
  methods: {
    onToggleExpand() {
      this.c_expand = !this.c_expand;
    }
  }
};
</script>

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
