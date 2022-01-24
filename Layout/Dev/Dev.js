import { useState, useEffect } from 'react';
import useUser from 'lib/useUser';

import css from './Dev.module.scss';

export function Dev() {
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={css.button} onClick={() => setOpen(!open)}>
        {open ? 'dev' : 'dev'}
      </button>

      {open && (
        <aside className={css.aside}>
          <div className={css.innerDiv}>
            <div>
              <h4>{user?.username ? user?.username : 'no name'}</h4>
              <h4>{user?.isLoggedIn ? 'isLoggedIn' : 'is not logged in'}</h4>
            </div>

            <br />
            <br />
            <br />

            <div>
              <h1>H1 h1 - biggest font</h1>
              <h2>H2 h2 - overline addict</h2>
              <h3>H3 h3 - Look at me</h3>
              <h4>H4 h4 - Look at me too but not as much</h4>
              <p>
                P p - I am the standard paragraph text, must be readable by all
                very easily
              </p>
              <h5>H5 h5 - I am subscript and annotation</h5>
              <h6>H6 h6 - i'm trying to be both small and readable</h6>

              <a href="#">
                <p>I am link</p>
              </a>
            </div>

            <div className="sc">
              <h1>H1 h1 - biggest font</h1>
              <h2>H2 h2 - overline addict</h2>
              <h3>H3 h3 - Look at me</h3>
              <h4>H4 h4 - Look at me too but not as much</h4>
              <p>
                P p - I am the standard paragraph text, must be readable by all
                very easily
              </p>
              <h5>H5 h5 - I am subscript and annotation</h5>
              <h6>H6 h6 - i'm trying to be both small and readable</h6>

              <a href="#">
                <p>I am link</p>
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
