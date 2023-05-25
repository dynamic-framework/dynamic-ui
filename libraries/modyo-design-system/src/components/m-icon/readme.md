# m-icon



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute          | Description                                        | Type                  | Default                                                |
| ------------------- | ------------------ | -------------------------------------------------- | --------------------- | ------------------------------------------------------ |
| `backgroundColor`   | `background-color` | Icon background color in css color unit or var     | `string \| undefined` | `undefined`                                            |
| `circleSize`        | `circle-size`      | Circle size in css length unit                     | `string \| undefined` | ``calc(var(--${PREFIX_BS}m-icon-component-size) * 1)`` |
| `color`             | `color`            | Icon color in css color unit or var                | `string \| undefined` | `undefined`                                            |
| `familyClass`       | `family-class`     | Change the family class to use another icon suite  | `string`              | `state.iconFamilyClass`                                |
| `familyPrefix`      | `family-prefix`    | Change the family prefix to use another icon suite | `string`              | `state.iconFamilyPrefix`                               |
| `hasCircle`         | `has-circle`       | Add circle around the icon                         | `boolean`             | `false`                                                |
| `icon` _(required)_ | `icon`             | Name of icon to use (in kebab-case)                | `string`              | `undefined`                                            |
| `isLoading`         | `is-loading`       | Enable loading animation                           | `boolean`             | `false`                                                |
| `loadingDuration`   | `loading-duration` | Loading animation duration, in seconds             | `number`              | `1.8`                                                  |
| `size`              | `size`             | Size of the icon in css length unit                | `string \| undefined` | `'1.5rem'`                                             |
| `theme`             | `theme`            | Theme of the icon                                  | `string \| undefined` | `undefined`                                            |


## Dependencies

### Used by

 - [m-alert](../m-alert)
 - [m-button](../m-button)
 - [m-hint](../m-hint)
 - [m-input](../m-input)
 - [m-input-select](../m-input-select)
 - [m-list-item](../m-list-item)
 - [m-pin](../m-pin)
 - [m-quick-action-personal-info](../m-quick-action-personal-info)
 - [m-shortcut-toggle](../m-shortcut-toggle)

### Graph
```mermaid
graph TD;
  m-alert --> m-icon
  m-button --> m-icon
  m-hint --> m-icon
  m-input --> m-icon
  m-input-select --> m-icon
  m-list-item --> m-icon
  m-pin --> m-icon
  m-quick-action-personal-info --> m-icon
  m-shortcut-toggle --> m-icon
  style m-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
