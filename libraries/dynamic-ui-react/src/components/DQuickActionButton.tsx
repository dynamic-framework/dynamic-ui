import { useCallback, useMemo } from 'react';

import type { CSSProperties } from 'react';

import DIcon from './DIcon';
import DButton from './DButton';
import { PREFIX_BS } from './config';

type Props = {
  line1: string;
  line2: string;
  actionLinkText?: string;
  actionLinkTheme?: string;
  actionIcon?: string;
  secondaryActionIcon?: string;
  actionIconFamilyClass?: string;
  actionIconFamilyPrefix?: string;
  representativeImage?: string;
  representativeIcon?: string;
  representativeIconTheme?: string;
  representativeIconHasCircle?: boolean;
  representativeIconFamilyClass?: string;
  representativeIconFamilyPrefix?: string;
  onClick?: () => void;
  onClickSecondary?: () => void;
  style?: CSSProperties;
};

export default function DQuickActionButton(
  {
    line1,
    line2,
    actionLinkText,
    actionLinkTheme = 'secondary',
    actionIcon,
    secondaryActionIcon,
    actionIconFamilyClass,
    actionIconFamilyPrefix,
    representativeImage,
    representativeIcon,
    representativeIconTheme = 'secondary',
    representativeIconHasCircle = false,
    representativeIconFamilyClass,
    representativeIconFamilyPrefix,
    onClick,
    onClickSecondary,
    style,
  }: Props,
) {
  const globalClickHandler = useCallback(() => {
    if (actionLinkText) {
      return;
    }
    onClick?.();
  }, [actionLinkText, onClick]);

  const actionLinkClickHandler = useCallback(() => {
    if (!actionLinkText) {
      return;
    }
    onClick?.();
  }, [actionLinkText, onClick]);

  const secondaryActionLinkClickHandler = useCallback(() => {
    onClickSecondary?.();
  }, [onClickSecondary]);

  const Tag = useMemo(
    () => (actionLinkText ? 'div' : 'button'),
    [actionLinkText],
  );

  return (
    <Tag
      className="d-quick-action-button"
      onClick={!actionLinkText ? globalClickHandler : undefined}
      style={style}
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
      {secondaryActionIcon && (
        <DButton
          className="d-quick-action-button-secondary-action-link"
          type="button"
          variant="link"
          iconStart={secondaryActionIcon}
          iconStartFamilyClass={actionIconFamilyClass}
          iconStartFamilyPrefix={actionIconFamilyPrefix}
          theme={actionLinkTheme}
          onClick={secondaryActionLinkClickHandler}
          isStopPropagationEnabled
        />
      )}
      {actionLinkText && !actionIcon && (
        <DButton
          className="d-quick-action-button-action-link"
          type="button"
          variant="link"
          theme={actionLinkTheme}
          text={actionLinkText}
          onClick={actionLinkClickHandler}
          isStopPropagationEnabled
        />
      )}
      {actionIcon && !actionLinkText && (
        <DIcon
          className="d-quick-action-button-action-icon"
          icon={actionIcon}
          size={`var(--${PREFIX_BS}quick-action-button-action-icon-size)`}
          familyClass={actionIconFamilyClass}
          familyPrefix={actionIconFamilyPrefix}
        />
      )}
    </Tag>
  );
}
