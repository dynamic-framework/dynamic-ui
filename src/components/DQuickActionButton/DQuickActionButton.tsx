import { useMemo } from 'react';
import classNames from 'classnames';

import DIcon from '../DIcon';
import { PREFIX_BS } from '../config';

import type { BaseProps } from '../interface';

type Props = BaseProps & {
  line1: string;
  line2: string;
  actionIcon?: string;
  actionIconTheme?: string;
  actionIconFamilyClass?: string;
  actionIconFamilyPrefix?: string;
  representativeImage?: string;
  representativeIcon?: string;
  representativeIconTheme?: string;
  representativeIconHasCircle?: boolean;
  representativeIconFamilyClass?: string;
  representativeIconFamilyPrefix?: string;
  href?: string;
  hrefTarget?: string;
  onClick?: () => void;
};

export default function DQuickActionButton(
  {
    line1,
    line2,
    className,
    actionIcon,
    actionIconFamilyClass,
    actionIconFamilyPrefix,
    actionIconTheme,
    representativeImage,
    representativeIcon,
    representativeIconTheme = 'secondary',
    representativeIconHasCircle = false,
    representativeIconFamilyClass,
    representativeIconFamilyPrefix,
    onClick,
    href,
    hrefTarget,
    style,
    dataAttributes,
  }: Props,
) {
  const Tag = useMemo(() => {
    if (href) {
      return 'a';
    }

    if (onClick) {
      return 'button';
    }

    return 'div';
  }, [href, onClick]);

  const tagProps = useMemo(() => {
    if (href) {
      return {
        className: classNames(
          'd-quick-action-button',
          'd-quick-action-button-feedback',
          className,
        ),
        href,
        target: hrefTarget,
      };
    }

    if (onClick) {
      return {
        className: classNames(
          'd-quick-action-button',
          'd-quick-action-button-feedback',
          className,
        ),
        onClick,
      };
    }

    return {
      className: classNames('d-quick-action-button', className),
    };
  }, [
    className,
    href,
    hrefTarget,
    onClick,
  ]);

  return (
    <Tag
      style={style}
      {...tagProps}
      {...dataAttributes}
    >
      {representativeIcon && (
        <DIcon
          className="d-quick-action-button-representative-icon"
          size={
            representativeIconHasCircle
              ? `var(--${PREFIX_BS}quick-action-button-representative-icon-size)`
              : `var(--${PREFIX_BS}quick-action-button-representative-image-size)`
          }
          icon={representativeIcon}
          hasCircle={representativeIconHasCircle}
          theme={representativeIconTheme}
          familyClass={representativeIconFamilyClass}
          familyPrefix={representativeIconFamilyPrefix}
        />
      )}
      {representativeImage && (
        <img
          className="d-quick-action-button-representative-image"
          src={representativeImage}
          alt=""
        />
      )}
      <div className="d-quick-action-button-content">
        <div className="d-quick-action-button-text">
          <span className="d-quick-action-button-line1">{line1}</span>
          <small className="d-quick-action-button-line2">{line2}</small>
        </div>
      </div>
      {actionIcon && (
        <DIcon
          className="d-quick-action-button-action-icon"
          icon={actionIcon}
          size={`var(--${PREFIX_BS}quick-action-button-action-icon-size)`}
          theme={actionIconTheme}
          familyClass={actionIconFamilyClass}
          familyPrefix={actionIconFamilyPrefix}
        />
      )}
    </Tag>
  );
}
