export const View = props => {
  return (
    <>
      <div className="view_slides">{props.children}</div>

      <style jsx>
        {`
          .view_slides {
            position: relative;
            height: 100%;
            width: 100%;

            display: grid;
            grid-template: 'bar slide' 1fr / auto 1fr;
          }
        `}
      </style>
    </>
  );
};
