import React, { PropsWithChildren, ReactNode } from 'react';
import ContentLoader from 'react-content-loader';

export interface SkeletonProps {
  speed?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  children?: PropsWithChildren<ReactNode>;
}

export default function MSkeleton({
  speed = 2,
  viewBox,
  backgroundColor = '#f3f3f3',
  foregroundColor = '#ecebeb',
  children,
}: SkeletonProps) {
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
