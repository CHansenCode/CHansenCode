import { useState, useEffect } from 'react';

import { Links } from './Links/Links';
import { Flex, Paragraph, Label, MapTags, Button } from '../../';

import { Tags } from './Tags/Tags';

import css from './Details.module.scss';

export const Details = ({ ...props }) => {
  const [activeData, setActiveData] = useState({});

  let appData = props.apps.find((a, i) => a.id === props.activeId);

  useEffect(() => {
    props.activeId ? setActiveData(appData) : setActiveData({});
  }, [props.activeId]);

  async function populateModal(e) {
    props.setModal(e.target.currentSrc);
  }

  return (
    <div className={`${css.details} bg pc3b`}>
      <header>
        <div className={css.info}>
          <Paragraph title={activeData.role}>
            <Flex>
              <Label label="role" text={activeData.name} />
              <Label label="version :" text={activeData.version} />
            </Flex>

            <Flex>
              <Label label="role" text={activeData.name} />
              <Label label="version :" text={activeData.version} />
            </Flex>
          </Paragraph>

          <MapTags title="tags" arr={activeData.tags} />
        </div>

        <aside className={css.img_wrapper}>
          {/* <Image
            src="https://media.chansen.design/placeholder.jpg"
            onClick={populateModal}
          /> */}
        </aside>
      </header>

      <div className={css.body}>
        <div>
          <Label label="description" text={activeData.descr} />
        </div>
        <div>
          {activeData.function ? (
            <>
              <MapTags
                title="Functions"
                arr={activeData.functions.implemented}
              />
              <br />
              <MapTags title="tags" arr={activeData.functions.inDevelopment} />
            </>
          ) : (
            ''
          )}
        </div>
      </div>

      <footer>
        <Links {...props} />
      </footer>

      <CloseButton {...props} />
    </div>
  );
};

const CloseButton = ({ setActiveId }) => {
  async function onClickClose(setData) {
    setData('');
  }

  return (
    <Button
      className={`${css.btn_close} bg pc3b`}
      onClick={() => onClickClose(setActiveId)}
    >
      <h4>X</h4>
    </Button>
  );
};
