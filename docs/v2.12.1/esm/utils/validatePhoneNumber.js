import { PhoneNumberUtil } from 'google-libphonenumber';

const phoneUtil = PhoneNumberUtil.getInstance();
function validatePhoneNumber(phone) {
    try {
        return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    }
    catch (error) {
        return false;
    }
}

export { validatePhoneNumber as default };
//# sourceMappingURL=validatePhoneNumber.js.map
