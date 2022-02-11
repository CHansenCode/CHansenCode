import { Flex, Label, Diode } from 'components';

import css from './style.module.scss';

export const Item = ({ data, ...props }) => {
  return (
    <div className={css.wrapper}>
      <li className={`pc3b ${css.item}`} onClick={props.onClick}>
        <Flex justifyContent="space-between">
          <h4 className="sc">{data.title}</h4>
          <Diode toggle={data.published} size="0.5rem" opacity="0.5" />
        </Flex>

        <Flex center={true}>
          <h5>
            <i>"</i>
            {data.descr ? data.descr : '...'}
            <i>"</i>
          </h5>
        </Flex>

        <Flex justifyContent="space-between">
          <Flex>
            <h6 className={css.label}>slides: </h6>
            <h6>{data.slides.length}</h6>
          </Flex>

          <Flex width="min-content">
            <h6 className={css.label}>by: </h6>
            <h6>{data.createdBy}</h6>
          </Flex>
        </Flex>
      </li>
    </div>
  );
};
