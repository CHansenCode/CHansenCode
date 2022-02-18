import { useState, useEffect } from 'react';

import {
  SiAdobe,
  SiSketchup,
  SiBlender,
  SiAutodesk,
  SiVisualstudiocode,
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiJavascript,
  SiTypescript,
} from 'react-icons/si';
import { CgSweden } from 'react-icons/cg';
import { GiUnionJack } from 'react-icons/gi';

import css from './Score.module.scss';

export const Score = ({ type, title, score, info }) => {
  const [mount, setMount] = useState(false);
  //
  useEffect(() => !mount && setMount(true), []);

  const iStyle = {
    width: `${mount ? score : '0'}%`,
    transition: ' 0.7s ease',
  };
  return (
    <div className={css.score_card}>
      <div className={css.icon}>
        <IconSwitch type={type} />
      </div>

      <h6>{title}</h6>

      <div className={`pc3b ${css.score_Sheet}`}>
        <div style={iStyle} className={css.score_indicator} />
      </div>

      <h5 className="pc3b">!</h5>
    </div>
  );
};

const IconSwitch = ({ type }) => {
  switch (type) {
    case 'adobe':
      return <SiAdobe />;
      break;
    case 'sketch':
      return <SiSketchup />;
      break;
    case 'blender':
      return <SiBlender />;
      break;
    case 'swe':
      return <CgSweden />;
      break;
    case 'den':
      return (
        <div style={{ color: 'red', fill: 'red' }}>
          <CgSweden />
        </div>
      );
      break;
    case 'gb':
      return <GiUnionJack />;
      break;
    case 'auto':
      return <SiAutodesk />;
      break;
    case 'vscode':
      return <SiVisualstudiocode />;
      break;
    case 'react':
      return <SiReact />;
      break;
    case 'next':
      return <SiNextdotjs />;
      break;
    case 'vercel':
      return <SiVercel />;
      break;
    case 'js':
      return <SiJavascript />;
      break;
    case 'ts':
      return <SiTypescript />;
      break;

    default:
      return <div />;
      break;
  }
};
