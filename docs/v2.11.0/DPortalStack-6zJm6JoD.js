'use strict';

var jsxRuntime = require('react/jsx-runtime');
var framerMotion = require('framer-motion');

function DPortalStack({ stack }) {
    return (jsxRuntime.jsx(framerMotion.AnimatePresence, { children: stack.flatMap(({ Component, name, payload, }) => [
            jsxRuntime.jsx(framerMotion.motion.div, { className: "backdrop", initial: { opacity: 0 }, animate: { opacity: 0.5 }, exit: { opacity: 0, transition: { delay: 0.3 } }, transition: { duration: 0.15, ease: 'linear' } }, `${name}-backdrop`),
            jsxRuntime.jsx(Component, { name: name, payload: payload }, name),
        ]) }));
}

exports.default = DPortalStack;
//# sourceMappingURL=DPortalStack-6zJm6JoD.js.map
