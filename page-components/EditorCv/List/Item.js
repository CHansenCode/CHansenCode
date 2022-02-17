import React from 'react';

import { Button, Flex, InputLabel, Diode } from 'components';

import css from './style.module.scss';

export const Item = ({ data, ...props }) => {
  return (
    <>
      <div className={css.item_wrapper}>
        <li className={`pc3b ${css.item}`} onClick={props.onClick}>
          <header>
            <Flex justifyContent="space-between">
              <p className="sc">{data.whom}</p>
              <Diode
                size="0.75rem"
                toggle={data.published}
                hoverInfo={data.published ? 'published' : 'Not published'}
              />
            </Flex>

            <Flex flexDirection="column" height="3rem">
              <InputLabel label="company" />
              <p>{data.company}</p>
            </Flex>
            <Flex flexDirection="column" height="3rem">
              <InputLabel label="urlParam" />
              <p>{data.urlParam}</p>
            </Flex>
          </header>

          <footer>
            <Flex justifyContent="space-between" margin="0.75rem 0 0 0">
              <div>
                <InputLabel label="deadline" />
                <h5>{data.deadline}</h5>
              </div>
              <div>
                <InputLabel label="publishedAt" />
                <h5>{data.publishedAt}</h5>
              </div>
            </Flex>
          </footer>
        </li>

        {props.controller.isDeleting && (
          <Button
            height="2rem"
            width="2rem"
            text="X"
            onClick={props.onDelete}
          />
        )}
      </div>
    </>
  );
};

// Data structure
//
// "_id": "61fcf96a98af1b7896802b80",
// "whom": "Finally we can fix everything here !!! woopie",
// "company": "Cipaei's webdesign",
// "urlParam": "what of it",
// "deadline": "2022-02-03",
// "publishedAt": "2022-02-04",
// "nameOfHandler": "Sara Engberg",
// "published": false,
// "richtextOne" : []
// "richtextTwo" : []
// "richtextThree" : []
// "richtextFour" : []
