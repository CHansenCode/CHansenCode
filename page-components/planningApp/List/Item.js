import { Label, Flex } from 'components';

import { Progress } from './Progress';

import css from './style.module.scss';

export const Item = ({ data, ...props }) => {
  return (
    <div className={`pc1b ${css.item}`} onClick={props.onClick}>
      <header className={css.card}>
        <div>
          <Label bodyClass="sc" body={data.title} />
          <Label label="owners">
            <Flex>
              {data.owners.map((o, i) => (
                <div key={o._id} className={`pc5b ${css.owners_users}`}>
                  <p className="sc">{o}</p>
                </div>
              ))}
            </Flex>
          </Label>
          <Label label="users">
            <Flex>
              {data.users.map((o, i) => (
                <div key={o._id} className={`pc5b ${css.owners_users}`}>
                  <p className="sc">{o}</p>
                </div>
              ))}
            </Flex>
          </Label>
        </div>

        <div className={css.descr}>
          <h5>
            <i>{`""`}</i> {data.body} <i>{`""`}</i>
          </h5>
        </div>
      </header>

      <aside className={css.stages_wrapper}>
        <Progress data={data.stages[0]} index="1" />
        <Progress data={data.stages[1]} index="2" />
        <Progress data={data.stages[2]} index="3" />
        <Progress data={data.stages[3]} index="4" />
      </aside>
    </div>
  );
};
