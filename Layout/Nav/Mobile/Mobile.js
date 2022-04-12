import React, { useState } from 'react';
import { Logo, Button } from 'components';

import css from './Mobile.module.scss';

export const Mobile = ({ open, onGoHome, ...props }) => {
  const iStyle = {
    top: open ? 0 : '-100vh',
  };

  return (
    <div style={iStyle} className={css.fixed_slide}>
      <div className={css.inner_slide}>
        <div className={css.logo} onClick={onGoHome}>
          <Logo height="5rem" />
        </div>

        <>{props.children}</>
      </div>
    </div>
  );
};

// const Mobile = ({ ...props }) => {
//   return (
//     <div className={css.mobile}>
//       <div className={css.mobile_logo}>
//         <NextLink href="/">
//           <Logo height="4rem" />
//         </NextLink>
//       </div>

//       <div className={css.mobile_fixed}>
//         <div className={css.mobile_fixed_inner}>
//           <>{props.children}</>
//         </div>
//       </div>
//     </div>
//   );
// };
