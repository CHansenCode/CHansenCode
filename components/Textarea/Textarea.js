import { useState } from 'react';

import css from './Textarea.module.scss';

export const Textarea = ({ label, info, required, ...props }) => {
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

      <textarea
        className={`pc5b bg ${css.textarea}`}
        ref={props.myRef}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        rows={props.rows ? props.rows : '4'}
        onFocus={props.onFocus ? props.onFocus : () => setFocused(true)}
        onBlur={props.onBlur ? props.onBlur : () => setFocused(false)}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};
