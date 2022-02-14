import React, { useState, useEffect } from 'react';

import css from './Background.module.scss';

export const Background = ({ scope, ...props }) => {
  const [years, setYears] = useState([]);

  function yearsArrayFromInteger(scope) {
    let now = new Date();
    let currentYear = now.getFullYear();

    const yArr = [...Array(scope)].map((_, i) => currentYear - i);
    yArr.sort((a, b) => a - b);

    setYears(yArr);
  }
  useEffect(() => yearsArrayFromInteger(scope), [scope]);

  const iStyle = {
    width: `${100 / scope}%`,
  };

  return (
    <div className={`${css.main}`}>
      {years &&
        years.map((y, i) => (
          <YearCard key={`bg${y}${i}`} year={y} width={iStyle.width} />
        ))}
    </div>
  );
};

const monthsArr = [
  'january',
  'february',
  'marsh',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const YearCard = ({ year, ...props }) => {
  return (
    <div style={{ width: props.width }} className={css.year}>
      <h6>{year}</h6>

      {monthsArr.map((m, i) => (
        <div key={`bg${year}${m}${i}`} className={css.month} />
      ))}
    </div>
  );
};
