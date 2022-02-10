import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { initController, initFormData } from './initData';

import { FullSection, SectionMenu, Button, FlexWrap } from 'components';
import { Label, TypeInput, Flex } from 'components';
import { Project, Stage, Task, Subtask } from 'page-components/planningApp';

import * as api from 'api-axios/planningApp';
import {
  GET_PLANS,
  CREATE_PLAN,
  PATCH_PLAN,
  DELETE_PLAN,
  TOAST,
} from 'actions';

export default function PlanningApp({ ...props }) {
  const dispatch = useDispatch();
  //

  //#region STATES
  const [controller, setController] = useState({ ...initController });
  const [formData, setFormData] = useState({ ...initFormData });
  const [activeId, setActiveId] = useState('');
  //#endregion

  //#region DATA LISTENERS
  const storeData = useSelector(s => s.planningApp);
  const activePost = useSelector(s =>
    s.planningApp.find((o, i) => o._id === activeId),
  );
  useEffect(() => getAll(), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);
  //#endregion

  //#region CRUD
  async function getAll() {
    try {
      const data = await api.getAll();
      dispatch({ type: GET_PLANS, payload: data });
    } catch (error) {
      console.log('Error in "pages/media" dispatching data => ', error);
    }
  }
  async function postOne(formData) {
    try {
      const data = await api.postOne(formData);
      dispatch({ type: CREATE_PLAN, payload: data });
      clear();
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post created!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: postMedia', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Post attempt failed, please try again.',
        },
      });
    }
  }
  async function deleteOne(id) {
    try {
      const data = await api.deleteOne(id);
      dispatch({ type: DELETE_PLAN, payload: data._id });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post deleted!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: deleteOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Delete attempt failed, please try again.',
        },
      });
    }
  }
  async function patchOne(id, formData) {
    try {
      const data = await api.patchOne(id, formData);
      dispatch({ type: PATCH_PLAN, payload: data });
      dispatch({
        type: TOAST,
        payload: { type: 'success', message: 'Post updated!' },
      });
    } catch (error) {
      console.log('ErrorIn: pages/media, action: patchOne', error);
      dispatch({
        type: TOAST,
        payload: {
          type: 'warning',
          message: 'Update attempt failed, please try again.',
        },
      });
    }
  }
  //#endregion

  //#region CONTROLLER funcs
  async function enableDeleting() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }
  async function enableEditing() {
    setController({ ...controller, isEditing: !controller.isEditing });
  }
  async function toggleCreating() {
    setController({ ...controller, isCreating: !controller.isCreating });
  }
  //#endregion

  //#region  FORM HANDLING
  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initFormData });
    setActiveId('');
  }
  //#endregion

  props = {
    ...props,
    controller,
  };

  return (
    <FullSection hasMenu="true" title="Planning APP">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            text="NEW"
            active={controller.isCreating}
            onClick={toggleCreating}
          />

          {(activeId || controller.isCreating) && (
            <Button text="<" fontSize="1.25rem" onClick={clear} />
          )}

          <div>aID: {activeId && activeId.substring(0, 5)}</div>
          <div>aFO: {formData && formData._id.substring(0, 5)}</div>
        </div>

        <div>
          <Button
            text="DEL"
            active={controller.isDeleting}
            onClick={enableDeleting}
          />
          <Button
            text="EDIT"
            active={controller.isEditing}
            onClick={enableEditing}
          />
        </div>
      </SectionMenu>

      {activeId ? (
        activePost && (
          <>
            <Project data={activePost} />

            <Stages>
              {activePost.stages.map((s, i) => (
                <Stage
                  index={{ stage: i }}
                  key={s._id || s.id}
                  data={activePost.stages[0]}
                  {...props}
                >
                  {s.tasks.map((t, ind) => (
                    <Task
                      index={{ stage: i, task: ind }}
                      key={t._id || t.id}
                      data={t}
                      {...props}
                    >
                      {t.subtasks.map((sub, index) => (
                        <Subtask
                          index={{ stage: i, task: ind, sub: index }}
                          key={t._id || t.id}
                          data={sub}
                          {...props}
                        />
                      ))}
                    </Task>
                  ))}
                </Stage>
              ))}

              {activePost.stages.length < 2 && <div>cow</div>}
            </Stages>
          </>
        )
      ) : (
        <FlexWrap>
          {storeData.length ? (
            <>
              {storeData.map((p, i) => (
                <ProjectCard
                  key={p._id}
                  data={p}
                  onClick={() => setActiveId(p._id)}
                />
              ))}
            </>
          ) : (
            <Flex height="100%" center={true}>
              'Fetching data from db...'
            </Flex>
          )}
        </FlexWrap>
      )}
    </FullSection>
  );
}

const ProjectCard = ({ data, ...props }) => {
  return (
    <div onClick={props.onClick}>
      <Label label="title" body={data.title} />
    </div>
  );
};

// const Project = ({ data }) => {
//   return (
//     <div className="bg pc3b" style={{ padding: '1rem' }}>
//       <Label label="title" body={data.title} />
//       <Label label="category" body={data.category} />
//       <Label label="body" body={data.body} />
//       <Label label="deadline" body={data.deadline} />
//       <Label label="startTime" body={data.startTime} />
//     </div>
//   );
// };

const Stages = ({ children }) => {
  return (
    <>
      <div className="stage_wrapper">{children}</div>

      <style jsx>
        {`
          .stage_wrapper {
            margin-top: 2rem;

            display: grid;
            grid-template: 'a b c d' 1fr / 1fr 1fr 1fr 1fr;
            gap: 2rem;
          }
        `}
      </style>
    </>
  );
};
