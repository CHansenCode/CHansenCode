import React from 'react';

import css from './Letter.module.scss';

// import { letter } from 'config/Letters';

export const Letter = ({ ...props }) => {
  // const letters = letter[props.whom];
  // const pbData = props.data.pb;

  return (
    <div className={css.main}>
      <div>
        <h2 className="sc">letter</h2>

        {/* <Paragraph title={letters.paraOne.title} body={letters.paraOne.body} />
        <Paragraph title={letters.paraTwo.title} body={letters.paraTwo.body} /> */}
      </div>

      <div>
        {/* <Paragraph
          title={letters.paraThree.title}
          body={letters.paraThree.body}
        />
        <Paragraph
          title={letters.paraFour.title}
          body={letters.paraFour.body}
        /> */}
      </div>
    </div>
  );
};

const Paragraph = ({ title, body }) => {
  return (
    <div className={`pc3b ${css.paragraph}`}>
      <h4 className="sc">{title}</h4>
      <p>{body}</p>
    </div>
  );
};
