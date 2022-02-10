import css from './elements.module.scss';

export const Input = props => {
  //
  const iStyle = {
    pointerEvents: props.disabled && 'none',
    border: props.disabled && 'thin solid transparent',
  };

  return (
    <input
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      style={iStyle}
      //
      type={!props.password ? 'input' : 'password'}
      className={`pc5b bg ${css.input}${
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
    />
  );
};
