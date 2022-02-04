import css from './InputLabel.module.scss';

export const InputLabel = props => {
  return (
    <header className={css.label_wrapper}>
      <h6 className={css.label}>
        {props.label} :{' '}
        {props.required ? (
          <span className={`sc ${css.required}`}>required *</span>
        ) : (
          ''
        )}
      </h6>

      <Info text={props.info} />
    </header>
  );
};

const Info = props => {
  return (
    <aside className={css.info_on_hover}>
      {props.text && (
        <>
          <h6>i</h6>
          <h5 className="bg pc3b">{props.text}</h5>
        </>
      )}
    </aside>
  );
};
