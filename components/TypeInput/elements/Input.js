import css from './elements.module.scss';

export const Input = props => {
  return (
    <input
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      //
      type={!props.password ? 'input' : 'password'}
      className={`pc5b bg ${css.input}`}
      ref={props.myRef}
      //
      onChange={props.onChange}
      //
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
};
