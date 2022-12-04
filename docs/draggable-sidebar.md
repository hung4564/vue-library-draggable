# draggable-sidebar

```js
<draggable-sidebar title="Title" show right>
  <div style="height: 100vh"></div>
</draggable-sidebar>
```

## Props

| Prop | Description | Type | Required | Default Value |
| --- | --- | --- | --- | --- |
| `show` |  | `boolean` | `fasle` | -- |
| `title` |  | `string` | `fasle` | -- |
| `right` |  | `boolean` | `fasle` | -- |
| `width` |  | `string`, `number` | `fasle` | 'auto' |
| `disabledClose` |  | `boolean` | `fasle` | -- |
| `containerId` |  | `boolean` | `true` | -- |

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
