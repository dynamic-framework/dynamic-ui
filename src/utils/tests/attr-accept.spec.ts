import attrAccept from '../attr-accept';

function createFile({ name, type }: { name: string; type: string }): File {
  return { name, type } as File;
}

describe('attrAccept', () => {
  it('should accept file with matching extension', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, '.png')).toBe(true);
    expect(attrAccept(file, '.jpg')).toBe(false);
  });

  it('should accept file with matching mime type', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, 'image/png')).toBe(true);
    expect(attrAccept(file, 'image/jpeg')).toBe(false);
  });

  it('should accept file with wildcard mime type', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, 'image/*')).toBe(true);
    expect(attrAccept(file, 'video/*')).toBe(false);
  });

  it('should accept file with array of accepted types', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, ['.jpg', 'image/png'])).toBe(true);
    expect(attrAccept(file, ['.jpg', 'image/jpeg'])).toBe(false);
  });

  it('should accept file with comma separated string', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, '.jpg, .png')).toBe(true);
    expect(attrAccept(file, '.jpg, .gif')).toBe(false);
  });

  it('should accept any file if acceptedFiles is empty array', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, [])).toBe(true);
  });

  it('should accept any file if acceptedFiles is empty string', () => {
    const file = createFile({ name: 'photo.png', type: 'image/png' });
    expect(attrAccept(file, '')).toBe(true);
  });

  it('should accept file with no name or type if acceptedFiles is empty', () => {
    const file = createFile({ name: '', type: '' });
    expect(attrAccept(file, '')).toBe(true);
    expect(attrAccept(file, [])).toBe(true);
  });

  it('should accept file with extension match (edge case)', () => {
    const file = createFile({ name: 'document.PDF', type: 'application/pdf' });
    expect(attrAccept(file, '.pdf')).toBe(true);
    expect(attrAccept(file, '.PDF')).toBe(true);
    expect(attrAccept(file, '.doc')).toBe(false);
  });
});
