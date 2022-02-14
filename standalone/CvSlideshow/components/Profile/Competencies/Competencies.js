import { useState } from 'react';

import { Flex, Button } from '../../';
import { Score } from './Score';

import css from './Competencies.module.scss';

export const Competencies = () => {
  const [category, setCategory] = useState('digital');

  return (
    <div className={css.main}>
      <Flex className={css.header}>
        <p>Competencies :</p>
        <Button
          text="programs"
          active={category === 'digital' ? true : false}
          onClick={() => setCategory('digital')}
        />
        <Button
          text="Languages"
          active={category === 'language' ? true : false}
          onClick={() => setCategory('language')}
        />
      </Flex>

      <div className={css.body}>
        {category === 'digital' ? (
          <>
            <div>
              <Score title="Adobe" type="adobe" score={93} />
              <Score title="SketchUp" type="sketch" score={89} />
              <Score title="AutoCAD" type="auto" score={95} />
              <Score title="VS Code" type="vscode" score={91} />
            </div>

            <div>
              <Score title="Blender" type="blender" score={70} />
              <Score title="Vray" type="" score={84} />
            </div>
          </>
        ) : (
          <>
            <div>
              <Score title="Swedish" type="swe" score={100} />
              <Score title="English" type="gb" score={100} />
              <Score title="Danish" type="swe" score={65} />
              <div style={{ height: '1rem', marginBottom: '0.25rem' }} />
            </div>

            <div></div>
          </>
        )}
      </div>
    </div>
  );
};
