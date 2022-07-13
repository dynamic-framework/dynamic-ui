# m-button



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                  | Type                                                        | Default     |
| ----------- | ------------ | -------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `iconLeft`  | `icon-left`  | Icon left to display                         | `string \| undefined`                                       | `undefined` |
| `iconRight` | `icon-right` | Icon right to display                        | `string \| undefined`                                       | `undefined` |
| `isPill`    | `is-pill`    | Flag to switch to pill button border radius. | `boolean`                                                   | `false`     |
| `state`     | `state`      | Flag to set the button as active.            | `"active" \| "disabled" \| "focus" \| "hover" \| undefined` | `undefined` |
| `text`      | `text`       | The text to display.                         | `string`                                                    | `''`        |
| `theme`     | `theme`      | The theme to use.                            | `string`                                                    | `'primary'` |
| `type`      | `type`       | The type of the button.                      | `"button" \| "reset" \| "submit"`                           | `'button'`  |
| `value`     | `value`      | The value of the button.                     | `string`                                                    | `''`        |
| `variant`   | `variant`    | The variant to use.                          | `"ghost" \| "outline" \| "text" \| undefined`               | `undefined` |


## Events

| Event    | Description                               | Type               |
| -------- | ----------------------------------------- | ------------------ |
| `mClick` | Emitted when the button has been clicked. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [m-icon](../m-icon)

### Graph
```mermaid
graph TD;
  m-button --> m-icon
  style m-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
