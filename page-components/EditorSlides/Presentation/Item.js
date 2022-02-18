import { useDispatch } from 'react-redux';
import { deleteOne } from 'api-lib/dispatch/slides';

import { Flex, Diode, ButtonType } from 'components';

import css from './style.module.scss';

export const Item = ({ data, ...props }) => {
  //
  async function setId(id) {
    props.setActiveId(id);
  }

  return (
    <li className={`pc3b ${css.item}`}>
      <div className={css.card} onClick={() => setId(data._id)}>
        <Flex className={css.title} justifyContent="space-between">
          <p className="sc"> {data.title}</p>
          {!props.controller.isDeleting && <Diode size="0.5rem" />}
        </Flex>

        <div className={css}>
          <Flex>
            <h6>owner: </h6>
            {data.owner.map((o, i) => (
              <h5 key={o}> {` ${o}, `}</h5>
            ))}
          </Flex>

          <Flex>
            <h6>users: </h6>
            {data.users.map((o, i) => (
              <h5 key={o}> {` ${o}, `}</h5>
            ))}
          </Flex>
        </div>

        <footer className={css.footer}>
          {data.slides && data.slides.length}
        </footer>
      </div>

      {props.controller.isDeleting && <Delete id={data._id} {...props} />}
    </li>
  );
};

const Delete = ({ id, ...props }) => {
  const dispatch = useDispatch();
  //
  async function onClickDeletePresentation() {
    dispatch(deleteOne(id));
  }

  return (
    <ButtonType
      type="delete"
      className={css.delete_button}
      onClick={onClickDeletePresentation}
    />
  );
};
