import { render } from '@testing-library/react';
import DModal from './DModal';
import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

it('should render my component with header, body, and footer slot', () => {
  const modal = { name: 'myModal' };

  const { container } = render(
    <DModal
      {...modal}
    >
      <DModalHeader>
        Test Header
      </DModalHeader>
      <DModalBody>
        Test Body
      </DModalBody>
      <DModalFooter>
        Test Footer
      </DModalFooter>
    </DModal>,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      aria-hidden="false"
      aria-labelledby="myModalLabel"
      class="modal portal fade show"
      id="myModal"
      tabindex="-1"
    >
      <div
        class="modal-dialog"
      >
        <div
          class="modal-content"
        >
          <div
            class="modal-header"
          >
            <div>
              Test Header
            </div>
          </div>
          <div
            class="d-modal-separator"
          />
          <div
            class="modal-body"
          >
            Test Body
          </div>
          <div
            class="d-modal-separator"
          />
          <div
            class="modal-footer"
          >
            Test Footer
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
});
