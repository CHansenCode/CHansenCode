import { Post } from './Post';

import css from './Post.module.scss';

export const MapPosts = ({ data, setActiveData, ...props }) => {
  //

  async function setActiveData(data, setData) {
    setData(data);
  }

  return (
    <>
      <div className={`${css.posts} ${css.job}`}>
        <h6>jobs</h6>
        {data &&
          data.map((c, i) =>
            c.category === 'job' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onClick={() => setActiveData(c, setActiveData)}
                {...props}
              />
            ) : null,
          )}
      </div>

      <div className={`${css.posts} ${css.education}`}>
        <h6>education</h6>
        {data &&
          data.map((c, i) =>
            c.category === 'education' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onClick={() => setActiveData(c, setActiveData)}
                {...props}
              />
            ) : null,
          )}
      </div>

      <div className={`${css.posts} ${css.extra}`}>
        <h6>extra</h6>
        {data &&
          data.map((c, i) =>
            c.category === 'extra' ? (
              <Post
                key={`${c.id}`}
                data={c}
                onClick={() => setActiveData(c, setActiveData)}
                {...props}
              />
            ) : null,
          )}
      </div>
    </>
  );
};
