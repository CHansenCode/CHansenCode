import { RenderRichText } from 'components';

import css from './styles/Letter.module.scss';

export const Letter = ({ data }) => {
  return (
    <>
      <div className={css.letters}>
        <h4>title</h4>

        <Paragraph>
          <RenderRichText data={data.richTextOne} />
        </Paragraph>

        <Paragraph>
          {data.richTextTwo &&
            data.richTextTwo.map((t, i) => (
              <span key={`rt${t.type}${i}`}>
                {t.children.map((a, i) => (
                  <span key={`${a}${i}`}>{a.text}</span>
                ))}
              </span>
            ))}
        </Paragraph>

        <Paragraph>
          {data.richTextThree &&
            data.richTextThree.map((t, i) => (
              <span key={`rt${t.type}${i}`}>
                {t.children.map((a, i) => (
                  <span key={`${a}${i}`}>{a.text}</span>
                ))}
              </span>
            ))}
        </Paragraph>

        <Paragraph>
          {data.richTextFour &&
            data.richTextFour.map((t, i) => (
              <span key={`rt${t.type}${i}`}>
                {t.children.map((a, i) => (
                  <Leaf key={`${a}${i}`} data={a}>
                    {a.text}
                  </Leaf>
                ))}
              </span>
            ))}
        </Paragraph>
      </div>
    </>
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
