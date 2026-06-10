import {
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import {
  useConfirmModalStore,
  type ConfirmModalEntry,
} from './confirmModalStore';
import DConfirmModalUI from './DConfirmModalUI';
import useDisableBodyScrollEffect from '../../hooks/useDisableBodyScrollEffect';

type Props = {
  nodeId: string;
};

export default function DConfirmModalContainer({ nodeId }: Props) {
  const store = useConfirmModalStore();
  const [entries, setEntries] = useState<ConfirmModalEntry[]>([]);

  useDisableBodyScrollEffect(entries.length > 0);

  useEffect(() => {
    const unsubscribe = store.subscribe((next) => {
      setEntries(next);
    });
    return unsubscribe;
  }, [store]);

  const portalNode = document.getElementById(nodeId);

  if (!portalNode || entries.length === 0) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {entries.map((entry) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          transition={{ duration: 0.15, ease: 'linear' }}
        >
          <div className="backdrop backdrop-confirm-modal" />
          <DConfirmModalUI entry={entry} />
        </motion.div>
      ))}
    </AnimatePresence>,
    portalNode,
  );
}
