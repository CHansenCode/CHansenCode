import css from './elements.module.scss';

export const Textarea = props => {
  //
  const iStyle = {
    pointerEvents: props.disabled && 'none',
    border: props.disabled && 'thin solid transparent',
    resize: props.disabled && 'none',
  };

  return (
    <textarea
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      rows={props.rows}
      style={iStyle}
      //
      className={`pc5b bg ${css.textarea}${
        props.className ? ` ${props.className}` : ''
      }`}
      ref={props.myRef}
      //
      onChange={props.onChange}
      //
      onClick={props.onClick}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    ></textarea>
  );
};
