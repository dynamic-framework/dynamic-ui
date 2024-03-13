import { render } from '@testing-library/react';
import DInputPin from './DInputPin';

it('should render my component', () => {
  const pin = { id: 'myPin' };

  const { container } = render(
    <DInputPin
      id={pin.id}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-input-pin"
    >
      <form
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
          required=""
          type="text"
        />
      </form>
    </div>
  </div>
  `);
});
