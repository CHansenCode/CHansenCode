import { Button, Pagination } from '../components';

import css from './Nav.module.scss';

export const Nav = ({ page, setPage }) => {
  //

  async function onClickAddPage() {
    setPage(page + 1);
  }
  async function onClickSubPage() {
    setPage(page - 1);
  }

  let prevDisabled = page < 2 ? true : false;
  let nextDisabled = page > 3 ? true : false;

  return (
    <nav className={css.nav}>
      <Button disabled={prevDisabled} text="-" onClick={onClickSubPage} />

      <Pagination page={page} setPage={setPage} />

      <Button disabled={nextDisabled} text="+" onClick={onClickAddPage} />
    </nav>
  );
};
