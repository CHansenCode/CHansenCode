import { Label, Flex } from '../';

import { Competencies } from './Competencies/Competencies';
import useDates from '../../lib/useDates';

import css from './Profile.module.scss';

export const Profile = ({ ...props }) => {
  const { y, mm, dd } = useDates();

  let month = mm - 11 > -1 ? 0 : 1;
  let day = dd - 12 > -1 ? 0 : 1;
  let age = y - 1988 - month - day;
  let ageDays = (((12 - (11 - mm == 0 ? 12 : 11 - mm)) * 30 + (dd - 12)) / 365)
    .toFixed(3)
    .substring(2);

  return (
    <div className={`pc3b ${css.profile}`}>
      <header>
        <h4>Curriculum Vitae</h4>
        <div className={css.pseudo_underscore} />
      </header>

      <div>
        <Flex justifyContent="space-between">
          <Label bodyClass="sc" label="name :" text="Christoffer Hansen" />
          <Label label="age :">
            {age}
            <span
              style={{ fontSize: '14px', opacity: 0.8 }}
            >{`.${ageDays} `}</span>
            years
          </Label>
        </Flex>

        <>
          <Label label="Education :" />
          <p>
            <span className="sc">Arkitekt MAA</span>, from the Danish royal
            academy of arts
          </p>
          <p>Self-educated MER(next.js)N-stack developer</p>
        </>
      </div>

      <div>
        <p>
          Utbildad <b>Arkitekt MAA</b> från Köpenhamns arkitektskola
          <i>{` & `}</i>
          Självlärd <b>Front-end kodare</b>
        </p>
      </div>

      <Competencies />
    </div>
  );
};
