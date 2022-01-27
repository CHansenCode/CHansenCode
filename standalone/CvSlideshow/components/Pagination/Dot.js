import css from './Dot.module.scss';

export const Dot = ({ currentPage, activePage, ...props }) => {
  //
  const active = currentPage == activePage;

  const iStyle = {
    background: active ? 'currentColor' : 'transparent',
  };

  return <div style={iStyle} className={css.dot} onClick={props.onClick} />;
};
