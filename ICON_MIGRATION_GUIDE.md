# Icon Migration Guide: Bootstrap Icons → Lucide Icons

## Overview

We have migrated from Bootstrap Icons to [Lucide Icons](https://lucide.dev) for better React integration, smaller bundle size, and more consistent icon design. The `DIcon` component API remains the same, but icon names have changed.

## What Changed

### Before (Bootstrap Icons)
```tsx
<DIcon icon="house-door" />
<DIcon icon="person-fill" />
<DIcon icon="gear" />
```

### After (Lucide Icons)
```tsx
<DIcon icon="Home" />
<DIcon icon="User" />
<DIcon icon="Settings" />
```

## Key Differences

1. **Icon names are now PascalCase** instead of kebab-case
2. **No more `-fill` suffix** - Lucide uses `strokeWidth` prop instead
3. **Material Design icons still supported** via `materialStyle` prop

## Common Icon Name Mappings

| Bootstrap Icons | Lucide Icons | Notes |
|----------------|--------------|-------|
| `house`, `house-door` | `Home` | |
| `person` | `User` | |
| `people` | `Users` | |
| `gear` | `Settings` | |
| `search` | `Search` | |
| `envelope` | `Mail` | |
| `bell` | `Bell` | |
| `calendar` | `Calendar` | |
| `clock` | `Clock` | |
| `heart`, `heart-fill` | `Heart` | Use `fill` prop for filled version |
| `star`, `star-fill` | `Star` | Use `fill` prop for filled version |
| `check` | `Check` | |
| `check-circle` | `CheckCircle` | |
| `check-circle-fill` | `CircleCheck` | |
| `x` | `X` | |
| `x-circle` | `XCircle` | |
| `x-circle-fill` | `CircleX` | |
| `arrow-left` | `ArrowLeft` | |
| `arrow-right` | `ArrowRight` | |
| `chevron-left` | `ChevronLeft` | |
| `chevron-right` | `ChevronRight` | |
| `chevron-up` | `ChevronUp` | |
| `chevron-down` | `ChevronDown` | |
| `plus` | `Plus` | |
| `plus-circle` | `PlusCircle` | |
| `dash` | `Minus` | |
| `trash` | `Trash` | |
| `trash3` | `Trash2` | |
| `pencil` | `Pencil` | |
| `eye` | `Eye` | |
| `eye-slash` | `EyeOff` | |
| `download` | `Download` | |
| `upload` | `Upload` | |
| `cloud` | `Cloud` | |
| `folder` | `Folder` | |
| `file` | `File` | |
| `image` | `Image` | |
| `camera` | `Camera` | |
| `link` | `Link` | |
| `share` | `Share2` | |
| `three-dots` | `MoreHorizontal` | |
| `three-dots-vertical` | `MoreVertical` | |
| `list` | `List` | |
| `grid` | `Grid3x3` | |
| `menu` | `Menu` | |
| `filter` | `Filter` | |
| `info-circle`, `info-circle-fill` | `Info` | |
| `exclamation-triangle` | `AlertTriangle` | |
| `exclamation-circle` | `AlertCircle` | |
| `question-circle` | `HelpCircle` | |
| `lock` | `Lock` | |
| `unlock` | `Unlock` | |
| `shield` | `Shield` | |
| `globe` | `Globe` | |
| `map` | `Map` | |
| `bookmark` | `Bookmark` | |
| `bookmarks` | `Bookmarks` | |
| `tag` | `Tag` | |
| `fire` | `Flame` | |
| `lightning` | `Zap` | |
| `sun` | `Sun` | |
| `moon` | `Moon` | |

## New Props Available

### `strokeWidth`
Control the thickness of icon strokes (default: 2)

```tsx
<DIcon icon="Heart" strokeWidth={1.5} />
<DIcon icon="Settings" strokeWidth={3} />
```

## Material Design Icons (Backward Compatibility)

If you need to use Material Design icons, set `materialStyle={true}`:

```tsx
<DIcon icon="home" materialStyle={true} />
<DIcon icon="settings" materialStyle={true} />
```

Or configure globally via `DContextProvider`:

```tsx
<DContextProvider
  icon={{
    familyClass: 'material-symbols-outlined',
    materialStyle: true,
  }}
>
  <YourApp />
</DContextProvider>
```

## Finding Icon Names

Browse all available Lucide icons at: https://lucide.dev/icons/

Icon names in code use PascalCase. For example:
- "arrow-right" in the Lucide docs → `ArrowRight` in code
- "check-circle" → `CheckCircle`
- "file-text" → `FileText`

## Migration Steps

1. **Find and Replace**: Use your IDE to find all `icon="` occurrences
2. **Update Names**: Convert kebab-case to PascalCase
3. **Remove `-fill` suffixes**: Use the base icon name
4. **Check Lucide Docs**: Verify icon exists at https://lucide.dev/icons/
5. **Test**: Check that icons render correctly

## Example Migration

### Before
```tsx
import { DButton, DBadge, DListGroup } from '@dynamic-framework/ui-react';

function MyComponent() {
  return (
    <>
      <DButton iconStart="house-door" text="Home" />
      <DBadge iconStart="check-circle-fill" text="Success" />
      <DListGroup>
        <DListGroup.Item iconStart="person" iconEnd="chevron-right">
          Profile
        </DListGroup.Item>
        <DListGroup.Item iconStart="gear" iconEnd="chevron-right">
          Settings
        </DListGroup.Item>
      </DListGroup>
    </>
  );
}
```

### After
```tsx
import { DButton, DBadge, DListGroup } from '@dynamic-framework/ui-react';

function MyComponent() {
  return (
    <>
      <DButton iconStart="Home" text="Home" />
      <DBadge iconStart="CircleCheck" text="Success" />
      <DListGroup>
        <DListGroup.Item iconStart="User" iconEnd="ChevronRight">
          Profile
        </DListGroup.Item>
        <DListGroup.Item iconStart="Settings" iconEnd="ChevronRight">
          Settings
        </DListGroup.Item>
      </DListGroup>
    </>
  );
}
```

## Benefits of Lucide

- ✅ **Better Tree-shaking**: Only imports icons you use
- ✅ **Consistent Design**: All icons follow the same design language
- ✅ **TypeScript Support**: Full type safety for icon names
- ✅ **Smaller Bundle**: More efficient than icon fonts
- ✅ **Customizable**: Stroke width, size, color props
- ✅ **Active Development**: Regular updates and new icons

## Need Help?

- Browse icons: https://lucide.dev/icons/
- Lucide docs: https://lucide.dev/guide/
- Report issues: Create an issue in the project repository
