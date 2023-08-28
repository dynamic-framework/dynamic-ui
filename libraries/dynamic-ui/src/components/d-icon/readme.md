# d-icon



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute          | Description                                        | Type                  | Default                                              |
| ------------------- | ------------------ | -------------------------------------------------- | --------------------- | ---------------------------------------------------- |
| `backgroundColor`   | `background-color` | Icon background color in css color unit or var     | `string \| undefined` | `undefined`                                          |
| `circleSize`        | `circle-size`      | Circle size in css length unit                     | `string \| undefined` | ``calc(var(--${PREFIX_BS}icon-component-size) * 1)`` |
| `color`             | `color`            | Icon color in css color unit or var                | `string \| undefined` | `undefined`                                          |
| `familyClass`       | `family-class`     | Change the family class to use another icon suite  | `string \| undefined` | `state.iconFamilyClass`                              |
| `familyPrefix`      | `family-prefix`    | Change the family prefix to use another icon suite | `string \| undefined` | `state.iconFamilyPrefix`                             |
| `hasCircle`         | `has-circle`       | Add circle around the icon                         | `boolean`             | `false`                                              |
| `icon` _(required)_ | `icon`             | Name of icon to use (in kebab-case)                | `string`              | `undefined`                                          |
| `innerClass`        | `inner-class`      | Icon class                                         | `string \| undefined` | `undefined`                                          |
| `isLoading`         | `is-loading`       | Enable loading animation                           | `boolean`             | `false`                                              |
| `loadingDuration`   | `loading-duration` | Loading animation duration, in seconds             | `number`              | `1.8`                                                |
| `size`              | `size`             | Size of the icon in css length unit                | `string \| undefined` | `'1.5rem'`                                           |
| `theme`             | `theme`            | Theme of the icon                                  | `string \| undefined` | `undefined`                                          |


## Dependencies

### Used by

 - [d-alert](../d-alert)
 - [d-button](../d-button)
 - [d-chip](../d-chip)
 - [d-input](../d-input)
 - [d-input-pin](../d-input-pin)
 - [d-input-select](../d-input-select)
 - [d-modal](../d-modal)
 - [d-offcanvas](../d-offcanvas)
 - [d-quick-action-button](../d-quick-action-button)

### Graph
```mermaid
graph TD;
  d-alert --> d-icon
  d-button --> d-icon
  d-chip --> d-icon
  d-input --> d-icon
  d-input-pin --> d-icon
  d-input-select --> d-icon
  d-modal --> d-icon
  d-offcanvas --> d-icon
  d-quick-action-button --> d-icon
  style d-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*