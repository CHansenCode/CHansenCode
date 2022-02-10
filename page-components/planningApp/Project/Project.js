import { TypeInput, Label } from 'components';

import css from './Project.module.scss';

export const Project = ({ data }) => {
  return (
    <div className="bg pc3b" style={{ padding: '1rem' }}>
      <Label label="title" body={data.title} />
      <Label label="category" body={data.category} />
      <Label label="body" body={data.body} />
      <Label label="deadline" body={data.deadline} />
      <Label label="startTime" body={data.startTime} />
    </div>
  );
};
