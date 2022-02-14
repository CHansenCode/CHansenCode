import { Button } from '../../components';

import { Pagination } from './Pagination';

import css from './Nav.module.scss';

export const Nav = ({ page, setPage, ...props }) => {
  //

  async function onClickAddPage() {
    setPage(page + 1);
  }
  async function onClickSubPage() {
    setPage(page - 1);
  }

  let prevDisabled = page < 2 ? true : false;
  let nextDisabled = page === props.pages.length ? true : false;

  return (
    <>
      <nav className={css.nav}>
        <PrevButton disabled={prevDisabled} onClick={onClickSubPage} />

        <Pagination page={page} setPage={setPage} {...props} />

        <NextButton disabled={nextDisabled} onClick={onClickAddPage} />
      </nav>
    </>
  );
};

const PrevButton = props => {
  return (
    <Button
      text="<"
      className="pc5b"
      size="1.75rem"
      borderRadius="50%"
      fontSize="1.2rem"
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
};
const NextButton = props => {
  return (
    <Button
      text=">"
      className="pc5b"
      size="1.75rem"
      borderRadius="50%"
      fontSize="1.2rem"
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
};
