import { useMemo } from 'react';
import ContentLoader from 'react-content-loader';

import type { PropsWithChildren } from 'react';

import { PREFIX_BS } from './config';

export type Props = PropsWithChildren<{
  speed?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}>;

export default function DSkeleton(
  {
    speed = 2,
    viewBox,
    backgroundColor,
    foregroundColor,
    children,
  }: Props,
) {
  const innerBackgroundColor = useMemo(() => {
    if (backgroundColor) {
      return backgroundColor;
    }

    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(`--${PREFIX_BS}secondary-100`);
  }, [backgroundColor]);

  const innerForegroundColor = useMemo(() => {
    if (foregroundColor) {
      return foregroundColor;
    }

    const computedStyle = getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(`--${PREFIX_BS}gray-100`);
  }, [foregroundColor]);

  return (
    <ContentLoader
      speed={speed}
      viewBox={viewBox}
      backgroundColor={innerBackgroundColor}
      foregroundColor={innerForegroundColor}
    >
      {children}
    </ContentLoader>
  );
}
