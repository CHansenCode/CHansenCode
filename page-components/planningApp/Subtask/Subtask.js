import css from './Subtask.module.scss';

export const Subtask = ({ data, controller, ...props }) => {
  //
  async function handleSubtaskChange(e) {
    e.preventDefault();
  }

  return (
    <div className={css.wrapper}>
      <h5>{data.title}</h5>
    </div>
  );
};
