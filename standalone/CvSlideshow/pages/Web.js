import { FadeIn } from '../components';

import { CHansenSystem } from '../components/CHansenSystem';

import css from './styles/Web.module.scss';

export const Web = () => {
  return (
    <FadeIn>
      <div className={css.wrapper}>
        <CHansenSystem />
      </div>
    </FadeIn>
  );
};
