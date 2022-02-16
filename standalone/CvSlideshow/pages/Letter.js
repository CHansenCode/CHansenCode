import { RenderRichText } from 'components';
import { FadeIn } from '../components';

import css from './styles/Letter.module.scss';

export const Letter = ({ data }) => {
  return (
    <FadeIn>
      <div className={css.main}>
        <div className={`pc3b ${css.paper}`}>
          <header>
            <h4 className="sc">Letter of motivation</h4>
          </header>

          <div>
            <Paragraph>
              <RenderRichText data={data.richTextOne} />
            </Paragraph>

            <Paragraph>
              <RenderRichText data={data.richTextTwo} />
            </Paragraph>

            <Paragraph>
              <RenderRichText data={data.richTextThree} />
            </Paragraph>

            <Paragraph>
              <RenderRichText data={data.richTextFour} />
            </Paragraph>
          </div>

          <p>Kind regards, Christoffer Hansen</p>
        </div>
      </div>
    </FadeIn>
  );
};

const Paragraph = ({ children }) => {
  return (
    <>
      <div className={css.paragraph}>{children}</div>

      <style jsx>
        {`
          .cv_paragraph_richtext {
            border: thin solid;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

const Leaf = ({ ...props }) => {
  return <span>{props.children}</span>;
};
