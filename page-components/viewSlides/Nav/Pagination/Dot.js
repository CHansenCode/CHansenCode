import css from './Pagination.module.scss';

export const Dot = ({ ...props }) => {
  let active = props.slideIndex === props.i;

  async function goToSlide(i) {
    props.setSlideIndex(i);
  }

  return (
    <li
      className={`${css.dot}${active ? ` ${css.dot_active}` : ''}`}
      onClick={() => goToSlide(props.i)}
    />
  );
};
