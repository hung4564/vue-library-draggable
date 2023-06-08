<h1 align="center">Vue libraryy draggable</h1>

# Vue libraryy draggable

## Install

```
npm i @hungpv4564/vue-library-draggable
```

```
yarn add @hungpv4564/vue-library-draggable
```

## Usage

```vue
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
} from "@hungpv4564/vue-library-draggable";
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
```

## Components

- [draggable-container](docs/draggable-container.md)
- [draggable-bottom](docs/draggable-bottom.md)
- [draggable-popup](docs/draggable-popup.md)
- [draggable-sidebar](docs/draggable-sidebar.md)
- [draggable-float](docs/draggable-float.md)

## Contributing

Any contribution to the code or any part of the documentation and any idea and/or suggestion are very welcome.

```bash
# serve with hot reload at localhost:8080
npm run serve

# distribution build
npm run build

```

## License

[MIT license](LICENSE)
