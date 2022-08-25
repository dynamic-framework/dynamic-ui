import { MButton, MModal, MCalendar } from '@modyolabs/react-design-system';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { setSchedule } from '../store/slice';
import { useAppDispatch } from '../store/hooks';

interface Props {
  onAccept: (accepted: boolean) => void;
}

export default function ModalSchedule(
  {
    onAccept,
  }: Props,
) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [date, setDate] = useState(new Date());

  const scheduleDate = (option: boolean) => {
    const newSchedule = {
      isScheduled: option,
      date: option ? date.toISOString() : null,
      dateShow: option ? date.toISOString().split('T')[0] : null, // TODO: add date formatter
    };
    dispatch(setSchedule(newSchedule));
    onAccept(option);
  };

  return (
    <MModal
      mId="modalSchedulePayment"
      centered
      static
      noCloseButton
    >
      <div slot="header" className="w-100 mt-3 mb-0 mx-2">
        <h5 className="fw-semibold text-start m-0">
          {t('modal.scheduleCalendar.title')}
        </h5>
      </div>
      <div
        slot="body"
        className="d-flex justify-content-center align-items-center"
      >
        <MCalendar
          date={date}
          setDate={setDate}
          inline
        />
      </div>
      <div slot="footer" className="d-flex flex-column align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.schedule')}
          theme="primary"
          isPill
          onClick={() => scheduleDate(true)}
        />
        <MButton
          data-bs-dismiss="modal"
          class="w-50"
          text={t('button.cancel')}
          theme="primary"
          variant="outline"
          isPill
          onClick={() => scheduleDate(false)}
        />
      </div>
    </MModal>
  );
}
