import React from 'react';

import { Task } from 'page-components/viewRecursive';

const recursive = () => {
  return (
    <div>
      {dummyData.map((t, i) => (
        <Task key={`${t.title}${i}`} data={t} />
      ))}
    </div>
  );
};

export default recursive;

const dummyData = [
  {
    type: 'task',
    title: 'do this',
    info: 'someth',
    imgUrl: 'https://media.chansen.design/placeholder.jpg',
  },
];
