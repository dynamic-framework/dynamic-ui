# m-input



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                  | Description                    | Type                  | Default     |
| ----------------------- | -------------------------- | ------------------------------ | --------------------- | ----------- |
| `hint`                  | `hint`                     | Hint to display                | `string \| undefined` | `undefined` |
| `iconEnd`               | `icon-end`                 | Icon to display on input right | `string \| undefined` | `undefined` |
| `iconEndFamilyClass`    | `icon-end-family-class`    | Right icon family class        | `string \| undefined` | `undefined` |
| `iconEndFamilyPrefix`   | `icon-end-family-prefix`   | Right icon family class        | `string \| undefined` | `undefined` |
| `iconFamilyClass`       | `icon-family-class`        | Right icon family class        | `string \| undefined` | `undefined` |
| `iconFamilyPrefix`      | `icon-family-prefix`       | Right icon family class        | `string \| undefined` | `undefined` |
| `iconStart`             | `icon-start`               | Icon to display on input left  | `string \| undefined` | `undefined` |
| `iconStartFamilyClass`  | `icon-start-family-class`  | Left icon family class         | `string \| undefined` | `undefined` |
| `iconStartFamilyPrefix` | `icon-start-family-prefix` | Left icon family class         | `string \| undefined` | `undefined` |
| `isDisabled`            | `is-disabled`              | Flag to disable the input      | `boolean`             | `false`     |
| `isInvalid`             | `is-invalid`               | Add is-invalid class           | `boolean`             | `false`     |
| `isLoading`             | `is-loading`               | Flag for loading state.        | `boolean`             | `false`     |
| `isReadOnly`            | `is-read-only`             | Flag to read only the input    | `boolean`             | `false`     |
| `isValid`               | `is-valid`                 | Add is-valid class             | `boolean`             | `false`     |
| `label`                 | `label`                    | The label text                 | `string`              | `''`        |
| `labelIcon`             | `label-icon`               | Icon for the label text        | `string \| undefined` | `undefined` |
| `labelIconFamilyClass`  | `label-icon-family-class`  | Icon label family class        | `string \| undefined` | `undefined` |
| `labelIconFamilyPrefix` | `label-icon-family-prefix` | Icon label family class        | `string \| undefined` | `undefined` |
| `mId` _(required)_      | `m-id`                     | The id of the input            | `string`              | `undefined` |
| `name`                  | `name`                     | The name of the input          | `string \| undefined` | `undefined` |
| `placeholder`           | `placeholder`              | The placeholder text           | `string`              | `''`        |
| `type`                  | `type`                     | The type of the input          | `string`              | `'text'`    |
| `value`                 | `value`                    | The value of the input         | `number \| string`    | `''`        |


## Events

| Event             | Description                              | Type                            |
| ----------------- | ---------------------------------------- | ------------------------------- |
| `mBlur`           | Emitted when blur the input              | `CustomEvent<any>`              |
| `mChange`         | Emitted when the input value has changed | `CustomEvent<number \| string>` |
| `mFocus`          | Emitted when blur the input              | `CustomEvent<any>`              |
| `mIconEndClick`   | Emitted when click on the right icon     | `CustomEvent<MouseEvent>`       |
| `mIconStartClick` | Emitted when click on the left icon      | `CustomEvent<MouseEvent>`       |
| `mWheel`          | Emitted when blur the input              | `CustomEvent<any>`              |


## Methods

### `blurInput() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `focusInput() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [m-input-counter](../m-input-counter)
 - [m-input-currency-base](../m-input-currency-base)
 - [m-input-password](../m-input-password)
 - [m-input-search](../m-input-search)

### Depends on

- [m-icon](../m-icon)

### Graph
```mermaid
graph TD;
  m-input --> m-icon
  m-input-counter --> m-input
  m-input-currency-base --> m-input
  m-input-password --> m-input
  m-input-search --> m-input
  style m-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
