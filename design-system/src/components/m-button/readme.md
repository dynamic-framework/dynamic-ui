# m-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                              | Default    |
| ---------- | ---------- | ----------- | --------------------------------- | ---------- |
| `disabled` | `disabled` |             | `boolean`                         | `false`    |
| `text`     | `text`     |             | `string`                          | `''`       |
| `type`     | `type`     |             | `"button" \| "reset" \| "submit"` | `'button'` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `modButtonClick` |             | `CustomEvent<any>` |


## Shadow Parts

| Part       | Description |
| ---------- | ----------- |
| `"button"` |             |


## Dependencies

### Used by

 - [m-alert](../m-alert)
 - [m-app](../m-app)

### Graph
```mermaid
graph TD;
  m-alert --> m-button
  m-app --> m-button
  style m-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
