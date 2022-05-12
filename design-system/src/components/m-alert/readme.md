# m-alert



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type            | Default |
| --------- | --------- | ----------- | --------------- | ------- |
| `actions` | --        |             | `AlertAction[]` | `[]`    |
| `body`    | `body`    |             | `string`        | `''`    |
| `header`  | `header`  |             | `string`        | `''`    |


## Events

| Event            | Description | Type                       |
| ---------------- | ----------- | -------------------------- |
| `modActionClick` |             | `CustomEvent<AlertAction>` |


## Dependencies

### Depends on

- [m-text](../m-text)
- [m-button](../m-button)

### Graph
```mermaid
graph TD;
  m-alert --> m-text
  m-alert --> m-button
  style m-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
