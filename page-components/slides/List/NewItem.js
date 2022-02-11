import { useState } from 'react';

import { Button, Flex } from 'components';

import css from './style.module.scss';

export const NewItem = ({ data, ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={`pc3b ${css.item}`}>
      {open ? (
        <>
          {props.children}
          <Button
            width="3rem"
            fontSize="1rem"
            padding="0.25rem 0"
            onClick={() => setOpen(false)}
            text="<"
          />
        </>
      ) : (
        <Flex height="100%" center={true} onClick={() => setOpen(true)}>
          <p> + Create new</p>
        </Flex>
      )}
    </li>
  );
};
