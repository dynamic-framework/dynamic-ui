# d-quick-action-switch



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute     | Description           | Type                   | Default     |
| ---------------------- | ------------- | --------------------- | ---------------------- | ----------- |
| `hint` _(required)_    | `hint`        | Hint to display       | `string`               | `undefined` |
| `innerId` _(required)_ | `inner-id`    | The id of the input   | `string`               | `undefined` |
| `isChecked`            | `is-checked`  | Is checked            | `boolean \| undefined` | `undefined` |
| `isDisabled`           | `is-disabled` | Is disabled           | `boolean \| undefined` | `undefined` |
| `label` _(required)_   | `label`       | The label text        | `string`               | `undefined` |
| `name`                 | `name`        | The name of the input | `string \| undefined`  | `undefined` |


## Events

| Event        | Description                               | Type                   |
| ------------ | ----------------------------------------- | ---------------------- |
| `eventClick` | Emitted when the select value has changed | `CustomEvent<boolean>` |


## Dependencies

### Depends on

- [d-input-switch](../d-input-switch)

### Graph
```mermaid
graph TD;
  d-quick-action-switch --> d-input-switch
  style d-quick-action-switch fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
