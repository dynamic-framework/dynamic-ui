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
      class="modal fade show"
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
            Test Header
          </div>
          <div
            class="d-modal-slot modal-body"
          >
            Test Body
          </div>
          <div
            class="d-modal-separator"
          />
          <div
            class="d-modal-slot modal-footer d-modal-action-fill"
          >
            Test Footer
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
});
