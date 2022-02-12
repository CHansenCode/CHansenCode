import { Flex, Button, Diode } from 'components';

import css from './style.module.scss';

export const Item = ({ ...props }) => {
  //

  return (
    <div className={`pc3b ${css.item_wrapper}`}>
      <Card {...props} />

      {props.controller.isDeleting && (
        <Button
          text="x"
          className={`alert alert-bg1 ${css.delete_button}`}
          onClick={props.onDelete}
        />
      )}
    </div>
  );
};

const Card = ({ type, data, ...props }) => {
  return (
    <li className={css.item} onClick={props.onClick}>
      <>
        {type === 'slide' ? (
          <>
            <header>
              <Flex justifyContent="space-between">
                <p>{data.title}</p>
              </Flex>

              <p>{data.subtitle}</p>
            </header>

            <Flex>
              <Flex>
                <h5>cow</h5>
              </Flex>

              <h6>{props.index}</h6>
            </Flex>
          </>
        ) : (
          <>
            <header>
              <Flex margin="0 0 1rem 0" justifyContent="space-between">
                <p>{data.title}</p>
                {!props.controller.isDeleting && (
                  <Diode size="0.5rem" toggle={data.published} />
                )}
              </Flex>

              <Flex>
                <h5 className={css.descr}>
                  <i>" </i>
                  {data.descr
                    ? data.descr.substring(0, 70)
                    : 'no description added'}

                  <i> "</i>
                </h5>
              </Flex>
            </header>

            <footer>
              <Flex margin="0 0 0.5rem 0">
                <h6>users: </h6>
                {data.users.map((o, i) => (
                  <h5 key={o} className="sc">
                    {` ${o},`}
                  </h5>
                ))}
              </Flex>

              <Flex justifyContent="space-between">
                <Flex>
                  <h6>owner: </h6>
                  {data.owner.map((o, i) => (
                    <h5 key={o} className="sc">
                      {` ${o}`}
                    </h5>
                  ))}
                </Flex>

                <h5 className="sc">{data.createdAt.substring(0, 10)}</h5>
              </Flex>
            </footer>
          </>
        )}
      </>
    </li>
  );
};
