import React from 'react';

import { Create, Edit, Delete } from '../Buttons';

export const ControllerMenu = ({ ...props }) => {
  return (
    <div style={{ display: 'flex' }}>
      {props.create === true && <Create {...props} />}
      {props.delete === true && <Delete {...props} />}
      {props.edit === true && <Edit {...props} />}
    </div>
  );
};
