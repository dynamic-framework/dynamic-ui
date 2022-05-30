import type { ButtonVariant } from '@modyo/design-system';
import { MButton } from '@modyo/react-design-system';

interface Props {
  variant?: ButtonVariant;
  theme?: string;
  pill?: boolean
}

export default function Buttons(
  {
    variant,
    theme = 'primary',
    pill = false
  }: Props,
) {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-12">
          {`${variant} + ${theme} + default`}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            state="hover"
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            state="focus"
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            className="active"
            state="active"
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            state="disabled"
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
      </div>
      {pill && (
        <>
          <div className="row mt-3">
            <div className="col-md-12">
              {`${variant} + ${theme} + pill`}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <MButton
                theme={theme}
                variant={variant}
                text="label"
                isPill
                onMButtonClick={() => (
                  console.log('button-clicked')
                )}
              />
            </div>
            <div className="col">
              <MButton
                theme={theme}
                variant={variant}
                text="label"
                state="hover"
                isPill
                onMButtonClick={() => (
                  console.log('button-clicked')
                )}
              />
            </div>
            <div className="col">
              <MButton
                theme={theme}
                variant={variant}
                text="label"
                state="focus"
                isPill
                onMButtonClick={() => (
                  console.log('button-clicked')
                )}
              />
            </div>
            <div className="col">
              <MButton
                theme={theme}
                variant={variant}
                text="label"
                className="active"
                state="active"
                isPill
                onMButtonClick={() => (
                  console.log('button-clicked')
                )}
              />
            </div>
            <div className="col">
              <MButton
                theme={theme}
                variant={variant}
                text="label"
                state="disabled"
                isPill
                onMButtonClick={() => (
                  console.log('button-clicked')
                )}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
