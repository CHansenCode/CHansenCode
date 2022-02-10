import { useState } from 'react';
import { TypeInput, Button, Flex } from 'components';

import css from './Task.module.scss';

export const Task = ({ data, controller, ...props }) => {
  const [open, setOpen] = useState(false);
  //
  async function handleTaskChange(e, objKey) {
    let newStages = [...props.formData.stages];
    let newTask = { ...props.data, [objKey]: e.target.value };

    newStages[props.index.stage].tasks[props.index.task] = newTask;

    props.setFormData({ ...props.formData, stages: newStages });
  }

  return (
    <div className={css.wrapper}>
      <div className={`pc3b ${css.card}`}>
        <header>
          <div className={css.title_and_version}>
            <TypeInput
              className="sc"
              value={data.title}
              disabled={!controller.isEditing}
              onChange={e => handleTaskChange(e, 'title')}
            />
            <TypeInput
              value={data.v}
              disabled={!controller.isEditing}
              onChange={e => handleTaskChange(e, 'v')}
            />
          </div>
        </header>

        <>
          <div class="pc1b">
            <button
              className={`pc1b ${css.subtasks_button}`}
              width="100%"
              text="subtasks"
              onClick={() => setOpen(!open)}
            >
              <h5>{`subtasks :`}</h5>
              <h5>{`>`}</h5>
            </button>

            {open && <div>{props.children}</div>}
          </div>
        </>
      </div>

      {controller.isDeleting && <DeleteButton />}
    </div>
  );
};

const DeleteButton = () => {
  return <Button className={css.delete_button} text="x" />;
};
