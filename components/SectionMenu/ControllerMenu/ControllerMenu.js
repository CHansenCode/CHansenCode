import React from 'react';

import { Create, Edit, Delete } from '../Buttons';

export const ControllerMenu = ({ ...props }) => {
  return (
    <>
      {props.create === true && <Create {...props} />}
      {props.delete === true && <Delete {...props} />}
      {props.edit === true && <Edit {...props} />}
    </>
  );
};
