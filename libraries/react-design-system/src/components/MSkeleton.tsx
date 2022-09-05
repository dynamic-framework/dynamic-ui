import { PropsWithChildren } from 'react';
import ContentLoader from 'react-content-loader';

export type Props = PropsWithChildren<{
  speed?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}>;

export default function MSkeleton({
  speed = 2,
  viewBox,
  backgroundColor = '#f3f3f3',
  foregroundColor = '#ecebeb',
  children,
}: Props) {
  return (
    <ContentLoader
      speed={speed}
      viewBox={viewBox}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    >
      { children }
    </ContentLoader>
  );
}
