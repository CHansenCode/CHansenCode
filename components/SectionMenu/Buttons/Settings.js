import { AiOutlineSetting } from 'react-icons/ai';
import { Button } from 'components';

import React from 'react';

export const Settings = () => {
  return (
    <Button active={!fold} className="pc5b" onClick={() => setFold(!fold)}>
      <AiOutlineSetting size="1.5rem" />
    </Button>
  );
};
