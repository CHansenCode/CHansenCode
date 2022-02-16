import { useState } from 'react';

import { Create, Delete, Edit, Settings } from './Buttons';

import css from './bsview.module.scss';

export const Controllers = ({ controller, setController, ...props }) => {
  //
  const [fold, setFold] = useState(true);

  async function toggleCreating() {
    setController({
      ...controller,
      isCreating: !controller.isCreating,
    });
  }
  async function toggleEditing() {
    setController({
      ...controller,
      isEditing: !controller.isEditing,
    });
  }
  async function toggleDeleting() {
    setController({
      ...controller,
      isDeleting: !controller.isDeleting,
    });
  }

  return (
    <div className={css.controllers}>
      {(props.delete === true ||
        props.edit === true ||
        props.create === true) && (
        <Settings onClick={() => setFold(!fold)} active={!fold} />
      )}

      <div className={fold ? css.fold : css.unfold}>
        {props.create === true && (
          <Create
            onClick={() => toggleCreating(controller, setController)}
            disabled={fold}
            active={controller.isCreating}
          />
        )}
        {props.edit === true && (
          <Edit
            onClick={() => toggleEditing(controller, setController)}
            disabled={fold}
            active={controller.isEditing}
          />
        )}
        {props.delete === true && (
          <Delete
            onClick={() => toggleDeleting(controller, setController)}
            disabled={fold}
            active={controller.isDeleting}
          />
        )}
      </div>
    </div>
  );
};
