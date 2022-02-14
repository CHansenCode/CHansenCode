import css from './Pagination.module.scss';

import { Dot } from './Dot';

export const Pagination = ({ page, setPage, ...props }) => {
  //
  async function setActivePage(page) {
    setPage(page);
  }

  return (
    <div className={css.pagination}>
      {props.pages.map((d, i) => (
        <Dot
          key={d}
          page={d}
          i={i}
          currentPage={page}
          activePage={i + 1}
          onClick={() => setActivePage(i + 1)}
          {...props}
        />
      ))}
    </div>
  );
};
