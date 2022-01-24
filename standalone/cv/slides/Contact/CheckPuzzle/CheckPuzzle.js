import React, { useState, useEffect } from 'react';

import css from './CheckPuzzle.module.scss';

export const CheckPuzzle = ({ puzzValid, setPuzzValid, ...props }) => {
  //
  const [check, setCheck] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
  });

  useEffect(() => {
    check.one === true &&
    check.three === true &&
    check.five === true &&
    check.seven === true &&
    check.nine === true
      ? setPuzzValid(true)
      : setPuzzValid(false);
  }, [check]);

  return (
    <div className={`pc3b ${css.wrapper}`}>
      <h4>
        check an <b className="sc">X</b>
        <i className="sc">-pattern</i> to reveal personal information and unlock
        the form.
      </h4>

      <div className={css.checkboxes}>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, one: !check.one })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, two: !check.two })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, three: !check.three })}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, four: !check.four })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, five: !check.five })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, six: !check.six })}
          />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, seven: !check.seven })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, eight: !check.eight })}
          />
          <input
            type="checkbox"
            onChange={() => setCheck({ ...check, nine: !check.nine })}
          />
        </div>
      </div>
    </div>
  );
};
