import { Logo, Flex } from 'components';

import { List, Item } from '../List';

import css from './style.module.scss';

export const LandingPage = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <aside className={css.intro}>
        <Logo width="20rem" margin="0 0 3rem 0" />

        <h4 className="sc">CHansenDesign slides app</h4>

        <p>
          {`
          Viewing app for slides created from the CHansenCode cms system.
          Designed as a simple to use quick mock-up presentation tool able to be used simply
          with the keyboard.
          `}
        </p>
        <br />
        <br />
        <p>{`Keybindings :`}</p>
        <br />
        <p>{`backspace - go back to this page`}</p>
        <p>{`arrow right - next slide`}</p>
        <p>{`arrow left  - previous slides`}</p>
      </aside>

      <div className={css.list_container}>
        <List>
          <h4>Published presentations</h4>

          {props.store.map(
            (p, i) =>
              p.published === true && (
                <Item
                  key={p._id}
                  i={i}
                  data={p}
                  onClick={() => props.setActiveId(p._id)}
                />
              ),
          )}
        </List>
      </div>
    </div>
  );
};

const data = {
  paragraphOne: `
Viewing app for slides created from the CHansenCode cms system.
Designed as a simple to use quick mock-up presentation tool able to be used simply
with the keyboard.
`,
  paragraphTwo: `
Key-bindings are the following:
backspace   - go back to this page
arrow right - next slide
arrow left  - previous slides
`,
};
