import { useState } from 'react';

import useDToast from '../../src/components/DToastContainer/useDToast';
import DButton from '../../src/components/DButton';
import DToastContainer from '../../src/components/DToastContainer';
import { DContextProvider } from '../../src';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';

export function UseToastExample() {
  const { toast } = useDToast();
  return (
    <>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
      />
    </>
  );
}

export function UseToastMaterialExample() {
  const { toast } = useDToast();
  return (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example2',
            },
          )
        )}
      />
      <DToastContainer
        position="top-right"
        containerId="example2"
        transition="flip"
      />
    </DContextProvider>
  );
}

export function UseToastTransitionExample() {
  const { toast } = useDToast();
  const transitions = ['slide', 'flip', 'bounce', 'zoom'];
  const [transition, setTransition] = useState(transitions[0]);

  return (
    <div className="d-flex flex-column gap-4">
      <select
        className="form-select"
        onChange={({ target: { value } }) => setTransition(value)}
      >
        {transitions.map((item) => (
          <option value={item} key={item}>{item.toUpperCase()}</option>
        ))}
      </select>
      <DButton
        text="Show Toast"
        onClick={() => (
          toast(
            'Example',
            {
              type: 'info',
              showClose: true,
              autoClose: 500,
              containerId: 'example3',
            },
          )
        )}
      />
      <DToastContainer
        containerId="example3"
        position="top-right"
        transition={transition as 'slide' | 'flip' | 'bounce' | 'zoom'}
      />
    </div>
  );
}
