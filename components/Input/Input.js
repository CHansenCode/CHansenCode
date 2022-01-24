import { useState } from 'react';

import css from './Input.module.scss';

export const Input = ({ label, info, required, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`${css.wrapper} ${focused ? 'sc' : ''}`}>
      <header className={css.header}>
        {label && <h6 className={css.label}>{label} :</h6>}
        {required && <h6 className="sc">*req</h6>}
        {info && (
          <div className={css.info}>
            <h6>i</h6>
            <div>{info}</div>
          </div>
        )}
      </header>

      <input
        className={`pc5b bg ${css.input}`}
        ref={props.myRef}
        type={props.type}
        //
        placeholder={props.placeholder}
        value={props.value}
        //
        onFocus={props.onFocus ? props.onFocus : () => setFocused(true)}
        onBlur={props.onBlur ? props.onBlur : () => setFocused(false)}
        //
        onChange={props.onChange}
      />
    </div>
  );
};
