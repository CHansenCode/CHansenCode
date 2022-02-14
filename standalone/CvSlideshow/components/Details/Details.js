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
  const { y, mm, dd } = useDates();
  //
  data = data.title.length ? data : placeholder;

  return (
    <div className={`pc3b ${css.details}`}>
      <header className={css.header}>
        <p>{data.title}</p>
        <div className={css.pseudo_underscore} />
      </header>

      <div>
        <Flex>
          <Label bodyClass="sc" label="employer :" text={data.employer} />
          <Label label="location :" text={data.location} />
        </Flex>

        <Flex justifyContent="space-between">
          <Label bodyClass="sc" label="role :" text={data.role} />
          <Label label="country :" text={data.country} />
        </Flex>
      </div>

      <div className={css.descr}>
        <p>
          <i>" </i>
          {data.descr}
          <i> "</i>
        </p>
      </div>

      <Flex>
        <MapTags title="tags :" arr={data.tags} />
      </Flex>

      <Flex justifyContent="space-between">
        <Flex alignItems="flex-end">
          <h6 className={css.label}>from :</h6>

          <p>{data.from}</p>
        </Flex>

        <Flex alignItems="flex-end" justifyContent="flex-end">
          <h6 className={css.label}>to :</h6>
          <p>{data.to ? data.to : ` ${y}-${mm}-${dd}`}</p>
        </Flex>
      </Flex>
    </div>
  );
};
