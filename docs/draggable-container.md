# draggable-container

```js
<draggable-container></draggable-container>
```

## Props

| Prop                   | Description | Type     | Required | Default Value |
| ---------------------- | ----------- | -------- | -------- | ------------- |
| `cardComponent`        |             | `string` | `fasle`  | `map-card`    |
| `cardPopupComponent`   |             | `string` | `fasle`  | --            |
| `cardSidebarComponent` |             | `string` | `fasle`  | --            |
| `cardBottomComponent`  |             | `string` | `fasle`  | --            |

## Events

| Name                | Description                            |
| ------------------- | -------------------------------------- |
| init-done           | {id:String}                            |
| show-count:side-bar | {left_count:Number,right_count:Number} |

## Slots

| Name      | Description |
| --------- | ----------- |
| `default` |             |
