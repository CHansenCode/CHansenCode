import css from './StyledDiv.module.scss';

export const StyledDiv = ({ children }) => {
  return <div className={`${css.div} pc1b`}>{children}</div>;
};
