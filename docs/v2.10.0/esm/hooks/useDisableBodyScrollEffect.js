import { useEffect } from 'react';

/* eslint-disable no-lonely-if */
function useDisableBodyScrollEffect(disable) {
    useEffect(() => {
        let observer;
        let timer;
        const lock = () => {
            const { clientWidth } = document.documentElement;
            const { innerWidth } = window;
            const scrollbarWidth = clientWidth ? innerWidth - clientWidth : 0;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${Math.max(0, scrollbarWidth)}px`;
        };
        const unlock = () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
        if (disable) {
            lock();
        }
        else {
            // Wait until all portal elements are removed (exit animations done)
            if (document.querySelector('.portal')) {
                observer = new MutationObserver(() => {
                    if (!document.querySelector('.portal')) {
                        unlock();
                        observer === null || observer === void 0 ? void 0 : observer.disconnect();
                    }
                });
                observer.observe(document.body, { childList: true, subtree: true });
                // Fallback in case observer misses changes
                timer = window.setTimeout(() => {
                    unlock();
                    observer === null || observer === void 0 ? void 0 : observer.disconnect();
                }, 300);
            }
            else {
                unlock();
            }
        }
        return () => {
            if (observer)
                observer.disconnect();
            if (timer)
                window.clearTimeout(timer);
        };
    }, [disable]);
}

export { useDisableBodyScrollEffect as default };
//# sourceMappingURL=useDisableBodyScrollEffect.js.map
