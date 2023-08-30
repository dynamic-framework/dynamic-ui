# d-quick-action-select



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute    | Description         | Type                   | Default     |
| ---------------------- | ------------ | ------------------- | ---------------------- | ----------- |
| `innerId` _(required)_ | `inner-id`   | The id of the input | `string`               | `undefined` |
| `isChecked`            | `is-checked` | Is selected         | `boolean \| undefined` | `undefined` |
| `line1` _(required)_   | `line-1`     | Line 1 text         | `string`               | `undefined` |
| `line2` _(required)_   | `line-2`     | Line 2 text         | `string`               | `undefined` |
| `line3` _(required)_   | `line-3`     | Line 3 text         | `string`               | `undefined` |
| `name` _(required)_    | `name`       | Name of the input   | `string`               | `undefined` |
| `value` _(required)_   | `value`      | Input value         | `string`               | `undefined` |


## Events

| Event         | Description                               | Type                  |
| ------------- | ----------------------------------------- | --------------------- |
| `eventChange` | Emitted when the select value has changed | `CustomEvent<string>` |


## Dependencies

### Depends on

- [d-input-check](../d-input-check)

### Graph
```mermaid
graph TD;
  d-quick-action-check --> d-input-check
  style d-quick-action-check fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
