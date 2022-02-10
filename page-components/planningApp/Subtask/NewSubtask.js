import React from 'react';

export const NewSubtask = ({ index, ...props }) => {
  async function createNewSubtask() {}

  return (
    <>
      <div className="planner_new_subtask pc3b" onClick={createNewSubtask}>
        + new stage
      </div>

      <style jsx>
        {`
          .planner_new_subtask {
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;

            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};
