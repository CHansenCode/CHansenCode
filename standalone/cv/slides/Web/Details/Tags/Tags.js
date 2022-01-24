import React from 'react';

import css from './Tags.module.scss';

export const Tags = ({ data }) => {
  return (
    <div className={css.tags_wrapper}>
      <h6>tags :</h6>

      <div className={css.tags}>
        {data &&
          data.map((a, i) => (
            <div key={`tag${i}${a}`} className={`pc5b ${css.tag}`}>
              <h6 className="sc">{a}</h6>
            </div>
          ))}
      </div>
    </div>
  );
};
