/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  act, fireEvent, render, screen,
} from '@testing-library/react';

import DChoiceGroup from '.';
import { DChoiceGroup as DChoiceGroupFromEntry } from '../..';

const MATERIALS = [
  { value: 'synthetic', label: 'Synthetic' },
  { value: 'wool', label: 'Wool' },
  { value: 'cotton', label: 'Cotton' },
];

/** Native validation only means something inside a form, so render one. */
const inForm = (ui: React.ReactNode) => {
  const { container, rerender } = render(<form>{ui}</form>);
  return {
    form: container.querySelector('form') as HTMLFormElement,
    rerender: (next: React.ReactNode) => rerender(<form>{next}</form>),
  };
};

describe('<DChoiceGroup />', () => {
  describe('Rendering', () => {
    /**
     * The whole premise: it looks like buttons, so the test that matters is
     * that it is NOT buttons. Radios bring the group semantics, the arrow-key
     * movement and the form value for free.
     */
    it('should render radios, not buttons', () => {
      render(<DChoiceGroup options={MATERIALS} label="Main material" />);

      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.queryAllByRole('button')).toHaveLength(0);
    });

    it('should render checkboxes when multiple', () => {
      render(<DChoiceGroup multiple options={MATERIALS} label="Main material" />);

      expect(screen.getAllByRole('checkbox')).toHaveLength(3);
    });

    it('should put every input in the same group', () => {
      render(<DChoiceGroup options={MATERIALS} name="material" />);

      screen.getAllByRole('radio').forEach((input) => {
        expect(input).toHaveAttribute('name', 'material');
      });
    });

    it('should generate a name when none is given, so a group still groups', () => {
      render(<DChoiceGroup options={MATERIALS} />);
      const names = screen.getAllByRole('radio').map((input) => input.getAttribute('name'));

      expect(new Set(names).size).toBe(1);
      expect(names[0]).toBeTruthy();
    });

    it('should be reachable from the public entry point', () => {
      expect(DChoiceGroupFromEntry).toBe(DChoiceGroup);

      render(<DChoiceGroupFromEntry options={MATERIALS} label="Main material" />);

      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });

    it('should bind each label to its own input', () => {
      render(<DChoiceGroup options={MATERIALS} />);

      // Clicking the label is the only way a pointer reaches the input, which
      // is clipped out of sight.
      fireEvent.click(screen.getByText('Wool'));

      expect(screen.getByRole('radio', { name: 'Wool' })).toBeChecked();
    });
  });

  describe('Selection', () => {
    it('should keep one choice at a time', () => {
      render(<DChoiceGroup options={MATERIALS} defaultValue="wool" />);

      fireEvent.click(screen.getByRole('radio', { name: 'Cotton' }));

      expect(screen.getByRole('radio', { name: 'Cotton' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'Wool' })).not.toBeChecked();
    });

    it('should accumulate choices when multiple', () => {
      render(<DChoiceGroup multiple options={MATERIALS} defaultValue={['wool']} />);

      fireEvent.click(screen.getByRole('checkbox', { name: 'Cotton' }));

      expect(screen.getByRole('checkbox', { name: 'Wool' })).toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'Cotton' })).toBeChecked();
    });

    it('should drop a choice that is clicked again when multiple', () => {
      render(<DChoiceGroup multiple options={MATERIALS} defaultValue={['wool', 'cotton']} />);

      fireEvent.click(screen.getByRole('checkbox', { name: 'Wool' }));

      expect(screen.getByRole('checkbox', { name: 'Wool' })).not.toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'Cotton' })).toBeChecked();
    });

    it('should start with nothing chosen', () => {
      render(<DChoiceGroup options={MATERIALS} />);

      screen.getAllByRole('radio').forEach((input) => expect(input).not.toBeChecked());
    });
  });

  describe('Callbacks', () => {
    it('should report a single choice as a string', () => {
      const onChange = jest.fn();
      render(<DChoiceGroup options={MATERIALS} onChange={onChange} />);

      fireEvent.click(screen.getByRole('radio', { name: 'Cotton' }));

      expect(onChange).toHaveBeenCalledWith('cotton');
    });

    it('should report multiple choices as an array', () => {
      const onChange = jest.fn();
      render(<DChoiceGroup multiple options={MATERIALS} defaultValue={['wool']} onChange={onChange} />);

      fireEvent.click(screen.getByRole('checkbox', { name: 'Cotton' }));

      expect(onChange).toHaveBeenCalledWith(['wool', 'cotton']);
    });
  });

  describe('Controlled and uncontrolled', () => {
    it('should follow the consumer when controlled', () => {
      function Controlled() {
        const [material, setMaterial] = useState('wool');
        return (
          <>
            <DChoiceGroup options={MATERIALS} value={material} onChange={setMaterial} />
            <button type="button" onClick={() => setMaterial('synthetic')}>reset</button>
          </>
        );
      }
      render(<Controlled />);

      fireEvent.click(screen.getByText('reset'));

      expect(screen.getByRole('radio', { name: 'Synthetic' })).toBeChecked();
    });

    it('should keep its own state when uncontrolled', () => {
      render(<DChoiceGroup options={MATERIALS} defaultValue="wool" />);

      fireEvent.click(screen.getByRole('radio', { name: 'Synthetic' }));

      expect(screen.getByRole('radio', { name: 'Synthetic' })).toBeChecked();
    });
  });

  describe('Size', () => {
    /**
     * The regular size is the absence of a modifier, not a value you can ask
     * for — there is no `md`, so there is no `.d-choice-group-md` either.
     */
    it('should carry no size modifier when none is given', () => {
      const { container } = render(<DChoiceGroup options={MATERIALS} />);
      const classes = [...(container.querySelector('.d-choice-group')?.classList ?? [])];

      expect(classes.filter((name) => /^d-choice-group-(sm|md|lg)$/.test(name))).toEqual([]);
    });

    it.each(['sm', 'lg'] as const)('should apply the %s modifier', (size) => {
      const { container } = render(<DChoiceGroup options={MATERIALS} size={size} />);

      expect(container.querySelector('.d-choice-group')).toHaveClass(`d-choice-group-${size}`);
    });

    /**
     * jsdom reports no breakpoint variables, so `useResponsiveProp` resolves to
     * `undefined` and the group falls back to the regular size rather than
     * applying a modifier built out of it.
     */
    it('should survive a responsive size with no breakpoints available', () => {
      const { container } = render(<DChoiceGroup options={MATERIALS} size={{ xs: 'sm', lg: 'lg' }} />);
      const group = container.querySelector('.d-choice-group');

      expect(group).not.toHaveClass('d-choice-group-undefined');
      expect(screen.getAllByRole('radio')).toHaveLength(3);
    });
  });

  describe('Colour', () => {
    it('should default to primary', () => {
      const { container } = render(<DChoiceGroup options={MATERIALS} />);

      expect(container.querySelector('.d-choice-group')).toHaveClass('d-choice-group-primary');
    });

    it('should take the colour it is given', () => {
      const { container } = render(<DChoiceGroup options={MATERIALS} color="secondary" />);

      expect(container.querySelector('.d-choice-group')).toHaveClass('d-choice-group-secondary');
    });
  });

  describe('Disabled', () => {
    /** A disabled fieldset disables its controls natively. */
    it('should disable every option when the group is disabled', () => {
      render(<DChoiceGroup options={MATERIALS} disabled />);

      screen.getAllByRole('radio').forEach((input) => expect(input).toBeDisabled());
    });

    it('should disable a single option', () => {
      render(
        <DChoiceGroup
          options={[...MATERIALS, { value: 'silk', label: 'Silk', disabled: true }]}
        />,
      );

      expect(screen.getByRole('radio', { name: 'Silk' })).toBeDisabled();
      expect(screen.getByRole('radio', { name: 'Wool' })).toBeEnabled();
    });

    it('should leave the rest of the group usable', () => {
      render(
        <DChoiceGroup
          options={[
            { value: 'synthetic', label: 'Synthetic' },
            { value: 'wool', label: 'Wool' },
            { value: 'cotton', label: 'Cotton', disabled: true },
          ]}
        />,
      );

      fireEvent.click(screen.getByRole('radio', { name: 'Synthetic' }));

      expect(screen.getByRole('radio', { name: 'Synthetic' })).toBeChecked();
    });

    /**
     * A locked choice: the selected option is the disabled one. It is still
     * the group's value — it simply cannot be changed from here — so it must
     * not be quietly dropped.
     */
    it('should keep a disabled option selected', () => {
      const onChange = jest.fn();
      render(
        <DChoiceGroup
          defaultValue="cotton"
          onChange={onChange}
          options={[
            { value: 'synthetic', label: 'Synthetic' },
            { value: 'wool', label: 'Wool' },
            { value: 'cotton', label: 'Cotton', disabled: true },
          ]}
        />,
      );

      expect(screen.getByRole('radio', { name: 'Cotton' })).toBeChecked();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should ignore a click on a disabled option', () => {
      const onChange = jest.fn();
      render(
        <DChoiceGroup
          defaultValue="wool"
          onChange={onChange}
          options={[
            { value: 'synthetic', label: 'Synthetic' },
            { value: 'wool', label: 'Wool' },
            { value: 'cotton', label: 'Cotton', disabled: true },
          ]}
        />,
      );

      fireEvent.click(screen.getByText('Cotton'));

      expect(screen.getByRole('radio', { name: 'Wool' })).toBeChecked();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should keep disabled checkboxes selected when multiple', () => {
      render(
        <DChoiceGroup
          multiple
          defaultValue={['m', 'l']}
          options={[
            { value: 's', label: 'S', disabled: true },
            { value: 'm', label: 'M', disabled: true },
            { value: 'l', label: 'L' },
          ]}
        />,
      );

      expect(screen.getByRole('checkbox', { name: 'M' })).toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'S' })).not.toBeChecked();
      expect(screen.getByRole('checkbox', { name: 'L' })).toBeChecked();
    });
  });

  describe('Form state', () => {
    it('should mark the group invalid', () => {
      const { container } = render(<DChoiceGroup options={MATERIALS} invalid />);

      expect(container.querySelector('.d-choice-group')).toHaveAttribute('data-invalid');
      screen.getAllByRole('radio').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
    });

    it('should require a radio group through its inputs', () => {
      render(<DChoiceGroup options={MATERIALS} required />);

      screen.getAllByRole('radio').forEach((input) => expect(input).toBeRequired());
    });

    /**
     * `required` on each checkbox would demand that every box be ticked, which
     * is never what a required group means.
     */
    it('should not require every checkbox when multiple', () => {
      render(<DChoiceGroup multiple options={MATERIALS} required />);

      screen.getAllByRole('checkbox').forEach((input) => expect(input).not.toBeRequired());
    });

    /**
     * ...but it must still be required. Without the group-level constraint an
     * empty multi-select passes native validation and the form submits with
     * nothing chosen, which is the combination silently doing nothing.
     */
    it('should block an empty required multi-select', () => {
      const { form } = inForm(<DChoiceGroup multiple options={MATERIALS} required />);

      expect(form.checkValidity()).toBe(false);
    });

    it('should release the constraint once something is chosen', () => {
      const { form } = inForm(
        <DChoiceGroup multiple options={MATERIALS} required defaultValue={['wool']} />,
      );

      expect(form.checkValidity()).toBe(true);
    });

    it('should carry the constraint on an option that can hold it', () => {
      const { container } = render(
        <DChoiceGroup
          multiple
          required
          options={[
            { value: 'synthetic', label: 'Synthetic', disabled: true },
            { value: 'wool', label: 'Wool' },
            { value: 'cotton', label: 'Cotton' },
          ]}
        />,
      );

      // A disabled control is barred from constraint validation, so hanging
      // the group's only constraint on the first option would drop it.
      const inputs = [...container.querySelectorAll('input')];
      expect(inputs[0].validity.customError).toBe(false);
      expect(inputs[1].validity.customError).toBe(true);
    });

    it('should use the message it is given', () => {
      const { container } = render(
        <DChoiceGroup multiple options={MATERIALS} required requiredMessage="Pick a material" />,
      );

      expect((container.querySelector('input') as HTMLInputElement).validationMessage)
        .toBe('Pick a material');
    });

    it('should not constrain a multi-select that is not required', () => {
      const { form } = inForm(<DChoiceGroup multiple options={MATERIALS} />);

      expect(form.checkValidity()).toBe(true);
    });

    /** A disabled group cannot be filled in, so it must not block the form. */
    it('should not block the form when the group is disabled', () => {
      const { form } = inForm(<DChoiceGroup multiple options={MATERIALS} required disabled />);

      expect(form.checkValidity()).toBe(true);
    });

    /**
     * The constraint lives on one particular input, so anything that changes
     * WHICH input that is has to be accounted for. These three transitions all
     * end with the form in the wrong state if the effect only watches the
     * selection.
     */
    describe('when the options change under it', () => {
      const PAIR = [
        { value: 'synthetic', label: 'Synthetic' },
        { value: 'wool', label: 'Wool' },
      ];

      it('should keep blocking when the constraint moves to another option', () => {
        const { form, rerender } = inForm(
          <DChoiceGroup multiple required options={PAIR} />,
        );
        expect(form.checkValidity()).toBe(false);

        rerender(<DChoiceGroup
          multiple
          required
          options={[{ value: 'linen', label: 'Linen' }, { value: 'denim', label: 'Denim' }]}
        />);

        expect(form.checkValidity()).toBe(false);
      });

      /**
       * Prepending an option hands the constraint to the newcomer while the
       * previous holder stays rendered AND enabled — so if it keeps the error
       * it was given, nothing can ever clear it and the form is blocked for
       * good.
       *
       * The enabled part is what makes this the real test: a disabled control
       * is barred from constraint validation, so a stale error on one would
       * hide the bug rather than expose it.
       */
      it('should not leave the error behind on the option it left', () => {
        const { form, rerender } = inForm(
          <DChoiceGroup multiple required options={[PAIR[1]]} />,
        );
        expect(form.checkValidity()).toBe(false);

        rerender(<DChoiceGroup
          multiple
          required
          value={['wool']}
          onChange={() => {}}
          options={[{ value: 'linen', label: 'Linen' }, PAIR[1]]}
        />);

        const inputs = [...form.querySelectorAll('input')];
        expect(inputs.every((input) => !input.disabled)).toBe(true);
        expect(form.checkValidity()).toBe(true);
      });

      /**
       * A value that no longer matches any rendered option is not a selection.
       * Counting it as one lets a group that looks empty submit.
       */
      it('should block again when the chosen option is taken away', () => {
        const { form, rerender } = inForm(
          <DChoiceGroup
            multiple
            required
            value={['wool']}
            onChange={() => {}}
            options={PAIR}
          />,
        );
        expect(form.checkValidity()).toBe(true);

        rerender(<DChoiceGroup
          multiple
          required
          value={['wool']}
          onChange={() => {}}
          options={[PAIR[0]]}
        />);

        expect(form.checkValidity()).toBe(false);
      });

      /** Nothing can hold the constraint, so it must not block the form. */
      it('should stop blocking when every option becomes disabled', () => {
        const { form, rerender } = inForm(
          <DChoiceGroup multiple required options={PAIR} />,
        );
        expect(form.checkValidity()).toBe(false);

        rerender(<DChoiceGroup
          multiple
          required
          options={PAIR.map((option) => ({ ...option, disabled: true }))}
        />);

        expect(form.checkValidity()).toBe(true);
      });
    });

    it('should describe the group with its hint', () => {
      const { container } = render(
        <DChoiceGroup options={MATERIALS} label="Main material" hint="Pick the dominant one" />,
      );
      const group = container.querySelector('.d-choice-group');
      const hint = container.querySelector('.d-choice-group-hint');

      expect(group).toHaveAttribute('aria-describedby', hint?.id);
      expect(hint).toHaveTextContent('Pick the dominant one');
    });
  });

  /**
   * A native form reset restores the inputs to the `defaultChecked` React
   * wrote at mount, but fires no `change` — so without handling it the state
   * and the DOM walk away from each other, quietly.
   */
  describe('Form reset', () => {
    /** The reset defers its work a microtask, so let it run. */
    const settle = () => act(async () => { await Promise.resolve(); });

    /**
     * `form.reset()` is exactly what activating a reset button runs — the same
     * event, the same restore algorithm — without a raw `<button type="reset">`
     * that the lint config rejects.
     */
    const withReset = (ui: React.ReactNode) => {
      const { container } = render(<form>{ui}</form>);
      return container.querySelector('form') as HTMLFormElement;
    };
    const chosen = (role: 'radio' | 'checkbox' = 'radio') => screen
      .getAllByRole<HTMLInputElement>(role)
      .filter((input) => input.checked)
      .map((input) => input.value);

    it('should put an uncontrolled group back to its defaultValue', async () => {
      const form = withReset(<DChoiceGroup options={MATERIALS} defaultValue="wool" />);
      fireEvent.click(screen.getByRole('radio', { name: 'Cotton' }));
      expect(chosen()).toEqual(['cotton']);

      form.reset();
      await settle();

      expect(chosen()).toEqual(['wool']);
    });

    /**
     * The one that bites. The browser gets the DOM right on its own; it is
     * the state left holding the old answer that puts it back on the next
     * render, for any reason at all.
     */
    it('should still hold the reset value after an unrelated re-render', async () => {
      function Host() {
        const [, force] = useState(0);
        return (
          <form>
            <DChoiceGroup options={MATERIALS} defaultValue="wool" />
            <button type="button" onClick={() => force((tick) => tick + 1)}>bump</button>
          </form>
        );
      }
      const { container } = render(<Host />);
      fireEvent.click(screen.getByRole('radio', { name: 'Cotton' }));
      (container.querySelector('form') as HTMLFormElement).reset();
      await settle();

      fireEvent.click(screen.getByText('bump'));

      expect(chosen()).toEqual(['wool']);
    });

    it('should tell the consumer the value changed', async () => {
      const onChange = jest.fn();
      const form = withReset(<DChoiceGroup options={MATERIALS} defaultValue="wool" onChange={onChange} />);
      fireEvent.click(screen.getByRole('radio', { name: 'Cotton' }));
      onChange.mockClear();

      form.reset();
      await settle();

      expect(onChange).toHaveBeenCalledWith('wool');
    });

    it('should say nothing when the reset changes nothing', async () => {
      const onChange = jest.fn();
      const form = withReset(<DChoiceGroup options={MATERIALS} defaultValue="wool" onChange={onChange} />);

      form.reset();
      await settle();

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should empty an uncontrolled multi-select back to its defaultValue', async () => {
      const form = withReset(<DChoiceGroup multiple options={MATERIALS} defaultValue={['wool']} />);
      fireEvent.click(screen.getByRole('checkbox', { name: 'Cotton' }));
      expect(chosen('checkbox')).toEqual(['wool', 'cotton']);

      form.reset();
      await settle();

      expect(chosen('checkbox')).toEqual(['wool']);
    });

    /**
     * The hole this leaves open: a required group emptied by a reset would go
     * on counting a selection nothing shows, and the form would submit with
     * nothing chosen.
     */
    it('should block a required multi-select again after a reset empties it', async () => {
      const form = withReset(<DChoiceGroup multiple required options={MATERIALS} />);
      fireEvent.click(screen.getByRole('checkbox', { name: 'Cotton' }));
      expect(form.checkValidity()).toBe(true);

      form.reset();
      await settle();

      expect(chosen('checkbox')).toEqual([]);
      expect(form.checkValidity()).toBe(false);
    });

    /**
     * Controlled is the consumer's value, and a reset is not their decision to
     * change it — but the browser has already moved the DOM, so the group has
     * to write their value back over it.
     */
    it('should keep a controlled value across a reset', async () => {
      function Controlled() {
        const [material, setMaterial] = useState('cotton');
        return (
          <form>
            <DChoiceGroup options={MATERIALS} value={material} onChange={setMaterial} />
          </form>
        );
      }
      const { container } = render(<Controlled />);
      expect(chosen()).toEqual(['cotton']);

      (container.querySelector('form') as HTMLFormElement).reset();
      await settle();

      expect(chosen()).toEqual(['cotton']);
    });

    it('should survive a group that is not inside a form', () => {
      expect(() => render(<DChoiceGroup options={MATERIALS} defaultValue="wool" />)).not.toThrow();
      expect(chosen()).toEqual(['wool']);
    });
  });

  describe('Layout hooks', () => {
    it('should pass a class to the options container and to each option', () => {
      const { container } = render(
        <DChoiceGroup
          options={MATERIALS}
          optionsClassName="grid gap-2"
          optionClassName="g-col-4"
        />,
      );

      expect(container.querySelector('.d-choice-group-options')).toHaveClass('grid', 'gap-2');
      container.querySelectorAll('.d-choice').forEach((option) => {
        expect(option).toHaveClass('g-col-4');
      });
    });
  });
});
