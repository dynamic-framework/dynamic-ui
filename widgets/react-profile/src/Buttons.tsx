import type { ButtonVariant } from '@modyo-dynamic/modyo-design-system';
import { MButton } from '@modyo-dynamic/modyo-design-system-react';

const THEMES = ['light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'];
const VARIANTS: Partial<ButtonVariant[]> = ['outline', undefined, 'text', 'ghost'];

export default function Buttons(
  {
    pill = false
  }
) {
  return (
    <>
      {THEMES.map((theme) => (
        VARIANTS.map((variant) => (
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
                  onMClick={() => (
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
                  onMClick={() => (
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
                  onMClick={() => (
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
                  onMClick={() => (
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
                  onMClick={() => (
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
                      onMClick={() => (
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
                      onMClick={() => (
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
                      onMClick={() => (
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
                      onMClick={() => (
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
                      onMClick={() => (
                        console.log('button-clicked')
                      )}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        ))
      ))}
    </>
  );
}
