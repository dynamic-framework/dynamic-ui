import { useCallback } from 'react';
import useProvidedRefOrCreate from './useProvidedRefOrCreate.js';

function useDisableInputWheel(ref) {
    const inputRef = useProvidedRefOrCreate(ref);
    const handleOnWheel = useCallback((event) => {
        var _a;
        event.stopPropagation();
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
    }, [inputRef]);
    return {
        handleOnWheel,
    };
}

export { useDisableInputWheel as default };
//# sourceMappingURL=useDisableInputWheel.js.map
