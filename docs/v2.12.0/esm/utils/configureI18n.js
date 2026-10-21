import { __rest } from 'tslib';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

async function configureI8n(resources, _a = {}) {
    var { lng = 'en', fallbackLng = 'en' } = _a, config = __rest(_a, ["lng", "fallbackLng"]);
    return i18n
        .use(initReactI18next)
        .init(Object.assign({ resources,
        lng, initImmediate: true, fallbackLng, interpolation: {
            escapeValue: false,
            prefix: '{',
            suffix: '}',
            // skipOnVariables: false,
        } }, config))
        .then((t) => t);
}

export { configureI8n as default };
//# sourceMappingURL=configureI18n.js.map
