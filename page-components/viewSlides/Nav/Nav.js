import { AiOutlineRollback } from 'react-icons/ai';
import { GiYinYang } from 'react-icons/gi';

import { Button, Logo, NextLink } from 'components';

import { Pagination } from './Pagination';

import css from './Nav.module.scss';

export const Nav = ({ ...props }) => {
  async function clearActiveId() {
    props.setActiveId('');
    props.setSlideIndex(0);
  }

  async function toggleDarkmode() {
    props.setColors({ ...props.colors, darkmode: !props.colors.darkmode });
  }

  return (
    <nav className={`pc1b ${css.nav}`}>
      <header>
        <NextLink href="/">
          <Logo width="4rem" />
        </NextLink>
      </header>

      {props.data.slides.length ? (
        <Pagination data={props.data} {...props} />
      ) : (
        <div />
      )}

      <footer>
        <Button border="transparent" onClick={() => toggleDarkmode()}>
          <GiYinYang size="1rem" />
        </Button>

        <Button border="transparent" onClick={clearActiveId}>
          <AiOutlineRollback size="1.5rem" />
        </Button>
      </footer>
    </nav>
  );
};
