import { useState } from 'react';

import { Button, Flex, TypeInput } from 'components';

export const CreateNew = ({ data, ...props }) => {
  //
  const [open, setOpen] = useState(false);

  async function handleClear() {
    props.onClear;
    setOpen(false);
  }

  return (
    <>
      <div className="create_new_item pc1b">
        {open ? (
          <>
            <TypeInput
              label="New title name"
              value={props.value}
              onChange={props.onChange}
            />

            <Flex>
              <Button
                className="sc bg"
                padding="0.25rem 0"
                margin="0 5% 0 0"
                width="60%"
                onClick={props.onClick}
              >
                <p>CREATE NEW</p>
              </Button>

              <Button padding="0.25rem 0" width="35%" onClick={handleClear}>
                <p>close</p>
              </Button>
            </Flex>
          </>
        ) : (
          <div className="inner_new_item" onClick={() => setOpen(true)}>
            <p>
              <span style={{ fontSize: '1.1rem' }}>+ </span> CREATE NEW
            </p>
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

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            transition: 0.2s ease;
          }
          .create_new_item:hover {
            cursor: pointer;
          }

          .inner_new_item {
            height: 100%;
            width: 100%;

            opacity: 0.6;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: 0.1s ease;
          }
          .inner_new_item:hover {
            background: rgba(0, 200, 255, 0.05);
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};
