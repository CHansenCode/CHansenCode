import React from 'react';

import { Flex, Loading } from 'components';
import { Item } from './Item';
import { Header } from './Header';

import css from './style.module.scss';

export const Map = ({ mapData, ...props }) => {
  const iStyle = {
    flexDirection: props.controller.listView === 'list' && 'column',
  };
  return (
    <ul style={iStyle} className={css.list}>
      {props.controller.listView === 'list' && <Header />}

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
