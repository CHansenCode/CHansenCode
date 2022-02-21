import React from 'react';

import { Flex, Loading } from 'components';
import { Item, Header } from '.';

import css from './style.module.scss';

export const Map = ({ mapData, ...props }) => {
  return (
    <ul className={css.list}>
      <Header {...props} />

      {mapData.length ? (
        mapData.map((p, i) => <Item key={p._id} data={p} {...props} />)
      ) : (
        <Flex>
          <Loading />
          <h4>Fetching data...</h4>
        </Flex>
      )}
    </ul>
  );
};
