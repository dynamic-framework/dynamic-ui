# m-list-item



<!-- Auto Generated Below -->


## Properties

| Property                          | Attribute                              | Description                                      | Type                                                                                                                | Default     |
| --------------------------------- | -------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------- |
| `alternativeValue`                | `alternative-value`                    | Alternative value                                | `number \| string \| undefined`                                                                                     | `undefined` |
| `customActionClass`               | `custom-action-class`                  | Class for button custom action                   | `string \| undefined`                                                                                               | `undefined` |
| `customActionEndIcon`             | `custom-action-end-icon`               | End custom icon                                  | `string \| undefined`                                                                                               | `undefined` |
| `customActionEndIconFamilyClass`  | `custom-action-end-icon-family-class`  | Family class for custom action icon              | `string \| undefined`                                                                                               | `undefined` |
| `customActionEndIconFamilyPrefix` | `custom-action-end-icon-family-prefix` | Family prefix for custom action icon             | `string \| undefined`                                                                                               | `undefined` |
| `icon`                            | `icon`                                 | The icon to display                              | `string \| undefined`                                                                                               | `undefined` |
| `iconFamilyClass`                 | `icon-family-class`                    | Icon family class                                | `string \| undefined`                                                                                               | `undefined` |
| `iconFamilyPrefix`                | `icon-family-prefix`                   | Icon family class                                | `string \| undefined`                                                                                               | `undefined` |
| `image`                           | `image`                                | Url to replace the default icon image            | `null \| string`                                                                                                    | `null`      |
| `isLoading`                       | `is-loading`                           | Right custom icon clickable                      | `boolean \| undefined`                                                                                              | `undefined` |
| `isPill`                          | `is-pill`                              | Has borders rounded                              | `boolean`                                                                                                           | `false`     |
| `navegableProps`                  | --                                     | Props for the list item navegable variant        | `undefined \| { href: string; target?: string \| undefined; 'aria-current'?: string \| undefined; }`                | `undefined` |
| `selectableProps`                 | --                                     | Props for the list item selectable variant       | `undefined \| { id: string; name: string; value?: string \| number \| undefined; checked?: boolean \| undefined; }` | `undefined` |
| `subtext`                         | `subtext`                              | Subtext of the list.                             | `string`                                                                                                            | `''`        |
| `text`                            | `text`                                 | Main text of the list.                           | `string`                                                                                                            | `''`        |
| `theme`                           | `theme`                                | The theme to use.                                | `string \| undefined`                                                                                               | `undefined` |
| `themeValue`                      | `theme-value`                          | Theme to apply in the list value                 | `string \| undefined`                                                                                               | `'gray'`    |
| `value`                           | `value`                                | Value of the list                                | `number \| string \| undefined`                                                                                     | `undefined` |
| `variant`                         | `variant`                              | Variant for text item list or complete item list | `"default" \| "navegable" \| "selectable" \| undefined`                                                             | `undefined` |


## Events

| Event          | Description                                          | Type               |
| -------------- | ---------------------------------------------------- | ------------------ |
| `mCustomClick` | Emitted when the right custom icon has been clicked. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [m-icon](../m-icon)

### Graph
```mermaid
graph TD;
  m-list-item --> m-icon
  style m-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*