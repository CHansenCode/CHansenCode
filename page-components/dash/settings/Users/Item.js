import css from './style.module.scss';

export const Item = () => {
  return (
    <li className={css.item}>
      <h4>username</h4>
      <p>title</p>
      <p>role</p>
      <p>something</p>
    </li>
  );
};
