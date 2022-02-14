import { Post } from './Post';

import css from './Post.module.scss';

export const MapPosts = ({ data, setActiveId, ...props }) => {
  const iStyle = {
    row_one: {
      marginTop: '1rem',
      height: '25%',
    },
    row_two: {
      height: '25%',
    },
    row_three: { height: '25%' },
  };

  return (
    <>
      <div style={iStyle.row_one} className={css.row_jobs}>
        {data.map(
          (c, i) =>
            c.category === 'job' && (
              <Post
                key={`${c._id}`}
                data={c}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>

      <div style={iStyle.row_two} className={css.row_education}>
        {data.map(
          (c, i) =>
            c.category === 'education' && (
              <Post
                key={`${c._id}`}
                data={c}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>

      <div style={iStyle.row_three} className={css.row_extra}>
        {data.map(
          (c, i) =>
            c.category === 'extra' && (
              <Post
                key={`${c._id}`}
                data={c}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>
    </>
  );
};
