import React from 'react';
import classNames from 'classnames';
import { DataAttributes } from '../interface';

export interface DPaginatorProps {
  total: number;
  current?: number;
  onPageChange?: (page: number) => void;
  maxWidth?: number;
  className?: string;
  extraClassName?: string;
  pageItemClassName?: string;
  pageLinkClassName?: string;
  activeItemClassName?: string;
  disabledItemClassName?: string;
  disabledLinkClassName?: string;
  navClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
  previousLabel?: React.ReactNode;
  nextLabel?: React.ReactNode;
  ariaPreviousLabel?: string;
  ariaNextLabel?: string;
  renderNav?: boolean;
  ariaCurrentAttr?: boolean;
  linkHref?: 'hash' | 'omit';
  dataAttributes?: DataAttributes;
}

export default function DPaginator({
  total,
  current = 1,
  onPageChange,
  maxWidth = 5, // maxWidth is now interpreted as a pixel width, not a page count

  className,
  extraClassName,
  pageItemClassName,
  pageLinkClassName,
  activeItemClassName,
  disabledItemClassName,
  disabledLinkClassName,
  navClassName,
  previousClassName,
  nextClassName,
  previousLabel = <span aria-hidden="true">&laquo;</span>,
  nextLabel = <span aria-hidden="true">&raquo;</span>,
  ariaPreviousLabel = 'Previous',
  ariaNextLabel = 'Next',
  renderNav = true,
  ariaCurrentAttr = true,
  linkHref,
  dataAttributes,
}: DPaginatorProps) {
  if (total < 2) return null;
  const pageCount = total;
  const currentPage = Math.max(1, Math.min(current, pageCount));
  // Calculate how many page numbers fit in maxWidth (in px)
  // Assume each page item is ~40px wide (Bootstrap default)
  const pageItemPx = 40;
  const maxPageButtons = Math.max(5, Math.floor((maxWidth ?? 200) / pageItemPx));
  const showEllipsis = maxPageButtons < pageCount;
  const pages: (number | string)[] = [];

  if (!showEllipsis) {
    for (let i = 1; i <= pageCount; i += 1) pages.push(i);
  } else {
    const neighbors = Math.max(1, Math.floor((maxPageButtons - 4) / 2));
    let left = Math.max(2, currentPage - neighbors);
    let right = Math.min(pageCount - 1, currentPage + neighbors);
    if (currentPage - 1 <= neighbors) {
      right = 1 + 2 * neighbors;
      left = 2;
    }
    if (pageCount - currentPage <= neighbors) {
      left = pageCount - 2 * neighbors;
      right = pageCount - 1;
    }
    left = Math.max(2, left);
    right = Math.min(pageCount - 1, right);
    pages.push(1);
    if (left > 2) pages.push('ellipsis-left');
    for (let i = left; i <= right; i += 1) pages.push(i);
    if (right < pageCount - 1) pages.push('ellipsis-right');
    pages.push(pageCount);
  }

  const handleClick = (page: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (page !== currentPage && onPageChange) onPageChange(page);
  };

  const getLink = (page: number) => {
    if (linkHref === 'hash') return `#page-${page}`;
    if (linkHref === 'omit') return undefined;
    return '#';
  };

  return (
    <nav
      className={classNames(navClassName)}
      aria-label="Pagination navigation"
      {...dataAttributes}
    >
      <ul className={classNames('pagination', className, extraClassName)}>
        {renderNav && (
          <li
            className={classNames('page-item page-item-arrow', pageItemClassName, previousClassName, currentPage === 1 && (disabledItemClassName || 'disabled'))}
          >
            {currentPage === 1 ? (
              <span
                className={classNames('page-link', pageLinkClassName)}
                aria-label={ariaPreviousLabel}
              >
                {previousLabel}
              </span>
            ) : (
              <a
                className={classNames('page-link', pageLinkClassName)}
                href={getLink(currentPage - 1) || '#'}
                tabIndex={0}
                aria-label={ariaPreviousLabel}
                onClick={(e) => handleClick(currentPage - 1, e)}
              >
                {previousLabel}
              </a>
            )}
          </li>
        )}
        {pages.map((page) => {
          if (page === 'ellipsis-left' || page === 'ellipsis-right') {
            return (
              <li key={page} className={classNames('page-item disabled')} aria-hidden="true">
                <span className={classNames('page-link', pageLinkClassName)} style={{ pointerEvents: 'none' }}>…</span>
              </li>
            );
          }
          return (
            <li
              key={page}
              className={classNames(
                'page-item',
                pageItemClassName,
                page === currentPage && (activeItemClassName || 'active'),
              )}
              aria-current={ariaCurrentAttr && page === currentPage ? 'page' : undefined}
            >
              <a
                className={classNames('page-link', pageLinkClassName)}
                href={getLink(page as number) || '#'}
                aria-label={`Go to page ${page}`}
                onClick={page === currentPage ? undefined : (e) => handleClick(page as number, e)}
                tabIndex={page === currentPage ? -1 : 0}
              >
                {page}
              </a>
            </li>
          );
        })}
        {renderNav && (
          <li
            className={classNames('page-item page-item-arrow', pageItemClassName, nextClassName, currentPage === pageCount && (disabledItemClassName || 'disabled'))}
          >
            <a
              className={classNames('page-link', pageLinkClassName, currentPage === pageCount && (disabledLinkClassName || 'disabled'))}
              href={getLink(currentPage + 1) || '#'}
              tabIndex={currentPage === pageCount ? -1 : 0}
              aria-disabled={currentPage === pageCount}
              aria-label={ariaNextLabel}
              onClick={currentPage === pageCount
                ? undefined : (e) => handleClick(currentPage + 1, e)}
            >
              {nextLabel}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
