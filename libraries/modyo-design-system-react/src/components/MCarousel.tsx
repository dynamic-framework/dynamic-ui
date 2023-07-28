/* eslint-disable react/jsx-props-no-spreading */
import { Options, Splide, SplideProps } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  props?: Omit<SplideProps, 'options'>;
  options?: Options;
}>;

export default function MCarousel({
  children,
  className,
  options,
  ...props
}: Props) {
  return (
    <Splide
      className={classNames('m-carousel', className)}
      options={options}
      {...props}
    >
      {children}
    </Splide>
  );
}
