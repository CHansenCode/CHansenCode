import css from './Pagination.module.scss';

import { Dot } from './Dot';

export const Pagination = ({ page, setPage }) => {
  //
  async function setActivePage(pageNr) {
    setPage(pageNr);
  }

  return (
    <div className={css.pagination}>
      <Dot currentPage={page} activePage={1} onClick={() => setActivePage(1)} />
      <Dot currentPage={page} activePage={2} onClick={() => setActivePage(2)} />
      <Dot currentPage={page} activePage={3} onClick={() => setActivePage(3)} />
      <Dot currentPage={page} activePage={4} onClick={() => setActivePage(4)} />
    </div>
  );
};
