import React, { useState } from 'react';

import { Timeline, Profile, Details } from '.';

import css from './Cv.module.scss';

// import { occupation } from 'config';

export const Cv = ({ ...props }) => {
  const [details, setDetails] = useState({});
  // ...occupation[0]

  props = {
    ...props,
    details,
    setDetails,
    // occupation,
  };

  return (
    <div className={css.wrapper}>
      cv
      {/* <Profile {...props} />

      <Details {...props} />

      <Timeline {...props} /> */}
    </div>
  );
};
