/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  MFormCheck,
  MSelect,
  MFormSwitch,
  MSegmentControl,
  MSegmentControlItem,
  MCounter,
} from '@modyolabs/react-design-system';
import { useTranslation } from 'react-i18next';
import useStartRepeat from '../hooks/useStartRepeat';

export default function StartRepeatSelector() {
  const { t } = useTranslation();
  const {
    // Start Repeat
    toggleAutoRepeat,
    setToggleAutoRepeat,
    autoRepeatType,
    initialStartRepeat,
    handleWeekDays,
    handleAutoRepeatType,
    // End Repeat
    toggleEndRepeat,
    setToggleEndRepeat,
    occurrences,
    endRepeatType,
    handleEndRepeatType,
    handleOccurrences,
  } = useStartRepeat();

  const counterHandler = ({ detail }: CustomEvent) => {
    handleOccurrences(detail as number);
  };
  return (
    <>
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
                {Object.values(initialStartRepeat.weekly).map((day) => (
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
                options={Object.values(initialStartRepeat.monthly)}
                variant="full"
                theme="info"
                onMChange={({ detail }: CustomEvent<{ label: string, value: string }>) => {
                  const data = detail;
                  console.log(data);
                }}
                labelExtractor={(item) => item?.name}
                valueExtractor={(item) => item?.id}
              />
            )}
            {autoRepeatType === 'custom' && (
              <small>{initialStartRepeat.custom.custom.name}</small>
            )}
          </div>
        </>
      )}
      {toggleAutoRepeat && (
        <>
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
              <div className="d-flex w-100">
                {endRepeatType === 'date' && (
                  <input type="date" name="dateEnd" id="dateEndId" className="small w-100" />
                )}
                {endRepeatType === 'occurrences' && (
                  <MCounter className="w-100" mId="counterOccurrences" min={1} max={100} value={occurrences} onMClick={counterHandler} onMInput={counterHandler} />
                )}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
