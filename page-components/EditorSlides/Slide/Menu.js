import { Button, ButtonType } from 'components';

import css from './style.module.scss';

export const Menu = ({ ...props }) => {
  //
  async function goBack() {
    props.setSlideIndex(null);
  }
  async function prevSlide() {
    props.setSlideIndex(props.slideIndex - 1);
  }
  async function nextSlide() {
    props.setSlideIndex(props.slideIndex + 1);
  }
  async function toggleObjectFit() {
    alert('not yet impl.');
  }

  return (
    <div className={css.menu}>
      <>
        <ButtonType type="back" onClick={goBack} />
        <Button
          text="<"
          fontSize="1.25rem"
          onClick={prevSlide}
          disabled={props.slideIndex < 1 ? true : false}
        />

        <IndexNumber {...props} />

        <Button
          text=">"
          fontSize="1.25rem"
          onClick={nextSlide}
          disabled={
            props.slideIndex + 1 === props.formData.slides.length ? true : false
          }
        />
      </>

      <Button margin="0 0 0 3rem" text="FIT" onClick={toggleObjectFit} />
    </div>
  );
};

const IndexNumber = ({ ...props }) => {
  return (
    <div className={css.index}>
      <h4 className="sc">{props.slideIndex + 1} </h4>
      <h4>{` / `}</h4>
      <h4>{props.formData.slides && props.formData.slides.length}</h4>
    </div>
  );
};
