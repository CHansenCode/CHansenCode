import { Flex, Button, Diode } from 'components';

import css from './style.module.scss';

export const Item = ({ type, data, ...props }) => {
  switch (type) {
    case 'slide':
      return (
        <div className={css.item_wrapper}>
          <li className={`pc3b ${css.item}`} onClick={props.onClick}>
            <Flex justifyContent="space-between">
              <p className="sc">{data.title}</p>
            </Flex>

            <div>
              <p>{data.subtitle}</p>
            </div>

            <Flex justifyContent="space-between">
              <h5></h5>
              <h5>
                <i>p.</i> {props.pageIndex}
              </h5>
            </Flex>
          </li>

          {props.controller.isDeleting && (
            <Button
              text="x"
              className={`alert alert-bg1 alert-b3 ${css.delete_button}`}
              onClick={props.onDelete}
            />
          )}
        </div>
      );
      break;

    case 'presentation':
      return (
        <div className={css.item_wrapper}>
          <li className={`pc3b ${css.item}`} onClick={props.onClick}>
            <Flex justifyContent="space-between">
              <p className="sc">{data.title}</p>

              {!props.controller.isDeleting && (
                <Diode size="0.5rem" toggle={data.published} />
              )}
            </Flex>
          </li>

          {props.controller.isDeleting && (
            <Button
              text="x"
              className={`alert alert-bg1 alert-b3 ${css.delete_button}`}
              onClick={props.onDelete}
            />
          )}
        </div>
      );

    default:
      return (
        <div className={css.wrapper} onClick={props.onClick}>
          <li className={`pc3b ${css.item}`}>NO TYPE PROP FOUND</li>
        </div>
      );
      break;
  }
};
