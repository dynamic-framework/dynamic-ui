import { MButton } from '@modyo/react-design-system';

interface Props {
  variant?: 'block' | 'pill' | 'text';
  theme?: string;
}

export default function Buttons(
  {
    variant = 'pill',
    theme = 'primary',
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
      <div className="row mt-3">
        <div className="col-md-12">
          {`${variant} + ${theme} + outline`}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <MButton
            theme={theme}
            variant={variant}
            text="label"
            outline
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
            outline
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
            outline
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
            state="active"
            outline
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
            outline
            onMButtonClick={() => (
              console.log('button-clicked')
            )}
          />
        </div>
      </div>
    </>
  );
}
