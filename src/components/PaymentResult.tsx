import {
  MButton,
  MIcon,
  MListItem
} from '@modyolabs/react-design-system';
export const PaymentResult = () => {
  return (
    <div className='d-flex flex-column align-items-center gap-4 my-5'>
      <div
        className='card rounded bg-white d-flex flex-column p-4 gap-4'>
        <div
          className='d-flex flex-column gap-3 text-success text-center w-50 mx-auto'>
          <MIcon
            icon='check-circle-fill'
            size='3rem'
          />
          <h5
            className='text-dark fw-semibold'>
            Payment Succesfull
          </h5>
        </div>
        <div
          className='d-flex flex-column gap-1 text-center p-3'>
          <span
            className='text-gray'>
            $38.00
          </span>
          <small
            className='text-dark'>
            Money payed
          </small>
        </div>
        <div
          className='d-flex flex-column list-group small'>
          <MListItem
            text='Product Payed'
            value="{Aliasname}"
          />
          <MListItem
            text='Transaction ID'
            value="99484733"
          />
          <MListItem
            text='Time & Date'
            value="01/03/22 , 11:00 AM"
          />
        </div>
        <div
          className='d-flex gap-3 align-items-center justify-content-center mx-4 small'>
          <MIcon
            className="text-gray-light"
            icon='shield-check'
            size='1.3rem'
          />
          <p
            className='m-0'>
            All your transactions are safe and fast.
            <a href="#">
              <span
                className='text-secondary'>
                Terms & Conditions
              </span>
            </a>
          </p>
        </div>
      </div>
      <MButton
        className='btn-result'
        text='Back'
        theme='primary'
        variant='outline'
        isPill />
    </div>
  )
}
