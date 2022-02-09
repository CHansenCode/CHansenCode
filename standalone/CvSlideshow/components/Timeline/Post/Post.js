import { useState } from 'react';

import css from './Post.module.scss';

import useDates from '../../../lib/useDates';

export const Post = ({ data, scope, ...props }) => {
  const [hover, setHover] = useState(false);

  const { y } = useDates();

  // relative max (100% width)
  let scopeYears = scope;
  let scopeMonths = scopeYears * 12;

  //from (ex. 2018-07)
  let fromTime = data.from.split('-');
  let fromYear = parseInt(fromTime[0]);
  let fromMonth = parseInt(fromTime[1]);

  //to (ex. 2019-03)
  let endTime = data.to.split('-');
  let endYear = parseInt(endTime[0]);
  let endMonth = parseInt(endTime[1]);

  //Width calculation of 'Post' relative to 'scope'
  let totalMonths = (endYear - fromYear) * 12 + (endMonth - fromMonth);
  let percentageOfScope = Math.round((totalMonths * 100) / scopeMonths);
  //#endregion

  //offset right calculation of 'Post' relative to 'today's date' within 'scope'
  let endMonthsAgo = y * 12 - endYear * 12 - endMonth + 12;
  let relativeToScope = (endMonthsAgo * 100) / scopeMonths;

  const iStyle = {
    width: hover ? 'min-content' : `${percentageOfScope}%`,
    right: `${relativeToScope}%`,
  };

  return (
    data && (
      <>
        <div
          className={`${css.post} bg pc3b`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={iStyle}
          {...props}
        >
          <h6>{data.short}</h6>
          <h6>{data.title}</h6>
        </div>
      </>
    )
  );
};
