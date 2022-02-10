import { TypeInput, Button } from 'components';

import css from './Stage.module.scss';

export const Stage = ({ data, controller, ...props }) => {
  //
  async function handleStageChange(e) {
    e.preventDefault();
  }

  return (
    <div className={css.wrapper}>
      <div className="sc3b" style={{ padding: '1rem' }}>
        <h4 className="sc">STAGE {props.index.stage + 1}</h4>

        <TypeInput
          className="sc"
          value={data.title}
          onChange={handleStageChange}
          disabled={!controller.isEditing}
        />
        <TypeInput
          label="deadline"
          value={data.deadline}
          onChange={handleStageChange}
          disabled={!controller.isEditing}
        />
        <TypeInput
          type="textarea"
          label="body"
          value={data.body}
          onChange={handleStageChange}
          disabled={!controller.isEditing}
        />

        <div>{props.children}</div>
      </div>

      {controller.isDeleting && <DeleteButton />}
    </div>
  );
};

const DeleteButton = () => {
  return <Button text="x" />;
};
