<template>
  <div id="app">
    <DraggableContianer>
      <DraggablePopup
        show
        title="popup 1"
        :right="10"
        :bottom="10"
        :width="400"
      >
        <div style="height: 100vh"></div>
      </DraggablePopup>

      <DraggablePopup show title="popup 2" :left="10" :bottom="10" :width="400">
        <div style="height: 100vh"></div>
      </DraggablePopup>

      <DraggablePopup show title="popup 3" center :width="400">
        <div style="height: 100vh"></div>
      </DraggablePopup>
      <DraggablePopup show title="popup 4" centerX :bottom="10" :width="400">
        <div style="height: 100vh"></div>
      </DraggablePopup>

      <DraggablePopup show title="popup 5" centerY :left="10" :width="400">
        <div style="height: 100vh"></div>
      </DraggablePopup>

      <DraggableSidebar title="siderbar 1" show disabledExpand>
        <div style="height: 100vh"></div>
      </DraggableSidebar>
      <DraggableSidebar title="siderbar 2" show right>
        <div style="height: 100vh"></div>
      </DraggableSidebar>
      <DraggableSidebar title="siderbar 3" show right>
        <div style="height: 100vh"></div>
      </DraggableSidebar>
    </DraggableContianer>
  </div>
</template>

<script>
import {
  DraggableContianer,
  DraggablePopup,
  DraggableSidebar
} from "@components/draggable";
/* eslint-disable no-unused-vars */
export default {
  name: "App",
  components: { DraggableContianer, DraggablePopup, DraggableSidebar }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}

body,
html,
#app {
  height: 100%;
}
</style>
