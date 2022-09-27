# m-form-check



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute       | Description                                                                                            | Type                                                                             | Default     |
| ------------------- | --------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ----------- |
| `checked`           | `checked`       | Set checkbox or radio button marked as selected or not                                                 | `boolean`                                                                        | `false`     |
| `disabled`          | `disabled`      | Set input as disabled                                                                                  | `boolean`                                                                        | `false`     |
| `indeterminate`     | `indeterminate` | Set view of checkbox as indeterminated                                                                 | `boolean \| undefined`                                                           | `undefined` |
| `isButton`          | `is-button`     | Set checkbox as toggle button                                                                          | `boolean`                                                                        | `false`     |
| `label`             | `label`         | Text that will be displayed beside Check input or Radio input                                          | `string \| undefined`                                                            | `undefined` |
| `mId` _(required)_  | `m-id`          | Form control identifier                                                                                | `string`                                                                         | `undefined` |
| `name`              | `name`          | HTML Name to use within a form or JS reference                                                         | `string \| undefined`                                                            | `undefined` |
| `state`             | `state`         | State of checkbox or radio. The states could be: Success state Error state Warning state Loading state | `"error" \| "indeterminate" \| "loading" \| "success" \| "warning" \| undefined` | `undefined` |
| `type` _(required)_ | `type`          | Set whether is a checkbox input or a radio input                                                       | `"checkbox" \| "radio"`                                                          | `undefined` |
| `value`             | `value`         | A string representing the value of the checkbox or radio                                               | `string \| undefined`                                                            | `undefined` |


## Events

| Event     | Description                         | Type               |
| --------- | ----------------------------------- | ------------------ |
| `mChange` | Emitted when the switch has changed | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
