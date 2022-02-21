import css from './Slide.module.scss';

export const Slide = ({ activeSlide, ...props }) => {
  console.log(activeSlide);

  return activeSlide ? (
    <div className={css.slide}>
      <div className={css.inner_window}>
        <>
          <h3 className="sc">{activeSlide.title}</h3>

          <h4>{activeSlide.subtitle}</h4>

          <p>{activeSlide.body}</p>

          <img src="https://media.chansen.design/placeholder.jpg">
            {activeSlide.img}
          </img>
        </>
      </div>
    </div>
  ) : (
    <div
      className={css.slide}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      no slide found
    </div>
  );
};
