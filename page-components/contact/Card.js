import css from './Card.module.scss';

export const Card = ({ ...props }) => {
  return (
    <div>
      {props.data.message} <button onClick={props.onDelete}>delete</button>
    </div>
  );
};
