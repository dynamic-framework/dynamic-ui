import {
  MButton,
  MFormCheck,
  MModal,
  MSegmentControl,
  MSegmentControlItem,
  MSelect,
} from '@modyolabs/react-design-system';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { useAppDispatch } from '../store/hooks';
import { setRecurring } from '../store/slice';

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
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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
  const [recurringStart, setRecurringStart] = useState('weekly');
  const [recurringEnd, setRecurringEnd] = useState('never');
  const [repeat, setRepeat] = useState(1);

  const setRepeatHandler = (action: boolean) => {
    if (action) {
      setRepeat(repeat + 1);
    } else {
      const temp = repeat - 1;
      setRepeat(temp < 1 ? 1 : temp);
    }
  };

  function handleChange(day: Day) {
    setDays((prev) => ({
      ...prev,
      [day.id]: {
        ...day,
        checked: !day.checked,
      },
    }));
  }

  const shortCutRepeatHandler = ({ detail }: CustomEvent) => setRecurringStart(detail as string);
  const shortCutEndHandler = ({ detail }: CustomEvent) => setRecurringEnd(detail as string);

  const setPaymentScheduled = (action: boolean) => {
    const newRecurring = {
      isRecurring: action,
      start: {
        frequency: action ? recurringStart : null,
        option: null,
      },
      end: {
        frequency: action ? recurringEnd : null,
        option: null,
      },
    };
    dispatch(setRecurring(newRecurring));
    onAccept(action);
  };

  const monthlyOptions = [
    {
      label: 'Every month.',
      value: '1-month',
    },
    {
      label: 'Every other month.',
      value: '2-month',
    },
    {
      label: 'Every 3 months.',
      value: '3-month',
    },
    {
      label: 'Every 6 months.',
      value: '6-month',
    },
    {
      label: 'Every 12 months',
      value: '12-month',
    },
  ];

  return (
    <MModal
      mId="modalRecurrentPayment"
      centered
      static
      closeText={t('button.cancel')}
    >
      <div slot="header" className="p-3">
        <h5 className="fw-semibold">
          {t('modal.recurring.title')}
        </h5>
      </div>
      <div
        slot="body"
        className="px-3"
      >
        <div className="mb-3">
          <small className="text-info px-2 py-1">
            {t('modal.recurring.repeat')}
          </small>
          <MSegmentControl class="scroll-h">
            <MSegmentControlItem
              class="flex-grow-1"
              checked={recurringStart === 'weekly'}
              name="repeatTime"
              mId="weekly"
              value="weekly"
              label={t('modal.recurring.weekly')}
              onMChange={shortCutRepeatHandler}
            />
            <MSegmentControlItem
              class="flex-grow-1"
              checked={recurringStart === 'monthly'}
              name="repeatTime"
              mId="monthly"
              value="monthly"
              label={t('modal.recurring.monthly')}
              onMChange={shortCutRepeatHandler}
            />
            <MSegmentControlItem
              class="flex-grow-1"
              checked={recurringStart === 'custom'}
              name="repeatTime"
              mId="custom"
              value="custom"
              label={t('modal.recurring.custom')}
              onMChange={shortCutRepeatHandler}
            />
          </MSegmentControl>
        </div>
        <div className="d-flex w-100 mb-3">
          {
            (recurringStart === 'weekly') && (
              <div className="d-flex flex-column gap-2 w-100">
                <small className="text-dark px-2 py-1">
                  {t('modal.recurring.on')}
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
            )
          }
          {
            (recurringStart === 'monthly') && (
              <MSelect
                className="w-100"
                mId="selectMonthlyRecurring"
                options={monthlyOptions}
                variant="full"
                theme="info"
              />
            )
          }
          {
            (recurringStart === 'custom') && (
              <small>Custom</small>
            )
          }
        </div>
        <div className="mb-3">
          <small className="text-info px-2 py-1">
            {t('modal.recurring.ends')}
          </small>
          <MSegmentControl class="scroll-h">
            <MSegmentControlItem
              class="flex-grow-1"
              checked={recurringEnd === 'never'}
              name="endTime"
              mId="never"
              value="never"
              label={t('modal.recurring.never')}
              onMChange={shortCutEndHandler}
            />
            <MSegmentControlItem
              class="flex-grow-1"
              checked={recurringEnd === 'date'}
              name="endTime"
              mId="date"
              value="date"
              label={t('modal.recurring.date')}
              onMChange={shortCutEndHandler}
            />
            <MSegmentControlItem
              checked={recurringEnd === 'repeats'}
              class="flex-grow-1"
              name="endTime"
              mId="repeats"
              value="repeats"
              label={t('modal.recurring.repeats')}
              onMChange={shortCutEndHandler}
            />
          </MSegmentControl>
        </div>
        <div className="d-flex w-100">
          {
            (recurringEnd === 'date') && (
              <input type="date" name="dateEnd" id="dateEndId" className="small w-100" />
            )
          }
          {
            (recurringEnd === 'repeats') && (
              <div className="d-flex justify-content-center align-items-center gap-2 border border-info rounded-1 w-100 px-3 py-2">
                <MButton iconLeft="dash" theme="tertiary" variant="outline" onMClick={() => setRepeatHandler(false)} />
                <span className="body-3 fw-semibold text-info">{repeat}</span>
                <MButton iconLeft="plus" theme="tertiary" variant="outline" onMClick={() => setRepeatHandler(true)} />
              </div>
            )
          }
        </div>
      </div>
      <div slot="footer" className="w-100 text-center">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.cancel')}
          theme="primary"
          variant="outline"
          isPill
          onClick={() => setPaymentScheduled(false)}
        />
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.confirm')}
          theme="primary"
          isPill
          onClick={() => setPaymentScheduled(true)}
        />
      </div>
    </MModal>
  );
}
