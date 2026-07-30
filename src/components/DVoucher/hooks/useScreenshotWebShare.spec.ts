import { act, renderHook } from '@testing-library/react';

import useScreenshotWebShare from './useScreenshotWebShare';

const mockToBlob = jest.fn((callback: BlobCallback) => {
  callback(new Blob(['fake-image'], { type: 'image/jpeg' }));
});

jest.mock('html2canvas', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve({ toBlob: mockToBlob })),
}));

const mockShare = jest.fn<Promise<void>, [{ files: File[] }]>().mockResolvedValue(undefined);
const mockCanShare = jest.fn().mockReturnValue(true);

describe('useScreenshotWebShare', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Object.defineProperty(navigator, 'share', { value: mockShare, configurable: true });
    Object.defineProperty(navigator, 'canShare', { value: mockCanShare, configurable: true });
  });

  it('shares a file with the default file name when none is provided', async () => {
    const { result } = renderHook(() => useScreenshotWebShare());
    result.current.shareRef.current = document.createElement('div');

    await act(async () => {
      await result.current.share();
    });

    const [{ files: [sharedFile] }] = mockShare.mock.calls[0];
    expect(sharedFile.name).toBe('voucher.jpeg');
  });

  it('always appends the .jpeg extension, even if the caller includes one', async () => {
    const { result } = renderHook(() => useScreenshotWebShare());
    result.current.shareRef.current = document.createElement('div');

    await act(async () => {
      await result.current.share('receipt.png');
    });

    const [{ files: [sharedFile] }] = mockShare.mock.calls[0];
    expect(sharedFile.name).toBe('receipt.png.jpeg');
  });
});
