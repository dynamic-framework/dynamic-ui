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
    expect(hasLabelContent(BigInt(42))).toBe(true);
  });

  // `ReactNode` includes iterables, and `label={items.map(...)}` over an empty
  // or fully skipped list renders nothing — an empty <label> otherwise.
  it('should look inside iterables instead of taking them at face value', () => {
    expect(hasLabelContent([])).toBe(false);
    expect(hasLabelContent([false, null, undefined])).toBe(false);
    expect(hasLabelContent([''])).toBe(false);
    expect(hasLabelContent([[], [false]])).toBe(false);
  });

  // Reading a one-shot iterator here would exhaust it, and the component goes on
  // to render the same value — the label would vanish because we checked for it.
  it('should not consume a non-array iterable', () => {
    function* names() {
      yield 'Name';
    }
    const generator = names();

    expect(hasLabelContent(generator)).toBe(true);
    expect([...generator]).toEqual(['Name']);
  });

  it('should treat an iterable with any renderable entry as content', () => {
    expect(hasLabelContent(['Name'])).toBe(true);
    expect(hasLabelContent([false, 'Name'])).toBe(true);
    expect(hasLabelContent([null, 0])).toBe(true);
    expect(hasLabelContent([<span key="a">Name</span>])).toBe(true);
    expect(hasLabelContent([[], ['Name']])).toBe(true);
  });
});
