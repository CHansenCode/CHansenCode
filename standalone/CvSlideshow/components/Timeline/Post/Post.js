import { useState } from 'react';

import { Button } from '../../Button';

import css from './Post.module.scss';

import useDates from '../../../lib/useDates';

export const Post = ({ data, scope, ...props }) => {
  const [hover, setHover] = useState(false);

  const { y } = useDates();

  // relative max-width
  let scopeInYears = scope;
  let scopeInMonths = scopeInYears * 12;

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
  let percentageOfScope = Math.round((totalMonths * 100) / scopeInMonths);
  //#endregion

  //offset right calculation of 'Post' relative to 'today's date' within 'scope'
  let endMonthsAgo = y * 12 - endYear * 12 - endMonth + 12;
  let relativeToScope = (endMonthsAgo * 100) / scopeInMonths;

  const iStyle = {
    width: `${percentageOfScope}%`,
    right: `${relativeToScope}%`,
  };

  return (
    data && (
      <>
        <div
          className={css.post}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={iStyle}
          onClick={props.onClick}
          {...props}
        >
          <Button className="bg pc5b" size="100%" onClick={props.onClick}>
            <h6 className="sc">{data.short}</h6>
            <h6>{data.title}</h6>
          </Button>
        </div>
      </>
    )
  );
};
