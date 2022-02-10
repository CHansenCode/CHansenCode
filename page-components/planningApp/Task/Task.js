import { useState } from 'react';
import { TypeInput, Button, Flex } from 'components';

import css from './Task.module.scss';

export const Task = ({ data, controller, index, ...props }) => {
  const [open, setOpen] = useState(false);
  //
  async function handleTaskChange(e, objKey) {
    let newStages = [...props.formData.stages];
    let newTask = { ...data, [objKey]: e.target.value };

    newStages[index.stage].tasks[index.task] = newTask;

    props.setFormData({ ...props.formData, stages: newStages });
  }
  async function toggleOpen() {
    setOpen(!open);
  }
  async function deleteTask() {
    let newStages = [...props.formData.stages];
    let filteredTasks = newStages[index.stage].tasks.filter(
      (s, i) => s.id !== data.id,
    );

    newStages[index.stage].tasks = filteredTasks;

    props.setFormData({ ...props.formData, stages: newStages });
  }

  return (
    <div className={css.wrapper}>
      <div className={`pc3b ${css.card}`} onClick={toggleOpen}>
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
      </div>

      <div class={`pc1b ${css.subtasks_wrapper}`}>
        <>{open && <div>{props.children}</div>}</>
      </div>

      {controller.isDeleting && <DeleteButton onClick={deleteTask} />}
    </div>
  );
};

const DeleteButton = ({ ...props }) => {
  return (
    <Button className={css.delete_button} text="x" onClick={props.onClick} />
  );
};
