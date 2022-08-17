import {
  MButton,
  MFormCheck,
  MModal,
  MSegmentControl,
  MSegmentControlItem,
} from '@modyolabs/react-design-system';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface Props {
  onAccept: (accepted: boolean) => void;
}

type Day = {
  id: string;
  name: string;
  checked: boolean;
};

export default function ModalRecurrentPay(
  {
    onAccept,
  }: Props,
) {
  const initialState = {
    saturday: { id: 'saturday', name: 'S', checked: false },
    monday: { id: 'monday', name: 'M', checked: false },
    tuesday: { id: 'tuesday', name: 'T', checked: false },
    wednesday: { id: 'wednesday', name: 'W', checked: false },
    thursday: { id: 'thursday', name: 'T', checked: false },
    friday: { id: 'friday', name: 'F', checked: false },
    sunday: { id: 'sunday', name: 'S', checked: false },
  };

  const [days, setDays] = useState<Record<string, Day>>(initialState);

  const { t } = useTranslation();

  function handleChange(day: Day) {
    setDays((prev) => ({
      ...prev,
      [day.id]: {
        ...day,
        checked: !day.checked,
      },
    }));
  }

  return (
    <MModal
      mId="modalRecurrentPayment"
      centered
      static
      closeText="Cancel"
    >
      <div slot="header" className="p-3">
        <h5>Recurrent</h5>
      </div>
      <div
        slot="body"
        className="px-3"
      >
        <div className="mb-3">
          <small className="text-info px-2 py-1">Repeat</small>
          <MSegmentControl>
            <MSegmentControlItem
              class="flex-grow-1"
              checked
              name="repeatTime"
              mId="weekly"
              value="8"
              label="Weekly"
            />
            <MSegmentControlItem
              class="flex-grow-1"
              name="repeatTime"
              mId="monthly"
              value="30"
              label="Monthly"
            />
            <MSegmentControlItem
              class="flex-grow-1"
              name="repeatTime"
              mId="custom"
              value="custom"
              label="Custom"
            />
          </MSegmentControl>
        </div>
        <div className="mb-3 mx-2">
          <small className="text-dark px-2 py-1">
            On
          </small>
          <div className="d-flex justify-content-between">
            {Object.values(days).map((day) => (
              <MFormCheck
                key={day.id}
                type="checkbox"
                mId={day.id}
                value={day.name}
                label={day.name}
                isButton
                checked={day.checked}
                onMChange={() => handleChange(day)}
              />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <small className="text-info px-2 py-1">Ends</small>
          <MSegmentControl>
            <MSegmentControlItem
              class="flex-grow-1"
              checked
              name="endTime"
              mId="never"
              value="never"
              label="Never"
            />
            <MSegmentControlItem
              class="flex-grow-1"
              name="endTime"
              mId="date"
              value="date"
              label="Date"
            />
            <MSegmentControlItem
              class="flex-grow-1"
              name="endTime"
              mId="occurrencies"
              value="occurrencies"
              label="Occurencies"
            />
          </MSegmentControl>
        </div>
      </div>
      <div slot="footer" className="w-100 text-center">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2"
          text="Confirm"
          theme="primary"
          isPill
          onClick={() => onAccept(true)}
        />
      </div>
    </MModal>

  );
}
