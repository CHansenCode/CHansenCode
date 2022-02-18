import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ButtonType, Cimage } from 'components';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';

export const Item = ({ data, ...props }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  async function onClicksetActiveId() {
    props.setActiveId(data._id);
  }

  async function onClickDelete() {
    dispatch(api.deleteOne(data._id));
  }

  let isDeleting = props.controller.isDeleting ? true : false;

  return (
    <>
      <li
        className={`pc3b ${css.item}${hover ? ' sc sc7b' : ''}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {isDeleting && (
          <ButtonType
            className={css.del_button}
            type="delete"
            onClick={onClickDelete}
          />
        )}

        <div className={`${css.card}`} onClick={onClicksetActiveId}>
          <div className={css.img_wrapper}>
            <Cimage
              height="100%"
              width="100%"
              src={`${data.url}`}
              layout="fill"
            />
          </div>

          <p>{data.title}</p>
          <p>{data.category}</p>
          <p>{data.project}</p>
        </div>
      </li>
    </>
  );
};
