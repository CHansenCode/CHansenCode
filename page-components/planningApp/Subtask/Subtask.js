import { Button, TypeInput } from 'components';

import css from './Subtask.module.scss';

export const Subtask = ({ data, controller, index, ...props }) => {
  //

  async function handleChange(e, key) {
    let newStages = [...props.formData.stages];
    let newSubtask = { ...data, [key]: e.target.value };

    newStages[index.stage].tasks[index.task].subtasks[index.sub] = newSubtask;

    props.setFormData({ ...props.formData, stages: newStages });
    props.setController({ ...controller, triggerDB: controller.triggerDB + 1 });
  }
  async function toggleResolved(e) {
    let newStages = [...props.formData.stages];
    let newSubtask = { ...data, resolved: !data.resolved };

    newStages[index.stage].tasks[index.task].subtasks[index.sub] = newSubtask;

    props.setFormData({ ...props.formData, stages: newStages });
    props.setController({ ...controller, triggerDB: controller.triggerDB + 1 });
  }
  async function deleteSubtask() {
    let newStages = [...props.formData.stages];
    let filteredSubtasks = newStages[index.stage].tasks[
      index.task
    ].subtasks.filter(subtask => subtask.id !== data.id);

    newStages[index.stage].tasks[index.task].subtasks = filteredSubtasks;

    props.setFormData({ ...props.formData, stages: newStages });
    props.setController({ ...controller, triggerDB: controller.triggerDB + 1 });
  }

  return (
    <div className={css.wrapper}>
      <div className={`${css.card}`}>
        <ResolvedToggle resolved={data.resolved} onClick={toggleResolved} />

        <TypeInput
          value={data.title}
          onChange={e => handleChange(e, 'title')}
          disabled={!controller.isEditing}
        />
      </div>

      {controller.isDeleting && (
        <Button
          className={`alert alert-bg05 alert-b3 ${css.delete_button}`}
          text="x"
          onClick={deleteSubtask}
        />
      )}
    </div>
  );
};

const ResolvedToggle = ({ resolved, onClick }) => {
  return (
    <>
      <aside
        className={`pc3b ${resolved ? 'success-bg05' : 'warning-bg05'} ${
          css.toggle_resolved
        }`}
        onClick={onClick}
      >
        {resolved ? 'v' : 'x'}
      </aside>
    </>
  );
};
