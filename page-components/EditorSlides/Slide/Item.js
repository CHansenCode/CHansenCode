import { useDispatch } from 'react-redux';
import * as api from 'api-lib/dispatch/slides';

import { Flex, Diode, ButtonType } from 'components';

import css from './style.module.scss';

export const Item = ({ data, i, ...props }) => {
  //
  async function onClickSetSlideIndex() {
    props.setSlideIndex(i);
  }

  return (
    <li className={`pc3b ${css.item}`}>
      <div className={css.card} onClick={() => onClickSetSlideIndex(i)}>
        <header className={css.title}>{data.title}</header>

        <div className={css.body}></div>

        <footer className={css.footer}>
          <Flex justifyContent="flex-end">
            <h6>{i + 1}</h6>
          </Flex>
        </footer>
      </div>

      {props.controller.isDeleting && <Delete id={data.id} {...props} />}
    </li>
  );
};

const Delete = ({ id, ...props }) => {
  //
  const dispatch = useDispatch();

  async function onClickDeleteSlide(formData, slideId) {
    try {
      dispatch(api.deleteSlide(formData, slideId));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ButtonType
      type="delete"
      className={css.delete_button}
      onClick={() => onClickDeleteSlide(props.formData, id)}
    />
  );
};
