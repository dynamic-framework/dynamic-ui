import { render } from '@testing-library/react';
import DInputPin from '../../src/components/DInputPin';

it('should render my component', () => {
  const pin = { id: 'myPin' };

  const { container } = render(
    <DInputPin
      id={pin.id}
    />
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-input-pin"
    >
      <form
        class="d-input-pin-controls"
        id="myPin"
      >
        <input
          aria-describedby="myPinState"
          autocomplete="off"
          class="form-control"
          id="pinIndex0"
          inputmode="text"
          maxlength="1"
          name="pin-0"
          placeholder="•"
          required=""
          type="text"
        />
        <input
          aria-describedby="myPinState"
          autocomplete="off"
          class="form-control"
          id="pinIndex1"
          inputmode="text"
          maxlength="1"
          name="pin-1"
          placeholder="•"
          required=""
          type="text"
        />
        <input
          aria-describedby="myPinState"
          autocomplete="off"
          class="form-control"
          id="pinIndex2"
          inputmode="text"
          maxlength="1"
          name="pin-2"
          placeholder="•"
          required=""
          type="text"
        />
        <input
          aria-describedby="myPinState"
          autocomplete="off"
          class="form-control"
          id="pinIndex3"
          inputmode="text"
          maxlength="1"
          name="pin-3"
          placeholder="•"
          required=""
          type="text"
        />
      </form>
    </div>
  </div>
  `);
});
