import React from 'react';

import css from './Select.module.scss';

export const Select = ({ label, objKey, data, setData, options, ...props }) => {
  return (
    <div className={` ${css.select}`}>
      <header className={css.header}>
        {label && <h6 className={css.label}>{label} :</h6>}
        {props.required && <h6 className="sc">*req</h6>}
        {props.info && (
          <div className={css.info}>
            <h6>i</h6>
            <div>{props.info}</div>
          </div>
        )}
      </header>

      <div className={css.options}>
        {options &&
          options.map((o, i) => (
            <Option
              data={o}
              key={o}
              onClick={() => setData({ ...data, [objKey]: o })}
            />
          ))}
      </div>
    </div>
  );
};

const Option = ({ data }) => {
  return (
    <div className={`pc5b ${css.option}`}>
      <p>{data}</p>
    </div>
  );
};
