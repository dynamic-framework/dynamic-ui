# m-button



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                  | Type                                                        | Default     |
| --------- | --------- | -------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `isPill`  | `is-pill` | Flag to switch to pill button border radius. | `boolean`                                                   | `false`     |
| `mType`   | `m-type`  | The type of the button.                      | `"button" \| "reset" \| "submit"`                           | `'button'`  |
| `mValue`  | `m-value` | The value of the button.                     | `string`                                                    | `''`        |
| `state`   | `state`   | Flag to set the button as active.            | `"active" \| "disabled" \| "focus" \| "hover" \| undefined` | `undefined` |
| `text`    | `text`    | The text to display.                         | `string`                                                    | `''`        |
| `theme`   | `theme`   | The theme to use.                            | `string`                                                    | `'primary'` |
| `variant` | `variant` | The variant to use.                          | `"ghost" \| "outline" \| "text" \| undefined`               | `undefined` |


## Events

| Event          | Description                               | Type               |
| -------------- | ----------------------------------------- | ------------------ |
| `mButtonClick` | Emitted when the button has been clicked. | `CustomEvent<any>` |


## Dependencies

### Used by

 - [m-alert-action](../m-alert-action)

### Graph
```mermaid
graph TD;
  m-alert-action --> m-button
  style m-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
