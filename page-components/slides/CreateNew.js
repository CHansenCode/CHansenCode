import { useState } from 'react';

import { Button, Flex } from 'components';

export const CreateNew = ({ data, type, ...props }) => {
  //
  const [open, setOpen] = useState(false);

  async function handleClear() {
    props.onClear;
    setOpen(false);
  }

  return (
    <>
      <div className="create_new_item">
        {open ? (
          <>
            {props.children}
            <Flex>
              <Button
                className="sc bg"
                padding="0.25rem 0"
                margin="0 5% 0 0"
                width="60%"
                onClick={() => setOpen(false)}
              >
                <p>CREATE NEW</p>
              </Button>
              <Button padding="0.25rem 0" width="35%" onClick={handleClear}>
                <p>CLEAR</p>
              </Button>
            </Flex>
          </>
        ) : (
          <div className="inner_new_item" onClick={() => setOpen(true)}>
            <p>CREATE NEW</p>
          </div>
        )}
      </div>

      <style jsx>
        {`
          .create_new_item {
            height: 12rem;
            width: 20rem;

            background: ${open
              ? 'rgba(100,100,100,0.02)'
              : 'rgba(100,100,100,0)'};

            padding: 1rem;

            border: thin dotted rgba(255, 100, 255, 0.4);

            box-shadow: inset 0 0 2rem -1rem transparent;

            transition: 0.2s ease;
          }
          .create_new_item:hover {
            cursor: pointer;
          }

          .inner_new_item {
            height: 100%;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
