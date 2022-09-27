# m-counter



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute          | Description                                                          | Type                         | Default      |
| -------------------- | ------------------ | -------------------------------------------------------------------- | ---------------------------- | ------------ |
| `disabled`           | `disabled`         | Is disabled counter                                                  | `boolean`                    | `false`      |
| `hint`               | `hint`             | Hint text                                                            | `string \| undefined`        | `undefined`  |
| `hintIconEnd`        | `hint-icon-end`    | Right icon of the hint text                                          | `string \| undefined`        | `undefined`  |
| `hintIconStart`      | `hint-icon-start`  | Left icon of the hint text                                           | `string \| undefined`        | `undefined`  |
| `label`              | `label`            | Label of the input                                                   | `string \| undefined`        | `undefined`  |
| `layoutDirection`    | `layout-direction` | Change the layout direction to put the label on top or left of input | `"horizontal" \| "vertical"` | `'vertical'` |
| `mId` _(required)_   | `m-id`             | Id of the input                                                      | `string`                     | `undefined`  |
| `max` _(required)_   | `max`              | Maximum value for the input                                          | `number`                     | `undefined`  |
| `min` _(required)_   | `min`              | Minimum value for the input                                          | `number`                     | `undefined`  |
| `theme`              | `theme`            | Theme of the counter                                                 | `string`                     | `'info'`     |
| `value` _(required)_ | `value`            | Value of the input                                                   | `number`                     | `undefined`  |
| `variant`            | `variant`          | Variant of the counter                                               | `"default" \| "prime"`       | `'default'`  |


## Events

| Event    | Description              | Type               |
| -------- | ------------------------ | ------------------ |
| `mClick` | Event for button pressed | `CustomEvent<any>` |
| `mInput` | Event for input change   | `CustomEvent<any>` |


## Dependencies

### Depends on

- [m-icon](../m-icon)
- [m-hint](../m-hint)

### Graph
```mermaid
graph TD;
  m-counter --> m-icon
  m-counter --> m-hint
  m-hint --> m-icon
  style m-counter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
