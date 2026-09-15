import hasLabelContent from '../hasLabelContent';

describe('hasLabelContent', () => {
  it('should treat numeric zero as content', () => {
    expect(hasLabelContent(0)).toBe(true);
    expect(hasLabelContent(42)).toBe(true);
  });

  it('should treat absent, empty and boolean labels as no content', () => {
    expect(hasLabelContent(undefined)).toBe(false);
    expect(hasLabelContent(null)).toBe(false);
    expect(hasLabelContent('')).toBe(false);
    expect(hasLabelContent(false)).toBe(false);
    expect(hasLabelContent(true)).toBe(false);
  });

  it('should treat text and nodes as content', () => {
    expect(hasLabelContent('Name')).toBe(true);
    expect(hasLabelContent(<span>Name</span>)).toBe(true);
  });
});
