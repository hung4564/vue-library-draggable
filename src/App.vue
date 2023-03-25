<template>
  <div id="app">
    <DraggableContianer>
      <DraggablePopup show title="popup 1" :right="10" :top="10" :width="400">
        <div style="height: 100vh"></div>
      </DraggablePopup>

      <DraggableSidebar title="siderbar 1" show>
        <div style="height: 100vh"></div>
      </DraggableSidebar>

      <DraggableFloat
        show
        title="popup 1"
        :right="10"
        :bottom="10"
        :width="400"
        headerLocation="bottom"
      >
        <div style="height: 100vh"></div>
      </DraggableFloat>
    </DraggableContianer>
  </div>
</template>

<script>
import {
  DraggableContianer,
  DraggablePopup,
  DraggableSidebar,
  DraggableFloat
} from "@components/draggable";
/* eslint-disable no-unused-vars */
export default {
  name: "App",
  components: {
    DraggableContianer,
    DraggablePopup,
    DraggableSidebar,
    DraggableFloat
  }
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
a {
  text-decoration: none;
}
html {
  height: 100%;
  position: relative;
  overflow: hidden !important;
}
body {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
