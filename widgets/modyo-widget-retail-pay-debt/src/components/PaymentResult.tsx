/* eslint-disable react/jsx-no-bind */
import {
  MButton,
  MIcon,
  MListItem,
} from '@modyolabs/react-design-system';

export default function PaymentResult() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-4 px-1">
        <MButton iconLeft="arrow-left" isPill theme="info" variant="text" />
        <h6 className="fw-bold m-0 flex-grow-1 text-center">Recipient</h6>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <MButton iconLeft="share" isPill theme="tertiary" variant="ghost" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <div className="rounded bg-white d-flex flex-column p-4 gap-4">
          <div className="d-flex flex-column gap-3 text-success text-center w-50 mx-auto">
            <MIcon
              icon="check-circle-fill"
              size="3rem"
            />
            <h5 className="text-dark fw-semibold">
              Payment Succesful
            </h5>
          </div>
          <div className="d-flex flex-column gap-1 text-center p-3 border-1 border-bottom">
            <span className="text-gray fw-bold">
              $38.00
            </span>
            <small className="text-dark">
              Money payed
            </small>
          </div>
          <div
            className="d-flex flex-column gap-2 small"
          >
            <MListItem
              text="Product Payed"
              value="{Aliasname}"
            />
            <MListItem
              text="Transaction ID"
              value="99484733"
            />
            <MListItem
              text="Time & Date"
              value="01/03/22 , 11:00 AM"
            />
          </div>
          <div
            className="d-flex gap-3 align-items-center justify-content-center mx-4 small"
          >
            <MIcon
              className="text-gray-light"
              icon="shield-check"
              size="1.3rem"
            />
            <p
              className="m-0"
            >
              All your transactions are safe and fast.
              <span
                className="text-secondary"
              >
                Terms & Conditions
              </span>
            </p>
          </div>
        </div>
        <MButton
          className="btn-result"
          text="Back"
          theme="primary"
          variant="outline"
          isPill
        />
      </div>
    </div>
  );
}
