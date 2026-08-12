import { act, renderHook } from '@testing-library/react';

import useScreenshotDownload from './useScreenshotDownload';

const mockToBlob = jest.fn((callback: BlobCallback) => {
  callback(new Blob(['fake-image'], { type: 'image/jpeg' }));
});

jest.mock('html2canvas', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve({ toBlob: mockToBlob })),
}));

describe('useScreenshotDownload', () => {
  let clickSpy: jest.SpyInstance;
  let createElementSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    window.URL.createObjectURL = jest.fn(() => 'blob:mock-url');
    window.URL.revokeObjectURL = jest.fn();
    clickSpy = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    createElementSpy = jest.spyOn(document, 'createElement');
  });

  afterEach(() => {
    clickSpy.mockRestore();
    createElementSpy.mockRestore();
  });

  it('downloads with the default file name when none is provided', async () => {
    const { result } = renderHook(() => useScreenshotDownload());
    result.current.downloadRef.current = document.createElement('div');

    await act(async () => {
      await result.current.download();
    });

    const anchor = createElementSpy.mock.results.find(
      (r) => (r.value as HTMLElement).tagName === 'A',
    )?.value as HTMLAnchorElement;

    expect(anchor.download).toBe('voucher.jpg');
  });

  it('always appends the .jpg extension, even if the caller includes one', async () => {
    const { result } = renderHook(() => useScreenshotDownload());
    result.current.downloadRef.current = document.createElement('div');

    await act(async () => {
      await result.current.download('receipt.png');
    });

    const anchor = createElementSpy.mock.results.find(
      (r) => (r.value as HTMLElement).tagName === 'A',
    )?.value as HTMLAnchorElement;

    expect(anchor.download).toBe('receipt.png.jpg');
  });

  it('falls back to the default base name when fileName is blank', async () => {
    const { result } = renderHook(() => useScreenshotDownload());
    result.current.downloadRef.current = document.createElement('div');

    await act(async () => {
      await result.current.download('   ');
    });

    const anchor = createElementSpy.mock.results.find(
      (r) => (r.value as HTMLElement).tagName === 'A',
    )?.value as HTMLAnchorElement;

    expect(anchor.download).toBe('voucher.jpg');
  });

  it('throws when the ref is not set', async () => {
    const { result } = renderHook(() => useScreenshotDownload());

    await expect(result.current.download()).rejects.toThrow('set the clipRef');
  });
});
