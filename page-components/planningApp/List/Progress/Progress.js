import { useState, useEffect } from 'react';

import css from './Progress.module.scss';

export const Progress = ({ data, ...props }) => {
  const [stageData, setStageData] = useState({ ...data });
  const [progress, setProgress] = useState({
    resolved: 0,
    unresolved: 0,
    resolvedMinutes: 0,
    unresolvedMinutes: 0,
  });

  async function calculateProgress() {
    let resolved = 0;
    let resolvedMinutes = 0;

    let unresolved = 0;
    let unresolvedMinutes = 0;

    stageData.tasks &&
      (await stageData.tasks.map((task, i) => {
        {
          task.subtasks.map((sub, i) => {
            //
            if (sub.resolved === true) {
              resolved = resolved + 1;
              resolvedMinutes = resolvedMinutes + sub.timeRemaining;
            } else if (sub.resolved === false) {
              unresolved = unresolved + 1;
              unresolvedMinutes = unresolvedMinutes + sub.timeRemaining;
            }
            //
          });
        }
      }));

    const toState = {
      resolved: resolved,
      resolvedMinutes: resolvedMinutes,

      unresolved: unresolved,
      unresolvedMinutes: unresolvedMinutes,
    };

    setProgress({ ...progress, ...toState });
  }
  useEffect(() => {
    stageData && calculateProgress();
  }, [stageData]);

  return data ? (
    <>
      <div className={`${css.progress_wrapper}`}>
        <header>
          <h5>stage {props.index}</h5>
          <p className="sc">{data.title && data.title.substring(0, 15)}</p>
        </header>

        <div className={css.resolved_unresolved}>
          <h5>resolved :</h5>
          <div>
            <h5>{progress.resolved}</h5>
            <h5> {` / `} </h5>
            <h5>{progress.unresolved}</h5>
          </div>
        </div>

        <div className={css.time_left}>
          <h5>{`time left: `}</h5>
          <h5>
            <span className="sc">{progress.unresolvedMinutes}</span>
            <i>mins</i>
          </h5>
        </div>

        <div className={css.deadline}>
          <h5>deadline :</h5>
          <h5>{data.deadline}</h5>
        </div>
      </div>
    </>
  ) : (
    <div className={css.progress_wrapper}></div>
  );
};
