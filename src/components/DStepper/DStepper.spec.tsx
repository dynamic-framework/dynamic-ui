import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DStepper from '.';

it('should render a stepper with 3 steps', () => {
  const props: ComponentProps<typeof DStepper> = {
    currentStep: 2,
    options: [
      {
        value: 1,
        label: 'One',
      },
      {
        value: 2,
        label: 'Two',
      },
      {
        value: 3,
        label: 'Three',
      },
    ],
  };

  const { container } = render(
    <DStepper {...props} />,
  );

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div
          class="d-block d-lg-none"
        >
          <div
            class="d-stepper"
          >
            <div
              class="d-step-bar"
            >
              <p
                class="d-step-number"
              >
                2/3
              </p>
            </div>
            <div
              class="d-step-info"
            >
              <div
                class="d-step-label"
              >
                Two
              </div>
              <div
                class="d-step-description"
              />
            </div>
          </div>
        </div>
        <div
          class="d-none d-lg-block"
        >
          <div
            class="d-stepper-desktop"
          >
            <div
              class="d-step"
            >
              <div
                class="d-step-value"
              >
                <div
                  class="d-step-icon-container d-step-check"
                >
                  <i
                    class="d-icon bi bi-check d-step-icon"
                    style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
                  />
                </div>
              </div>
              <div
                class="d-step-text-container"
              >
                <div
                  class="d-step-label"
                >
                  One
                </div>
              </div>
            </div>
            <div
              class="d-step"
            >
              <div
                class="d-step-value"
              >
                <div
                  class="d-step-icon-container d-step-current"
                >
                  2
                </div>
              </div>
              <div
                class="d-step-text-container"
              >
                <div
                  class="d-step-label"
                >
                  Two
                </div>
              </div>
            </div>
            <div
              class="d-step"
            >
              <div
                class="d-step-value"
              >
                <div
                  class="d-step-icon-container"
                >
                  3
                </div>
              </div>
              <div
                class="d-step-text-container"
              >
                <div
                  class="d-step-label"
                >
                  Three
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});
