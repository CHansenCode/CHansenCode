import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

import { ButtonType, CloudImg } from 'components';

import css from './style.module.scss';

import * as api from 'api-lib/dispatch/media';

export const Item = ({ data, ...props }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  async function onClicksetActiveId() {
    props.setActiveId(data._id);
  }
  async function onClickDelete() {
    dispatch(api.deleteOne(data));
  }

  const iStyle = {
    margin:
      props.controller.listView === 'thumb'
        ? '0 0.75rem 0.75rem 0'
        : '0 0 0.5rem 0',
  };

  let isActive = data._id === props.activeId ? true : false;
  let isDeleting = props.controller.isDeleting ? true : false;
  let isActiveOrHovered = isActive || hover ? true : false;

  return (
    <li
      style={iStyle}
      className={`pc3b ${css.item}${isActiveOrHovered ? ' sc sc7b' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.controller.listView === 'thumb' ? (
        <Thumbnail data={data} onClick={onClicksetActiveId} {...props} />
      ) : (
        <ListView data={data} onClick={onClicksetActiveId} {...props} />
      )}

      {isDeleting && (
        <ButtonType
          className={css.del_button}
          type="delete"
          onClick={onClickDelete}
        />
      )}
    </li>
  );
};

const ListView = ({ data, ...props }) => {
  return (
    <div className={css.listview_card} onClick={props.onClick}>
      <header className="pc3b">
        <Image src={data.secure_url} height="48" width="48" />
        {/* <Cimage src={data.uri.icon} height="3rem" width="3rem" layout="fill" /> */}
      </header>

      <div className={css.body}>
        <p className="pc3b sc">{data.title}</p>
        <p>{data.category}</p>
        <p className="pc3b">{data.project}</p>
        <p className="pc3b">
          {data.createdAt && data.createdAt.substring(0, 40)}
        </p>
      </div>
    </div>
  );
};

const Thumbnail = ({ data, ...props }) => {
  return (
    <div className={`${css.thumb_card}`} onClick={props.onClick}>
      <header>
        <Image src={data.secure_url} height="300" width="300" />
      </header>

      <div className={css.body}>
        <p className={`pc1b bg ${css.title}`}>{data.title}</p>
        <p>{data.category}</p>
        <p>{data.project}</p>
        <p>{data.createdAt && data.createdAt.substring(0, 40)}</p>
      </div>
    </div>
  );
};
