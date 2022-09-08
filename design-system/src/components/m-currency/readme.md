# m-currency



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute          | Description                                                          | Type                              | Default                 |
| ------------------ | ------------------ | -------------------------------------------------------------------- | --------------------------------- | ----------------------- |
| `hint`             | `hint`             | Hint text for the m-currency                                         | `string \| undefined`             | `undefined`             |
| `hintIconEnd`      | `hint-icon-end`    | Icon end for the hint text                                           | `string \| undefined`             | `undefined`             |
| `hintIconStart`    | `hint-icon-start`  | Icon start for the hint text                                         | `string \| undefined`             | `undefined`             |
| `iconEnd`          | `icon-end`         | Icon for the end                                                     | `string \| undefined`             | `undefined`             |
| `iconLabel`        | `icon-label`       | Icon for the label text                                              | `string`                          | `'info-circle'`         |
| `iconMiddle`       | `icon-middle`      | Icon for the middle                                                  | `string \| undefined`             | `undefined`             |
| `iconStart`        | `icon-start`       | Icon for the left                                                    | `string \| undefined`             | `undefined`             |
| `label`            | `label`            | Label for the input                                                  | `string`                          | `''`                    |
| `labelExtractor`   | --                 | Callback to extract the label from the option                        | `(item: any) => string`           | `(item) => item?.label` |
| `layoutDirection`  | `layout-direction` | Change the layout direction to put the label on top or left of input | `"horizontal" \| "vertical"`      | `'vertical'`            |
| `mId` _(required)_ | `m-id`             | Id for the input                                                     | `string`                          | `undefined`             |
| `maxValue`         | `max-value`        | * The max value of the input                                         | `number \| undefined`             | `undefined`             |
| `minValue`         | `min-value`        | * The min value of the input                                         | `number \| undefined`             | `undefined`             |
| `placeholder`      | `placeholder`      | Placeholder for the input                                            | `string \| undefined`             | `''`                    |
| `selectOptions`    | --                 | Select options                                                       | `SelectProps[]`                   | `[]`                    |
| `theme`            | `theme`            | Theme for the m-currency                                             | `string`                          | `'primary'`             |
| `type`             | `type`             | * The type of the input                                              | `string`                          | `'number'`              |
| `value`            | `value`            | * The value of the input                                             | `number \| undefined`             | `undefined`             |
| `valueExtractor`   | --                 | Callback to extract the value from the option                        | `(item: any) => string \| number` | `(item) => item?.value` |
| `variant`          | `variant`          | Variant for the m-currency                                           | `"prime" \| undefined`            | `undefined`             |


## Events

| Event     | Description                    | Type                                                                           |
| --------- | ------------------------------ | ------------------------------------------------------------------------------ |
| `mChange` | Emitted when the inputs change | `CustomEvent<{ amount: number \| undefined; currency: string \| undefined; }>` |


## Dependencies

### Depends on

- [m-icon](../m-icon)
- [m-hint](../m-hint)

### Graph
```mermaid
graph TD;
  m-currency --> m-icon
  m-currency --> m-hint
  m-hint --> m-icon
  style m-currency fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
