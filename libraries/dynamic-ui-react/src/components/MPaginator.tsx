import classNames from 'classnames';
import {
  useMemo,
} from 'react';
import { MButton } from './proxies';
import usePagination, { DOTS } from '../hooks/usePagination';

type Props = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  prevText?: string;
  nextText?: string;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
};

export default function MPaginator(
  {
    totalCount,
    setCurrentPage,
    currentPage,
    siblingCount = 1,
    pageSize,
    prevText,
    nextText,
  }: Props,
) {
  const pages = usePagination({
    currentPage, siblingCount, totalCount, pageSize,
  });

  const actions = useMemo(() => ({
    prevPage: () => setCurrentPage(currentPage - 1),
    nextPage: () => setCurrentPage(currentPage + 1),
    setPage: (page: number) => setCurrentPage(page),
  }), [currentPage, setCurrentPage]);

  const isDisabled = useMemo(() => ({
    prev: currentPage === 1,
    next: currentPage === pages[pages.length - 1],
  }), [currentPage, pages]);

  if (currentPage === 0 || pages.length < 2) {
    return null;
  }

  return (
    <div className="m-paginator">
      <div className="m-paginator-arrow">
        <MButton
          isPill
          iconStart="chevron-left"
          theme="secondary"
          variant="link"
          onMClick={actions.prevPage}
          text={prevText}
          size="sm"
          isDisabled={isDisabled.prev}
        />
      </div>
      <div className="m-paginator-pages">
        {pages.map((pageItem, index) => {
          if (typeof pageItem === 'string') {
            return (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={`Dot-${index}`}
                className="m-paginator-page-dots"
              >
                {DOTS}
              </span>
            );
          }

          return (
            <button
              key={pageItem}
              type="button"
              onClick={() => actions.setPage(pageItem)}
              className={classNames(currentPage === pageItem ? 'active' : '', 'm-paginator-page')}
            >
              {pageItem}
            </button>
          );
        })}
      </div>
      <div className="m-paginator-arrow">
        <MButton
          isPill
          iconEnd="chevron-right"
          theme="secondary"
          variant="link"
          size="sm"
          onMClick={actions.nextPage}
          text={nextText}
          isDisabled={isDisabled.next}
        />
      </div>
    </div>
  );
}
