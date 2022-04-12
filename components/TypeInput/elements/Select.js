import css from './elements.module.scss';

export const Select = ({ ...props }) => {
  return (
    <select
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
      <option></option>
      {props.options
        ? props.options.map((o, i) => (
            <option key={`${props.uniqueKey}${i}`}>{o}</option>
          ))
        : 'no "options" prop found'}
    </select>
  );
};
