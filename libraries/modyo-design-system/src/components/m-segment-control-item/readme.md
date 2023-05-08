# m-segment-control-item



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute     | Description        | Type                                                                | Default     |
| -------------------- | ------------- | ------------------ | ------------------------------------------------------------------- | ----------- |
| `isChecked`          | `is-checked`  | Is checked         | `boolean \| undefined`                                              | `undefined` |
| `isDisabled`         | `is-disabled` | Is disabled        | `boolean \| undefined`                                              | `undefined` |
| `label` _(required)_ | `label`       | Label of the radio | `string`                                                            | `undefined` |
| `mId` _(required)_   | `m-id`        | Id of the radio    | `string`                                                            | `undefined` |
| `name` _(required)_  | `name`        | Name of the radio  | `string`                                                            | `undefined` |
| `state`              | `state`       | State of the input | `"active" \| "disabled" \| "focus-visible" \| "hover" \| undefined` | `undefined` |
| `value` _(required)_ | `value`       | Value of the radio | `string`                                                            | `undefined` |


## Events

| Event     | Description                              | Type                  |
| --------- | ---------------------------------------- | --------------------- |
| `mChange` | Emitted when the input value has changed | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
