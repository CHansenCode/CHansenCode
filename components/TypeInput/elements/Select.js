import css from './elements.module.scss';

export const Select = props => {
  return (
    <div
      value={props.value}
      placeholder={props.placeholder}
      rows={props.rows}
      //
      type={!props.password ? 'input' : 'password'}
      className={`pc5b bg ${css.select}`}
      ref={props.myRef}
      //
      onChange={props.onChange}
      //
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    >
      {props.children}
    </div>
  );
};
