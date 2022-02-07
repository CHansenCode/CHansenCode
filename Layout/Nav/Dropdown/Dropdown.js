import { useState } from 'react';

import { Button } from 'components';

import css from './Dropdown.module.scss';

export const Dropdown = ({ ...props }) => {
  const [open, setOpen] = useState(false);

  const iStyle = {
    height: open ? `${props.children.length * 2.5}rem` : '1px',
    opacity: open ? '1' : '0',
    pointerEvents: open ? 'all' : 'none',

    transition: '0.3s ease',
  };

  return (
    <div className={`bg pc3b ${css.wrapper}`}>
      <Button
        className={`${css.toggleButton}${open ? ' sc' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <h4
          style={{
            transform: open ? 'rotate(270deg)' : 'rotate(90deg)',
            transition: '0.3s ease',
          }}
        >{`>`}</h4>
      </Button>

      <div style={iStyle} className="bg pc3b">
        {props.children}
      </div>
    </div>
  );
};
