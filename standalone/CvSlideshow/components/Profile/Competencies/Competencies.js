import { useState } from 'react';

import { Flex, Button } from '../../';
import { Score } from './Score';

import css from './Competencies.module.scss';

export const Competencies = () => {
  const [category, setCategory] = useState('programs');

  return (
    <div className={css.main}>
      <Flex className={css.header}>
        <p>Competencies :</p>
        <Button
          text="programs"
          active={category === 'programs' ? true : false}
          onClick={() => setCategory('programs')}
        />
        <Button
          text="Coding"
          active={category === 'coding' ? true : false}
          onClick={() => setCategory('coding')}
        />
        <Button
          text="Languages"
          active={category === 'languages' ? true : false}
          onClick={() => setCategory('languages')}
        />
      </Flex>

      <div className={css.body}>
        <Scores category={category} />
      </div>
    </div>
  );
};

const Scores = ({ category }) => {
  switch (category) {
    case 'programs':
      return (
        <>
          <div>
            <Score title="Adobe" type="adobe" score={93} />
            <Score title="SketchUp" type="sketch" score={89} />
            <Score title="AutoCAD" type="auto" score={95} />
            <Score title="Revit" type="auto" score={82} />
          </div>

          <div>
            <Score title="Blender" type="blender" score={75} />
            <Score title="Vray" type="" score={84} />
          </div>
        </>
      );
      break;

    case 'coding':
      return (
        <>
          <div>
            <Score title="React" type="react" score={90} />
            <Score title="Next.js" type="next" score={89} />
            <Score title="Vercel" type="vercel" score={95} />
            <Score title="JS" type="js" score={91} />
          </div>

          <div>
            <Score title="testing" type="blender" score={22} />
            <Score title=".php" type="" score={84} />
            <Score title="Vray" type="" score={84} />
            <Score title="TS" type="ts" score={32} />
          </div>
        </>
      );
      break;

    case 'languages':
      return (
        <>
          <div>
            <Score title="Swedish" type="swe" score={100} />
            <Score title="English" type="gb" score={100} />
            <Score title="Danish" type="swe" score={65} />
            <div style={{ height: '1rem', marginBottom: '0.25rem' }} />
          </div>

          <div></div>
        </>
      );
      break;

    default:
      return (
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
      );
      break;
  }
};
