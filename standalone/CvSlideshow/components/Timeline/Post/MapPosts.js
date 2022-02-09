import { Post } from './Post';

import css from './Post.module.scss';

export const MapPosts = ({ data, activeId, setActiveId, ...props }) => {
  //

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
      <div style={iStyle.row_one} className={css.posts}>
        {data.map(
          (c, i) =>
            c.category === 'job' && (
              <Post
                key={`${c._id}`}
                data={c}
                activeId={activeId}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>

      <div style={iStyle.row_two} className={css.posts_education}>
        {data.map(
          (c, i) =>
            c.category === 'education' && (
              <Post
                key={`${c._id}`}
                data={c}
                activeId={activeId}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>

      <div style={iStyle.row_three} className={css.posts_extra}>
        {data.map(
          (c, i) =>
            c.category === 'extra' && (
              <Post
                key={`${c._id}`}
                data={c}
                activeId={activeId}
                onClick={() => setActiveId(c._id)}
                {...props}
              />
            ),
        )}
      </div>
    </>
  );
};
