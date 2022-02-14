import React from 'react';

import { Nav } from './Nav';
import { Main } from './Main';

export const Layout = ({ ...props }) => {
  return (
    <>
      <Main>
        <div>{props.children}</div>

        <Nav {...props} />
      </Main>
    </>
  );
};
