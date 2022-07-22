import React from 'react'
import ContentLoader from "react-content-loader"

export declare interface SkeletonProps {
  speed?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  children?: JSX.Element;
}

export const MSkeleton = (props: SkeletonProps ) => {
  return (
    <ContentLoader
      {...props}
    >
    { props.children }
  </ContentLoader>
  )
}
