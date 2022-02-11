import css from './Label.module.scss';

export const Label = ({ ...props }) => {
  const iStyle = {
    wrapper: {
      flexDirection: props.horizontal && 'row',
      height: props.height && props.height,
      width: props.width && props.width,
      margin: props.margin && props.margin,
    },
    label: {},
    body: {
      marginLeft: props.horizontal ? (props.gap ? props.gap : '0.5rem') : 0,
    },
  };

  props.style = {
    ...props,
    ...iStyle.wrapper,
  };

  return (
    <div style={props.style} className={css.wrapper}>
      {props.label && (
        <h6 style={iStyle.label} className={props.labelClass}>
          {props.label} :
        </h6>
      )}

      <p style={iStyle.body} className={props.bodyClass}>
        {props.body}
      </p>
      <div>{props.children}</div>
    </div>
  );
};
