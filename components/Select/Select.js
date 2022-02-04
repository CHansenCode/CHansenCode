import { InputLabel } from 'components';

import css from './Select.module.scss';

export const Select = ({ label, objKey, data, setData, options, ...props }) => {
  //
  const iStyle = {
    height: props.height && props.height,
    width: props.width && props.width,
  };

  return (
    <div style={iStyle} className={css.wrapper}>
      <select name={props.value} className={css.select} value={props.value}>
        {props.children}
      </select>
    </div>
  );
};
