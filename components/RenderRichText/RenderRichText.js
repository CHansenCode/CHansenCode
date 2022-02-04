import { useEffect } from 'react';

export const RenderRichText = ({ data }) => {
  //
  const objKey = 'richText_1';

  // useEffect(() => {
  //   console.log(data.objKey);
  // }, []);

  return (
    <div>
      <button onClick={e => e.preventDefault()}>text</button>
    </div>
  );
};
