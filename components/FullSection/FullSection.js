import React, { Children } from 'react';

import css from './FullSection.module.scss';

export const FullSection = ({ title, hasMenu, children, ...props }) => {
  return (
    <section className={css.section}>
      {(hasMenu || title) && (
        <header className={css.header}>
          <div className={css.title}>
            {title && <h4 className="sc">{title}</h4>}
          </div>

          <div>{hasMenu && children && children[0]}</div>
        </header>
      )}

      <div className={css.child_wrapper}>
        <>
          {hasMenu
            ? //If hasMenu is true, steal the first child and place in header instead
              React.Children.map(children, (child, i) =>
                i === 0 ? null : React.cloneElement(child, { ...props }),
              )
            : React.Children.map(children, (child, i) => {
                return React.cloneElement(child, { ...props });
              })}
        </>
      </div>
    </section>
  );
};
