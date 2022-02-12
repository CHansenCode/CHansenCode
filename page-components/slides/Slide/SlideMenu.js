import { Button } from 'components';

import css from './Slide.module.scss';

export const SlideMenu = ({ ...props }) => {
  //
  async function prevSlide() {
    props.setSlideIndex(slideIndex - 1);
  }
  async function nextSlide() {
    props.setSlideIndex(slideIndex + 1);
  }

  async function toggleObjectFit() {
    alert('not yet impl.');
  }

  return (
    <div className={css.menu}>
      <>
        <Button
          text="<"
          fontSize="1.25rem"
          onClick={prevSlide}
          disabled={props.slideIndex < 1 ? true : false}
        />
        <h4>
          {props.slideIndex && props.slideIndex + 1}
          {` / `}
          {props.formData.slides && props.formData.slides.length}
        </h4>
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
