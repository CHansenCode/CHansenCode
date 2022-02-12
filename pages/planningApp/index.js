import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FullSection, SectionMenu } from 'components';
import { Flex, Button, Empty } from 'components';

import { List, Item } from 'page-components/planningApp';
import { Project, Stage, Task, Subtask } from 'page-components/planningApp';
import { NewStage, NewTask, NewSubtask } from 'page-components/planningApp';
import { initFormData, initController } from 'page-components/planningApp';

import { useDebouncedCallback } from 'lib';
import * as api from 'api/planningApp';

export default function PlanningApp() {
  const dispatch = useDispatch();

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
  useEffect(() => dispatch(api.getAll()), [dispatch]);
  useEffect(() => activePost && setFormData({ ...activePost }), [activePost]);
  //#endregion

  //#region  FORM HANDLING
  async function clear(e) {
    e && e.preventDefault();
    setController({ ...controller, isCreating: false });
    setFormData({ ...initFormData });
    setActiveId('');
  }
  //#endregion

  //#region AUTOSAVE func.
  async function updateProject(activeId, formData) {
    dispatch(api.patchOne(activeId, formData));
  }
  const [debounceHandler] = useDebouncedCallback(
    (activeId, formData) => updateProject(activeId, formData),
    1000,
  );
  useEffect(() => {
    controller.triggerDB > 0 && debounceHandler(activeId, formData);
  }, [controller.triggerDB]);
  //#endregion

  let props = {
    controller,
    setController,
    formData,
    setFormData,
  };

  return (
    <FullSection hasMenu="true" title="Planning APP">
      <SectionMenu>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            text="NEW"
            active={controller.isCreating}
            onClick={() =>
              setController({
                ...controller,
                isCreating: !controller.isCreating,
              })
            }
          />

          {(activeId || controller.isCreating) && (
            <Button text="<" fontSize="1.25rem" onClick={clear} />
          )}

          <div>aID: {activeId && activeId.substring(0, 5)}</div>
          <div>aFO: {formData && formData._id.substring(0, 5)}</div>
        </div>

        {/* SETTINGS MENU */}
      </SectionMenu>

      {activeId ? (
        activePost && (
          <>
            <Project data={formData} {...props}>
              {formData.stages.map((s, i) => (
                <Stage
                  key={s._id || s.id}
                  index={{ stage: i }}
                  data={s}
                  {...props}
                >
                  {s.tasks.map((t, ind) => (
                    <Task
                      key={t._id || t.id}
                      index={{ stage: i, task: ind }}
                      data={t}
                      {...props}
                    >
                      {t.subtasks.map((sub, index) => (
                        <Subtask
                          key={sub._id || sub.id}
                          index={{ stage: i, task: ind, sub: index }}
                          data={sub}
                          {...props}
                        />
                      ))}

                      {controller.isEditing && (
                        <NewSubtask
                          index={{ stage: i, task: ind }}
                          {...props}
                        />
                      )}
                    </Task>
                  ))}

                  {controller.isEditing && (
                    <NewTask index={{ stage: i }} {...props} />
                  )}
                </Stage>
              ))}

              {formData.stages.length < 4 && controller.isEditing && (
                <NewStage {...props} />
              )}
            </Project>

            <Empty height="15vh" />
          </>
        )
      ) : (
        <List>
          {storeData.length ? (
            <>
              {storeData.map((p, i) => (
                <Item key={p._id} data={p} onClick={() => setActiveId(p._id)} />
              ))}
            </>
          ) : (
            <Flex height="100%" center={true}>
              {`'Fetching data from db...'`}
            </Flex>
          )}
        </List>
      )}
    </FullSection>
  );
}
