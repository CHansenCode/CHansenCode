import { useState, useEffect } from 'react';
import useUser from 'lib/useUser';

import { ObjectViewer, Fold, Flex, Button } from 'components';

import { useSelector, useDispatch } from 'react-redux';
import { TOAST, DELETE_TOAST } from 'actions';

import css from './Dev.module.scss';

export function Dev() {
  const dispatch = useDispatch();

  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const storeData = useSelector(store => store);

  const testToast = {
    type: 'warning',
    message: 'testToast',
  };

  async function dispatchToast(e) {
    e.preventDefault();
    dispatch({ type: TOAST, payload: testToast });
  }

  return (
    <>
      <button className={css.button} onClick={() => setOpen(!open)}>
        {open ? 'd' : 'd'}
      </button>

      {open && (
        <aside className={`bg ${css.aside}`}>
          <div className={css.innerDiv}>
            <Fold title="Actions">
              <Flex>
                <Button
                  className="pc bg"
                  text="dispatch toast"
                  padding="0.5rem 1rem"
                  onClick={dispatchToast}
                />
              </Flex>
            </Fold>

            <Fold title="User information, cookie etc">
              <Flex alignItems="flex-end">
                <h6>username :</h6>
                <h5>{`{`}</h5>
                <p className="sc">
                  ' {user?.username ? user?.username : 'no name'} '
                </p>
                <h5>{`}`}</h5>
              </Flex>
              <Flex alignItems="flex-end">
                <h6>isLoggedIn :</h6>
                <h5>{`{`}</h5>
                <p className="sc">' {user?.isLoggedIn ? 'true' : 'false'} '</p>
                <h5>{`}`}</h5>
              </Flex>
              <Flex alignItems="flex-end">
                <h6>password :</h6>
                <h5>{`{`}</h5>
                <p className="sc">' {user?.password ? 'true' : 'false'} '</p>
                <h5>{`}`}</h5>
              </Flex>
            </Fold>

            <Fold title="Redux-store" fold={true}>
              <Fold title="store.cv" fold={true}>
                <ObjectViewer
                  title="store.cv"
                  data={storeData.cv}
                  fontSize="0.9rem"
                />
              </Fold>
              <Fold title="store.media" fold={true}>
                <ObjectViewer
                  title="store.media"
                  data={storeData.media}
                  fontSize="0.9rem"
                />
              </Fold>
              <Fold title="store.toast" fold={true}>
                <ObjectViewer
                  title="store.toast"
                  data={storeData.toast}
                  fontSize="0.9rem"
                />
              </Fold>
            </Fold>

            <Fold title="primary color fonts" fold={true}>
              <div>
                <h3>
                  POPPINS -
                  <span style={{ fontWeight: '300' }}>
                    300,
                    <i> 300i, </i>
                  </span>
                  <span style={{ fontWeight: '400' }}>
                    400,
                    <i> 400i, </i>
                  </span>
                  <span style={{ fontWeight: '500' }}>
                    500,
                    <i> 500i, </i>
                  </span>
                  <span style={{ fontWeight: '600' }}>600, </span>
                  <span style={{ fontWeight: '700' }}>700 </span>
                </h3>

                <h1>H1 h1 - biggest font - IN CAPS</h1>
                <h2>H2 h2 - overline addict - IN CAPS</h2>
                <h3>H3 h3 - Look at me - IN CAPS</h3>
                <h4>H4 h4 - Look at me too but not as much - IN CAPS</h4>
                <p
                  style={{
                    width: '40rem',
                    margin: '3rem auto',
                    textAlign: 'justify',
                  }}
                >
                  P p - I am the standard paragraph text, must be readable by
                  all very easily
                  <br />
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, nulla? Illo tempora fugit nam rerum itaque, at
                  atque ex iusto aperiam, laudantium, commodi neque rem facere
                  exercitationem dolor alias ipsum placeat. Aliquam architecto
                  aliquid laboriosam dolores quam? Sed architecto distinctio
                  fugiat, voluptatum sunt provident repellat veritatis vero
                  voluptate aliquam? Doloribus sed praesentium, temporibus
                  soluta possimus quis atque ipsum eveniet dolorem aliquid
                  suscipit doloremque nulla, dignissimos quos neque nostrum
                  omnis dolore autem quidem aperiam libero. Qui, illo
                  repellendus. Laborum et a placeat, dolorem nemo esse expedita
                  unde ipsam explicabo consectetur dolores aspernatur, sequi
                  saepe totam, corrupti iste maiores molestias? Saepe aliquid.
                </p>
                <h5>
                  H5 h5 - I am subscript and annotation - SAME SIZE AS H6 BUT
                  WITH NO ADDITIONAL STYLING
                </h5>
                <h6>
                  H6 h6 - i am label and stylized with larget letter spacing -
                  MOST USED IN CONJUNCTION WITH 'UPPERCASE'-TRANSFORM
                </h6>

                <a href="#">
                  <p>I am link</p>
                </a>
              </div>
            </Fold>

            <Fold title="secondary color fonts" fold={true}>
              <div className="sc">
                <h3>
                  POPPINS -
                  <span style={{ fontWeight: '300' }}>
                    300,
                    <i> 300i, </i>
                  </span>
                  <span style={{ fontWeight: '400' }}>
                    400,
                    <i> 400i, </i>
                  </span>
                  <span style={{ fontWeight: '500' }}>
                    500,
                    <i> 500i, </i>
                  </span>
                  <span style={{ fontWeight: '600' }}>600, </span>
                  <span style={{ fontWeight: '700' }}>700 </span>
                </h3>

                <h1>H1 h1 - biggest font - IN CAPS</h1>
                <h2>H2 h2 - overline addict - IN CAPS</h2>
                <h3>H3 h3 - Look at me - IN CAPS</h3>
                <h4>H4 h4 - Look at me too but not as much - IN CAPS</h4>
                <p
                  style={{
                    width: '40rem',
                    margin: '3rem auto',
                    textAlign: 'justify',
                  }}
                >
                  P p - I am the standard paragraph text, must be readable by
                  all very easily
                  <br />
                  <br />
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, nulla? Illo tempora fugit nam rerum itaque, at
                  atque ex iusto aperiam, laudantium, commodi neque rem facere
                  exercitationem dolor alias ipsum placeat. Aliquam architecto
                  aliquid laboriosam dolores quam? Sed architecto distinctio
                  fugiat, voluptatum sunt provident repellat veritatis vero
                  voluptate aliquam? Doloribus sed praesentium, temporibus
                  soluta possimus quis atque ipsum eveniet dolorem aliquid
                  suscipit doloremque nulla, dignissimos quos neque nostrum
                  omnis dolore autem quidem aperiam libero. Qui, illo
                  repellendus. Laborum et a placeat, dolorem nemo esse expedita
                  unde ipsam explicabo consectetur dolores aspernatur, sequi
                  saepe totam, corrupti iste maiores molestias? Saepe aliquid.
                </p>
                <h5>H5 h5 - I am subscript and annotation - IN CAPS</h5>
                <h6>
                  H6 h6 - i'm trying to be both small and readable - IN CAPS
                </h6>

                <a href="#">
                  <p>I am link</p>
                </a>
              </div>
            </Fold>
          </div>
        </aside>
      )}
    </>
  );
}
