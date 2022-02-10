import React from 'react';

export const NewTask = ({ index, ...props }) => {
  async function createNewtask() {
    // let stages = [...props.formData.stages];
    // let filteredStages = stages.filter(s => s.id !== props.data.id);
    // props.setFormData({
    //   ...props.formData,
    //   stages: filteredStages,
    // });
  }

  return (
    <>
      <div className="planner_new_task pc3b" onClick={createNewtask}>
        + new task
      </div>

      <style jsx>
        {`
          .planner_new_task {
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
