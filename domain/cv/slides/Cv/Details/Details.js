import React from 'react';

import { Label, Flex, MapTags } from 'components';

import css from './Details.module.scss';

export const Details = ({ ...props }) => {
  let data = props.details;

  return (
    <div className={`pc3b ${css.details}`}>
      {/*  */}
      <header className={css.header}>
        <h4>{data.title}</h4>
      </header>

      <div className={css.body}>
        <Flex padding="0 0.2rem" justifyContent="space-between">
          <Label label="employer :">
            <p className="sc">{data.employer}</p>
          </Label>
          <Label label="location :" text={data.location} />
        </Flex>
        <Flex padding="0 0.2rem" justifyContent="space-between">
          <Label label="role :">
            <p className="sc">{data.role}</p>
          </Label>
          <Label label="country :" text={data.country} />
        </Flex>
      </div>

      <div className={css.body}>
        <p>{data.descr}</p>
      </div>

      <div className={css.body}>
        <MapTags title="tags :" arr={data.tags} />
      </div>

      <footer className={css.footer}>
        <div>
          <h5>cow</h5>
          <p>{data.from}</p>
        </div>

        <div>
          <h5>until: </h5>
          <p>{data.to}</p>
        </div>
      </footer>
    </div>
  );
};
