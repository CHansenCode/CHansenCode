import css from './PlannedFeature.module.scss';

export const PlannedFeature = ({ title, text }) => {
  return (
    <div className={css.wrapper}>
      <h4 className="sc">{title}</h4>

      <p>{text}</p>
    </div>
  );
};
