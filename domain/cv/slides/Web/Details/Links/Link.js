import React from 'react';

import { NextLink } from 'components/NextLink/NextLink';
import { Image } from 'components';
import { AiFillGithub } from 'react-icons/ai';
import thumb from 'public/favicon.ico';

import css from './Links.module.scss';

export const Link = ({ active, linkData, ...props }) => {
  //

  return (
    <div className={`${css.wrapper} ${active ? css.wrapper_active : ''}`}>
      <>
        <LinkCard href={linkData.url} />

        <LinkCard href={linkData.git} git />
      </>
    </div>
  );
};

const LinkCard = ({ href, git }) => {
  return (
    <NextLink href={href} blank>
      <div className={`pc3b ${css.card}`}>
        <aside className={`pc3b ${css.icon}`}>
          {git ? <AiFillGithub size="2rem" /> : <Image src={thumb} />}
        </aside>

        <div className={css.url_text}>
          <h6>
            {git ? (
              <>
                {href.substring(8, 19)}...{href.substring(30)}
              </>
            ) : (
              href.substring(8)
            )}
          </h6>
        </div>
      </div>
    </NextLink>
  );
};
