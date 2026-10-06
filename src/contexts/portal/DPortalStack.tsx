/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';

import type { FC } from 'react';

type Props = {
  stack: Array<{
    name: string;
    Component: FC<{ name: string; payload: any }>;
    payload: unknown;
  }>;
};

export default function DPortalStack({ stack }: Props) {
  return (
    <AnimatePresence>
      {stack.flatMap((
        {
          Component,
          name,
          payload,
        },
      ) => [
        <motion.div
          key={`${name}-backdrop`}
          className="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ duration: 0.15, ease: 'linear' }}
        />,
        <Component
          key={name}
          name={name}
          payload={payload}
        />,
      ])}
    </AnimatePresence>
  );
}
