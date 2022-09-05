/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  MButton,
  MModal,
  MCalendar,
  MFormSwitch,
  MSegmentControl,
  MSegmentControlItem,
  MFormCheck,
  MSelect,
  MCounter,
} from '@modyolabs/react-design-system';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSchedule from '../hooks/useSchedule';

interface Props {
  onAccept: (accepted: boolean) => void;
}

export default function ModalSchedule(
  {
    onAccept,
  }: Props,
) {
  const { t } = useTranslation();
  const {
    scheduleDay,
    setScheduleDay,
    toggleAutoRepeat,
    setToggleAutoRepeat,
    autoRepeatType,
    handleAutoRepeatType,
    weekDays,
    handleWeekDays,
    monthlyCycles,
    toggleEndRepeat,
    setToggleEndRepeat,
    endRepeatType,
    handleEndRepeatType,
    occurrences,
    handleOccurrences,
    scheduleDate,
  } = useSchedule(onAccept);

  const [date, setDate] = useState(new Date());
  const counterHandler = ({ detail }: CustomEvent) => {
    handleOccurrences(detail as number);
  };

  return (
    <MModal
      mId="modalSchedulePayment"
      centered
      static
      closeText="Cancel"
      scrollable
    >
      <div slot="header" className="w-100 mt-3 mb-0 mx-2">
        <h5 className="fw-semibold text-start m-0">
          {t('modal.scheduleCalendar.title')}
        </h5>
      </div>
      <div
        slot="body"
        className="text-center px-3"
      >
        <div className="mb-4">
          <MCalendar
            date={scheduleDay}
            setDate={(value: Date) => setScheduleDay(value)}
            inline
          />
        </div>
        <div className="d-flex w-100 mb-3">
          <MFormSwitch
            mId="autoRepeat"
            label="Auto Repeat"
            isChecked={toggleAutoRepeat}
            onMChange={() => setToggleAutoRepeat((state) => !state)}
          />
        </div>
        {toggleAutoRepeat && (
          <>
            <div className="mb-3 w-100">
              <MSegmentControl class="scroll-h">
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={autoRepeatType === 'weekly'}
                  name="repeatTime"
                  mId="weekly"
                  value="weekly"
                  label={t('modal.recurring.weekly')}
                  onMChange={handleAutoRepeatType}
                />
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={autoRepeatType === 'monthly'}
                  name="repeatTime"
                  mId="monthly"
                  value="monthly"
                  label={t('modal.recurring.monthly')}
                  onMChange={handleAutoRepeatType}
                />
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={autoRepeatType === 'custom'}
                  name="repeatTime"
                  mId="custom"
                  value="custom"
                  label={t('modal.recurring.custom')}
                  onMChange={handleAutoRepeatType}
                />
              </MSegmentControl>
            </div>
            <div className="d-flex w-100 mb-4">
              {autoRepeatType === 'weekly' && (
                <div className="d-flex justify-content-between w-100 m-2">
                  {Object.values(weekDays).map((day) => (
                    <MFormCheck
                      key={day.id}
                      type="checkbox"
                      mId={day.id}
                      value={day.name}
                      label={day.name}
                      isButton
                      checked={day.checked}
                      onMChange={() => handleWeekDays(day)}
                    />
                  ))}
                </div>
              )}
              {autoRepeatType === 'monthly' && (
                <MSelect
                  className="w-100"
                  mId="selectMonthlyRecurring"
                  options={monthlyCycles}
                  variant="full"
                  theme="info"
                />
              )}
              { autoRepeatType === 'custom' && (
                <small>Custom</small>
              )}
            </div>
            <div className="d-flex w-100 mb-4">
              <MFormSwitch
                mId="ends"
                label="Ends"
                isChecked={toggleEndRepeat}
                onMChange={() => setToggleEndRepeat((state) => !state)}
              />
            </div>
            {toggleEndRepeat && (
            <>
              <div className="mb-3 w-100">
                <MSegmentControl class="scroll-h">
                  <MSegmentControlItem
                    class="flex-grow-1"
                    checked={endRepeatType === 'oneYear'}
                    name="endTime"
                    mId="oneYear"
                    value="oneYear"
                    label={t('modal.recurring.oneYear')}
                    onMChange={handleEndRepeatType}
                  />
                  <MSegmentControlItem
                    class="flex-grow-1"
                    checked={endRepeatType === 'date'}
                    name="endTime"
                    mId="date"
                    value="date"
                    label={t('modal.recurring.date')}
                    onMChange={handleEndRepeatType}
                  />
                  <MSegmentControlItem
                    checked={endRepeatType === 'occurrences'}
                    class="flex-grow-1"
                    name="endTime"
                    mId="occurrences"
                    value="occurrences"
                    label={t('modal.recurring.occurrences')}
                    onMChange={handleEndRepeatType}
                  />
                </MSegmentControl>
              </div>
              <div className="d-flex w-100 justify-content-center">
                {endRepeatType === 'date' && (
                  <MCalendar date={date} setDate={setDate} inline={false} />
                )}
                { endRepeatType === 'occurrences' && (
                  <MCounter className="w-100" mId="counterOccurrences" min={1} max={100} value={occurrences} onMClick={counterHandler} onMInput={counterHandler} />
                )}
              </div>
            </>
            )}
          </>
        )}

      </div>
      <div slot="footer" className="d-flex flex-column align-items-center w-100 m-3">
        <MButton
          data-bs-dismiss="modal"
          class="mb-2 w-50"
          text={t('button.confirm')}
          theme="primary"
          isPill
          onClick={scheduleDate}
        />
      </div>
    </MModal>
  );
}
