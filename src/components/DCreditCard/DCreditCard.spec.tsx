/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DCreditCard from '.';

describe('<Card />', () => {
  it('should render a card with a body', () => {
    const props: ComponentProps<typeof DCreditCard> = {
      cardNumber: '123',
      className: 'custom-card',
    };

    const { container } = render(
      <DCreditCard {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-credit-card overflow-hidden text-white position-relative rounded-3 d-none d-lg-flex d-card-md custom-card"
        >
          <div
            class="d-credit-card-header justify-content-between"
          >
            <img
              alt="visa"
              class="d-credit-card-logo"
              src="https://cdn.modyo.cloud/uploads/06b434f7-b943-4f54-9543-84a904e189aa/original/Visa_Logo_1_.png"
              width="100"
            />
            <div
              class="chip p-2 rounded-2"
            >
              <img
                alt="chip"
                class="d-credit-chip"
                src="https://cdn.modyo.cloud/uploads/4660ad00-e5d8-477e-8919-52b53d0a26fb/original/chip-debit-svgrepo-com_1_.png"
                width="30"
              />
            </div>
          </div>
          <div
            class="d-credit-card-details mt-auto d-none d-sm-block"
          >
            <div
              class="d-credit-card-number d-none d-sm-block mb-4"
            >
              123
            </div>
            <small
              class="d-block opacity-50"
            >
              Card Holder
            </small>
            <span
              class="name"
            />
          </div>
        </div>
      </div>
    `);
  });
});
