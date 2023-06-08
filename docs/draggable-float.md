# draggable-float

```js
<draggable-float show title="float 2" :left="10" :bottom="10" width="400">
        <div style="height: 100vh"></div>
</draggable-float>
```

## Props

| Prop | Description | Type | Required | Default Value |
| --- | --- | --- | --- | --- |
| `show` |  | `boolean` | `fasle` | -- |
| `title` |  | `string` | `fasle` | -- |
| `disabledClose` |  | `boolean` | `fasle` | -- |
| `disabledHeader` |  | `boolean` | `fasle` | -- |
| `disabledOrder` |  | `boolean` | `fasle` | -- |
| `containerId` |  | `boolean` | `true` | -- |
| `width` |  | `number` | `fasle` | 200 |
| `height` |  | `number` | `fasle` | 200 |
| `top` |  | `number` | `fasle` | -- |
| `left` |  | `number` | `fasle` | -- |
| `bottom` |  | `number` | `fasle` | -- |
| `right` |  | `number` | `fasle` | -- |
| `maxHeight` |  | `number` | `fasle` | 500 |
| `width` |  | `number` ,`string | `fasle` | 'auto' |
| `headerLocation` | `top` or `bottom` | `string | `fasle` | 'top' |

## Events

| Name          | Description |
| ------------- | ----------- |
| `close`       |             |
| `update:show` |             |

## Slots

| Name        | Description |
| ----------- | ----------- |
| `default`   |             |
| `title`     |             |
| `extra-btn` |             |
