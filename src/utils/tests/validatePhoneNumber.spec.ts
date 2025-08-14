import validatePhoneNumber from '../validatePhoneNumber';

describe('validatePhoneNumber', () => {
  it('should return true for valid phone number', () => {
    expect(validatePhoneNumber('+14155552671')).toBe(true); // US
    expect(validatePhoneNumber('+34699111222')).toBe(true); // ES
  });

  it('should return false for invalid phone number', () => {
    expect(validatePhoneNumber('12345')).toBe(false);
    expect(validatePhoneNumber('not-a-phone')).toBe(false);
    expect(validatePhoneNumber('+999999999999')).toBe(false);
  });

  it('should return false for empty string', () => {
    expect(validatePhoneNumber('')).toBe(false);
  });

  it('should return false for malformed input', () => {
    expect(validatePhoneNumber(undefined as never)).toBe(false);
    expect(validatePhoneNumber(null as never)).toBe(false);
  });
});
