import { AiOutlineUnorderedList, AiOutlineAppstore } from 'react-icons/ai';

import { Button } from 'components';

export const ToggleView = ({ ...props }) => {
  return (
    <Button onClick={props.onClick}>
      {props.controller.listView === 'thumb' ? (
        <AiOutlineAppstore size="1.25rem" />
      ) : (
        <AiOutlineUnorderedList size="1.25rem" />
      )}
    </Button>
  );
};
