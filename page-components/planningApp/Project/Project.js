import { TypeInput, Label } from 'components';
import { initController } from 'page-components/cv';

import css from './Project.module.scss';

export const Project = ({ data, controller, ...props }) => {
  //
  async function handleProjectChange(e, objKey) {
    props.setFormData({ ...props.formData, [objKey]: e.target.value });
  }

  return (
    <>
      <div className={`bg pc3b ${css.wrapper}`}>
        <div>
          <TypeInput
            label="title"
            className="sc"
            value={data.title}
            onChange={handleProjectChange}
            disabled={!controller.isEditing}
          />
          <TypeInput
            label="category"
            className="sc"
            value={data.category}
            onChange={handleProjectChange}
            disabled={!controller.isEditing}
          />
        </div>

        <aside>
          <TypeInput
            type="textarea"
            label="descr"
            className="sc"
            value={data.body}
            onChange={handleProjectChange}
            disabled={!controller.isEditing}
          />
          <TypeInput
            label="category"
            className="sc"
            value={data.category}
            onChange={handleProjectChange}
            disabled={!controller.isEditing}
          />
        </aside>
      </div>

      <div></div>
    </>
  );
};
