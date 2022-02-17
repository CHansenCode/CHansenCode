import css from './bsview.module.scss';

export const BacksideView = ({ ...props }) => {
  //

  const iStyle = {};

  let isParent = props.children ? true : false;
  let hasMenu = props.hasMenu ? true : false;

  console.log(hasMenu);

  return (
    <>
      <div id="main_view_bs" style={iStyle} className={css.main}>
        {isParent && (
          <>
            {hasMenu === true && (
              <>
                {props.children.length > 1 ? (
                  //Body & Menu
                  <>
                    <div className={css.main_menu}>{props.children[0]}</div>

                    <div className={css.main_body}>
                      {props.children.map((c, i) => (i === 0 ? null : c))}
                    </div>
                  </>
                ) : (
                  //only Menu
                  <div className={css.main_menu}>Why is this rendered ?</div>
                )}
              </>
            )}

            {hasMenu === false && (
              //only Body
              <div className={css.main_body}>{props.children}</div>
            )}
          </>
        )}
      </div>

      <style jsx>
        {`
          #main_view_bs {
            position: relative;
            height: 100vh;
            width: 100%;

            display: grid;
            grid-template: ${hasMenu
              ? `"menu" 4rem
            "body" 1fr / 1fr`
              : `"body" 1fr / 1fr`};
          }
        `}
      </style>
    </>
  );
};
