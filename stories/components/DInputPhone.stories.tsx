/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-alert */

import { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import * as Yup from 'yup';
import {
  Formik,
  Form,
} from 'formik';

import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import {
  DBadge,
  DButton,
  DContextProvider,
  validatePhoneNumber,
} from '../../src';
import DInputPhone from '../../src/components/DInputPhone';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputPhone> = {
  title: 'Design System/Components/Input Phone',
  component: DInputPhone,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Wrapper around Bootstrap input group elements.

**DInputPhone** is a custom wrapper component designed to handle international phone number inputs. 
It leverages the capabilities of **react-international-phone** 
to provide formatting, validation, and country code selection with flag icons.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Form Control](https://getbootstrap.com/docs/5.3/forms/forcontrol/)
+ [Bootstrap Input Group](https://getbootstrap.com/docs/5.3/forms/input-group/)
+ [react-international-phone](https://react-international-phone.vercel.app/)

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

The original CSS variables for \`react-international-phone\` use the prefix \`--react-international-phone\`.
However, in this component, the prefix has been changed to \`--bs-input-phone\`, 
and all variables are scoped under the \`.d-input-phone\` class.

| Variable                                                               | Class             | Type              | Description                                        |
|------------------------------------------------------------------------|-------------------|-------------------|----------------------------------------------------|
| --${PREFIX_BS}label-color                                              | :root             | css color unit    | Label color                                        |
| --${PREFIX_BS}label-font-weight                                        | :root             | css font weight   | Label font weight                                  |
| --${PREFIX_BS}label-font-size                                          | :root             | css length unit   | Label font size                                    |
| --${PREFIX_BS}label-padding-x                                          | :root             | css length unit   | Label horizontal padding                           |
| --${PREFIX_BS}label-padding-y                                          | :root             | css length unit   | Label vertical padding                             |
| --${PREFIX_BS}input-border-color                                       | .input-group      | css color unit    | Input border color                                 |
| --${PREFIX_BS}input-border-width                                       | .input-group      | css length unit   | Input border width                                 |
| --${PREFIX_BS}input-border-radius                                      | .input-group      | css length unit   | Input border radius                                |
| --${PREFIX_BS}input-focus-border-color                                 | .input-group      | css color unit    | Input focus border color                           |
| --${PREFIX_BS}input-focus-box-shadow                                   | .input-group      | css shadow        | Input focus box shadow                             |
| --${PREFIX_BS}input-disabled-bg                                        | .input-group      | css color unit    | Input disable background                           |
| --${PREFIX_BS}input-disabled-color                                     | .input-group      | css color unit    | Input disable color                                |
| --${PREFIX_BS}input-disabled-border-color                              | .input-group      | css color unit    | Input disable border color                         |
| --${PREFIX_BS}form-text-padding                                        | .form-text        | css length unit   | Hint padding                                       |
| --${PREFIX_BS}form-text-gap                                            | .form-text        | css length unit   | Space between hint elements                        |
| --${PREFIX_BS}form-text-color                                          | .form-text        | css color unit    | Hint color                                         |
| --${PREFIX_BS}form-control-text-align                                  | .form-control     | css text align    | Input text align                                   |
| --${PREFIX_BS}input-phone-height                                       | .d-input-phone    | css length unit   | General height of the input                        |
| --${PREFIX_BS}input-phone-font-size                                    | .d-input-phone    | css length unit   | Font size of the input                             |
| --${PREFIX_BS}input-phone-border-radius                                | .d-input-phone    | css length unit   | Border radius of the input                         |
| --${PREFIX_BS}input-phone-border-color                                 | .d-input-phone    | css color unit    | Border color of the input                          |
| --${PREFIX_BS}input-phone-background-color                             | .d-input-phone    | css color unit    | Background color of the input                      |
| --${PREFIX_BS}input-phone-text-color                                   | .d-input-phone    | css color unit    | Text color of the input                            |
| --${PREFIX_BS}input-phone-disabled-background-color                    | .d-input-phone    | css color unit    | Background color when input is disabled            |
| --${PREFIX_BS}input-phone-disabled-text-color                          | .d-input-phone    | css color unit    | Text color when input is disabled                  |
| --${PREFIX_BS}input-phone-country-selector-border-color                | .d-input-phone    | css color unit    | Border color of the country selector               |
| --${PREFIX_BS}input-phone-country-selector-background-color            | .d-input-phone    | css color unit    | Background color of the country selector           |
| --${PREFIX_BS}input-phone-country-selector-background-color-hover      | .d-input-phone    | css color unit    | Background color of the country selector on hover  |
| --${PREFIX_BS}input-phone-disabled-country-selector-background-color   | .d-input-phone    | css color unit    | Background color when country selector is disabled |
| --${PREFIX_BS}input-phone-country-selector-arrow-size                  | .d-input-phone    | css length unit   | Size of the country selector arrow                 |
| --${PREFIX_BS}input-phone-country-selector-arrow-color                 | .d-input-phone    | css color unit    | Color of the country selector arrow                |
| --${PREFIX_BS}input-phone-disabled-country-selector-arrow-color        | .d-input-phone    | css color unit    | Color of the arrow when selector is disabled       |
| --${PREFIX_BS}input-phone-flag-width                                   | .d-input-phone    | css length unit   | Width of the flag                                  |
| --${PREFIX_BS}input-phone-flag-height                                  | .d-input-phone    | css length unit   | Height of the flag                                 |
| --${PREFIX_BS}input-phone-dropdown-top                                 | .d-input-phone    | css length unit   | Top position of the dropdown                       |
| --${PREFIX_BS}input-phone-dropdown-left                                | .d-input-phone    | css length unit   | Left position of the dropdown                      |
| --${PREFIX_BS}input-phone-dropdown-border-radius                       | .d-input-phone    | css length unit   | Border radius of the dropdown                      |
| --${PREFIX_BS}input-phone-dropdown-border                              | .d-input-phone    | css border        | Border of the dropdown                             |
| --${PREFIX_BS}input-phone-dropdown-shadow                              | .d-input-phone    | css shadow        | Shadow of the dropdown                             |
| --${PREFIX_BS}input-phone-dropdown-item-height                         | .d-input-phone    | css length unit   | Height of each dropdown item                       |
| --${PREFIX_BS}input-phone-dropdown-item-padding                        | .d-input-phone    | css length unit   | Padding of each dropdown item                      |
| --${PREFIX_BS}input-phone-dropdown-item-font-size                      | .d-input-phone    | css length unit   | Font size of each dropdown item                    |
| --${PREFIX_BS}input-phone-dropdown-item-font-weight                    | .d-input-phone    | css font weight   | Font weight of each dropdown item                  |
| --${PREFIX_BS}input-phone-dropdown-item-background-color               | .d-input-phone    | css color unit    | Background color of each dropdown item             |
| --${PREFIX_BS}input-phone-dropdown-item-text-color                     | .d-input-phone    | css color unit    | Text color of each dropdown item                   |
| --${PREFIX_BS}input-phone-dropdown-item-dial-code-color                | .d-input-phone    | css color unit    | Color of the dial code in dropdown item            |
| --${PREFIX_BS}input-phone-hover-dropdown-item-background-color         | .d-input-phone    | css color unit    | Background color when hovering over dropdown item  |
| --${PREFIX_BS}input-phone-selected-dropdown-item-background-color      | .d-input-phone    | css color unit    | Background color of the selected dropdown item     |
| --${PREFIX_BS}input-phone-selected-dropdown-item-color                 | .d-input-phone    | css color unit    | Text color of the selected dropdown item           |
| --${PREFIX_BS}input-phone-selected-dropdown-item-font-weight           | .d-input-phone    | css font weight   | Font weight of the selected dropdown item          |
| --${PREFIX_BS}input-phone-selected-dropdown-item-dial-code-color       | .d-input-phone    | css color unit    | Dial code color of the selected dropdown item      |
| --${PREFIX_BS}input-phone-dropdown-preferred-list-item-background-color| .d-input-phone    | css color unit    | Background color of preferred list items           |
| --${PREFIX_BS}input-phone-dropdown-preferred-list-divider-margin       | .d-input-phone    | css length unit   | Margin of the preferred list divider               |
| --${PREFIX_BS}input-phone-dropdown-preferred-list-divider-color        | .d-input-phone    | css color unit    | Color of the preferred list divider                |
| --${PREFIX_BS}input-phone-dial-code-preview-border-color               | .d-input-phone    | css color unit    | Border color of the dial code preview              |
| --${PREFIX_BS}input-phone-dial-code-preview-background-color           | .d-input-phone    | css color unit    | Background color of the dial code preview          |
| --${PREFIX_BS}input-phone-dial-code-preview-text-color                 | .d-input-phone    | css color unit    | Text color of the dial code preview                |
| --${PREFIX_BS}input-phone-dial-code-preview-font-size                  | .d-input-phone    | css length unit   | Font size of the dial code preview                 |
| --${PREFIX_BS}input-phone-dial-code-preview-disabled-background-color  | .d-input-phone    | css color unit    | Background color when dial code preview is disabled|
| --${PREFIX_BS}input-phone-dial-code-preview-disabled-text-color        | .d-input-phone    | css color unit    | Text color when dial code preview is disabled      |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'Name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    labelIconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    labelIconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    labelIconMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    placeholder: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconEndMaterialStyle: {
      control: 'boolean',
      type: 'boolean',
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onIconEndClick: {
      action: 'onIconEndClicked',
    },
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: '300px', width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export default config;
type Story = StoryObj<typeof DInputPhone>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    disabled: true,
  },
};

export const FloatingLabel: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    floatingLabel: true,
  },
};

export const FilteredCountries: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    defaultCountry: 'cl',
    filteredCountries: ['cl', 'co', 'us'],
  },
};

export const WithPreferredCountries: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    hint: 'Assistive text',
    defaultCountry: 'cl',
    countrySelectorProps: {
      preferredCountries: ['cl', 'co', 'us'],
    },
  },
};

export const CustomInputEnd: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    inputEnd: (
      <DBadge
        text="1"
        soft
      />
    ),
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    iconEnd: 'face_5',
    iconEndAriaLabel: 'end action',
  },
};

export const MaterialIconError: Story = {
  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    invalid: true,
  },
};

export const MaterialIconConfirm: Story = {

  render: (args: ComponentProps<typeof DInputPhone>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPhone {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId11',
    label: 'Label',
    placeholder: 'Placeholder',
    valid: true,
  },
};

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .test(
      'phone',
      'Phone number is invalid',
      (value) => validatePhoneNumber(value ?? ''),
    ),
});

const FormikExample = {
  JSX: (
    {
      value,
      hint,
      invalid,
      onChange,
      onBlur,
      ...args
    }: ComponentProps<typeof DInputPhone>,
  ) => (
    <Formik
      initialValues={{ phone: value }}
      onSubmit={(values) => alert(`${values.phone} is a valid number`)}
      validateOnChange
      validateOnMount
      validationSchema={validationSchema}
    >
      {({
        errors,
        touched,
        setFieldValue,
        handleBlur,
        values,
      }) => (
        <Form className="d-flex flex-column gap-4">
          <DInputPhone
            value={values.phone}
            onChange={({ phone }) => setFieldValue('phone', phone)}
            onBlur={handleBlur}
            hint={touched.phone && errors.phone ? errors.phone : ' '}
            invalid={!!(touched.phone && errors.phone)}
            valid={!(touched.phone && errors.phone)}
            {...args}
          />
          <DButton
            text="Validate"
            type="submit"
          />
        </Form>
      )}
    </Formik>
  ),
  code: `

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required()
    .test(
      'phone',
      'Phone number is invalid',
      (value) => validatePhoneNumber(value ?? ''),
    ),
});

<Formik
  initialValues={{ phone: '+1' }}
  onSubmit={(values) => alert(\`\${values.phone} is a valid number\`)}
  validateOnChange
  validateOnMount
  validationSchema={validationSchema}
>
  {({
    errors,
    touched,
    setFieldValue,
    handleBlur,
    values,
  }) => (
    <Form className="d-flex flex-column gap-4">
      <DInputPhone
        id="phone"
        name="phone"
        label="Phone number"
        placeholder="Digit your phone number"
        value={values.phone}
        onChange={({ phone }) => setFieldValue('phone', phone)}
        onBlur={handleBlur}
        hint={touched.phone && errors.phone ? errors.phone : ' '}
        invalid={!!(touched.phone && errors.phone)}
        valid={!(touched.phone && errors.phone)}
      />
      <DButton
        text="Validate"
        type="submit"
      />
    </Form>
  )}
</Formik>`,
};

export const UsingWithFormik: Story = {

  render: (args) => <FormikExample.JSX {...args} />,
  args: {
    id: 'phone',
    name: 'phone',
    label: 'Phone number',
    placeholder: 'Digit your phone number',
    value: '+573202058097',
  },
  parameters: {
    docs: {
      source: {
        code: FormikExample.code,
      },
    },
  },
};
