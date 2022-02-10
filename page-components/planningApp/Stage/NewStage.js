import { useState } from 'react';

import { newStage } from '../initData';

export const NewStage = ({ ...props }) => {
  const [hover, setHover] = useState(false);

  async function createNewStage() {
    let newStages = [...props.formData.stages, newStage];

    props.setFormData({
      ...props.formData,
      stages: newStages,
    });
  }

  return (
    <>
      <div
        className={`planner_new_stage pc5b${
          hover ? ' new_stage_hovered sc' : ''
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={createNewStage}
      >
        + new stage
      </div>

      <style jsx>
        {`
          .planner_new_stage {
            height: 100%;
            width: 100%;

            max-height: 15rem;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.2s ease;

            //init
            opacity: 0.5;
          }
          .new_stage_hovered {
            opacity: 1;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
