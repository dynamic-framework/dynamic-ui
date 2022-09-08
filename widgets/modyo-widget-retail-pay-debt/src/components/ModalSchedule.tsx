import {
  MButton,
  MModal,
  MCalendar,
  MFormSwitch,
  MSegmentControl,
  MSegmentControlItem,
} from '@modyolabs/react-design-system';
import type { ModalProps } from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';

import useSchedule from '../hooks/useSchedule';
import StartRepeatOptions from './RepeatOptionStart';

export default function ModalSchedule(
  {
    payload: {
      onAccept,
    },
    closeModal,
  }: ModalProps,
) {
  const { t } = useTranslation();
  const {
    scheduleDay,
    setScheduleDay,
    scheduleDate,
    toggleStart,
    setToggleStart,
    frequencyStart,
    optionStart,
    setOptionStart,
    handleRepeatStart,
    toggleEnd,
    setToggleEnd,
    frequencyEnd,
    handleRepeatEnd,
    // TODO: use generic type to pass the type of ModalPayload
  } = useSchedule(onAccept as (accepted: boolean) => void);

  return (
    <MModal
      name="modalSchedulePayment"
      centered
      static
      showCloseButton
      closeText="Cancel"
      onMClose={() => closeModal({ fromModal: true })}
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
        {/* <StartRepeatSelector /> */}
        <div className="d-flex w-100 mb-3">
          <MFormSwitch
            mId="autoRepeat"
            label={t('modal.recurring.repeat')}
            isChecked={toggleStart}
            onMChange={() => setToggleStart((state) => !state)}
          />
        </div>
        {toggleStart && (
          <>
            <div className="mb-3 w-100">
              <MSegmentControl class="scroll-h">
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={frequencyStart === 'weekly'}
                  name="repeatTime"
                  mId="weekly"
                  value="weekly"
                  label={t('modal.recurring.weekly')}
                  onMChange={handleRepeatStart}
                />
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={frequencyStart === 'monthly'}
                  name="repeatTime"
                  mId="monthly"
                  value="monthly"
                  label={t('modal.recurring.monthly')}
                  onMChange={handleRepeatStart}
                />
                <MSegmentControlItem
                  class="flex-grow-1"
                  checked={frequencyStart === 'custom'}
                  name="repeatTime"
                  mId="custom"
                  value="custom"
                  label={t('modal.recurring.custom')}
                  onMChange={handleRepeatStart}
                />
              </MSegmentControl>
            </div>
            <StartRepeatOptions
              frequency={frequencyStart}
              option={optionStart}
              setOption={setOptionStart}
            />
          </>
        )}
        {toggleStart && (
          <>
            <div className="d-flex w-100 mb-4">
              <MFormSwitch
                mId="ends"
                label={t('modal.recurring.ends')}
                isChecked={toggleEnd}
                onMChange={() => setToggleEnd((state) => !state)}
              />
            </div>
            {toggleEnd && (
              <div className="mb-3 w-100">
                <MSegmentControl class="scroll-h">
                  <MSegmentControlItem
                    class="flex-grow-1"
                    checked={frequencyEnd === 'oneYear'}
                    name="endTime"
                    mId="oneYear"
                    value="oneYear"
                    label={t('modal.recurring.oneYear')}
                    onMChange={handleRepeatEnd}
                  />
                  <MSegmentControlItem
                    class="flex-grow-1"
                    checked={frequencyEnd === 'date'}
                    name="endTime"
                    mId="date"
                    value="date"
                    label={t('modal.recurring.date')}
                    onMChange={handleRepeatEnd}
                  />
                  <MSegmentControlItem
                    checked={frequencyEnd === 'occurrences'}
                    class="flex-grow-1"
                    name="endTime"
                    mId="occurrences"
                    value="occurrences"
                    label={t('modal.recurring.occurrences')}
                    onMChange={handleRepeatEnd}
                  />
                </MSegmentControl>
              </div>
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
