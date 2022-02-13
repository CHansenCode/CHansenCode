import { Logo } from 'components';

import { List, Item } from '../List';

import css from './style.module.scss';

export const LandingPage = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <aside className={css.intro}>
        <Logo width="20rem" margin="0 0 3rem 0" />

        <h4 className="sc">CHansenDesign slides app</h4>

        <p>
          {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          voluptatibus quibusdam? Dolor repellat facilis eius quas voluptates
          quia voluptas provident earum enim vero, perferendis, officiis quo
          dolorem illo ullam natus obcaecati vitae maiores dolores fuga tenetur
          exercitationem possimus repudiandae pariatur.`}
        </p>
      </aside>

      <div>
        <p className="sc">Published presentations :</p>

        <List>
          {props.store.map(
            (p, i) =>
              p.published === true && (
                <Item
                  key={p._id}
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
