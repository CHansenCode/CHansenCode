import { useState, useEffect } from 'react';

import { Flex, Label, MapTags } from '../';

import css from './Details.module.scss';

import useDates from '../../lib/useDates';

const placeholder = {
  title: 'placeholder',
  employer: 'life',
  location: 'scandinavia',
  role: 'living',
  country: '-',
  descr:
    'Click on the posts in the timeline below to get more detailed information about each job/education post',
  tags: ['cv', 'portfolio', 'letter of motivation'],
  from: '1988-11-12',
};

export const Details = ({ data }) => {
  const [detailsData, setDetailsData] = useState({ ...placeholder });
  const { y, mm, dd } = useDates();
  //

  useEffect(() => {
    data.title && setDetailsData({ ...data });
  }, [data]);

  return (
    <div className={`pc3b ${css.details}`}>
      <header className={css.header}>
        <p>{detailsData.title}</p>
        <div className={css.pseudo_underscore} />
      </header>

      <div>
        <Flex>
          <Label
            bodyClass="sc"
            label="employer :"
            text={detailsData.employer}
          />
          <Label label="location :" text={detailsData.location} />
        </Flex>

        <Flex justifyContent="space-between">
          <Label bodyClass="sc" label="role :" text={detailsData.role} />
          <Label label="country :" text={detailsData.country} />
        </Flex>
      </div>

      <div className={css.descr}>
        <p>
          <i>" </i>
          {detailsData.descr}
          <i> "</i>
        </p>
      </div>

      <Flex>
        <MapTags title="tags :" arr={detailsData.tags} />
      </Flex>

      <Flex justifyContent="space-between">
        <Flex alignItems="flex-end">
          <h6 className={css.label}>from :</h6>

          <p>{detailsData.from}</p>
        </Flex>

        <Flex alignItems="flex-end" justifyContent="flex-end">
          <h6 className={css.label}>to :</h6>
          <p>{detailsData.to ? detailsData.to : ` ${y}-${mm}-${dd}`}</p>
        </Flex>
      </Flex>
    </div>
  );
};
