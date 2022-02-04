import css from './Select.module.scss';

export const Option = props => {
  return (
    <option
      name={props.value}
      value={props.value}
      className={css.option}
      onClick={props.onClick}
    >
      {props.value}
    </option>
  );
};
