import { useState, useEffect } from 'react';

import { Cv, Letter, Web, Contact } from './pages';
import { Button, Pagination } from './components';

export default function CvSlideshow({ data, ...props }) {
  const [page, setPage] = useState(1);
  const [activeId, setActiveId] = useState('');

  let pages = [
    {
      type: 'cv',
    },
    {
      type: 'letter',
    },
    {
      type: 'web',
    },
    {
      type: 'contact',
    },
  ];

  props = {
    ...props,
    activeId,
    setActiveId,
  };

  return (
    <Main>
      <SlideView>
        {page === 1 && (
          <SlideWrapper>
            <Cv {...props} />
          </SlideWrapper>
        )}
        {page === 2 && (
          <SlideWrapper>
            <Letter data={data} {...props} />
          </SlideWrapper>
        )}
        {page === 3 && (
          <SlideWrapper>
            <Web {...props} />
          </SlideWrapper>
        )}
        {page === 4 && (
          <SlideWrapper>
            <Contact {...props} />
          </SlideWrapper>
        )}
      </SlideView>

      <Nav page={page} setPage={setPage} />
    </Main>
  );
}

const Main = ({ children }) => {
  return (
    <>
      <div className="cv_main_window">{children}</div>

      <style jsx>
        {`
          .cv_main_window {
            position: relative;

            height: 100%;
            width: 100%;

            display: grid;
            grid-template:
              'slide_view' 1fr
              'navigation' auto / 1fr;
            gap: 2rem;
          }
        `}
      </style>
    </>
  );
};

const SlideView = ({ children }) => {
  return (
    <>
      <div className="cv_slide_view">{children}</div>

      <style jsx>
        {`
          .cv_slide_view {
            position: relative;

            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

const SlideWrapper = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const iStyle = {
    opacity: loaded ? '1' : '0',
    transition: '0.5s ease',
  };

  return (
    <>
      <div style={iStyle} className="cv_slide_wrapper">
        {children}
      </div>

      <style jsx>
        {`
          .cv_slide_wrapper {
            height: 100%;
          }
        `}
      </style>
    </>
  );
};

const Nav = ({ page, setPage }) => {
  //
  async function onClickAddPage() {
    setPage(page + 1);
  }
  async function onClickSubPage() {
    setPage(page - 1);
  }

  let prevDisabled = page < 2 ? true : false;
  let nextDisabled = page > 3 ? true : false;

  return (
    <>
      <nav className="cv_navigation">
        <div className="cv_nav_flex">
          <Button
            size="2rem"
            borderRadius="50%"
            fontSize="1.3rem"
            disabled={prevDisabled}
            text="-"
            onClick={onClickSubPage}
          />

          <Pagination page={page} setPage={setPage} />

          <Button
            size="2rem"
            borderRadius="50%"
            fontSize="1.3rem"
            disabled={nextDisabled}
            text="+"
            onClick={onClickAddPage}
          />
        </div>
      </nav>

      <style jsx>
        {`
          .cv_navigation {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cv_nav_flex {
            height: 100%;

            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
};
