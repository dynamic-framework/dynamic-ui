import { jsx } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';

function DPortalStack({ stack }) {
    return (jsx(AnimatePresence, { children: stack.flatMap(({ Component, name, payload, }) => [
            jsx(motion.div, { className: "backdrop", initial: { opacity: 0 }, animate: { opacity: 0.5 }, exit: { opacity: 0, transition: { delay: 0.3 } }, transition: { duration: 0.15, ease: 'linear' } }, `${name}-backdrop`),
            jsx(Component, { name: name, payload: payload }, name),
        ]) }));
}

export { DPortalStack as default };
//# sourceMappingURL=DPortalStack-D1-GGU4C.js.map
