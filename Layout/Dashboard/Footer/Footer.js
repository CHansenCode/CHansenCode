import { useRouter } from 'next/router';

import useUser from 'lib/useUser';
import fetchJson from 'lib/fetchJson';

import { Button } from 'components';
import { Home, Settings, Calendar, Intercom, LightDark } from './Buttons';

import css from './Footer.module.scss';

export const Footer = ({ id, ...props }) => {
  //
  const { mutateUser } = useUser();
  const router = useRouter();

  async function toggleDashboardVisiblity() {
    props.setController({
      ...props.controller,
      dashboardVisible: !props.controller.dashboardVisible,
    });
  }

  async function logOut(e) {
    e.preventDefault();
    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false);
    router.push('/');
  }

  return (
    <footer id={id} className={css.footer}>
      <div className={css.button_menu}>
        <LightDark {...props} />
      </div>

      <div className={`pc5b ${css.button_menu}`}>
        <Home />
        <Settings />
        <Calendar />
        <Intercom />
      </div>

      <div
        className={`${css.logMenu} ${
          !props.controller.dashboardVisible ? css.logMenu_collapsed : ''
        }`}
      >
        <Button className="pc5b" onClick={logOut}>
          Log out
        </Button>
        <Button
          padding="0.25rem"
          className="pc5b"
          onClick={toggleDashboardVisiblity}
        >
          <IconCollapseExpand ternary={props.controller.dashboardVisible} />
        </Button>
      </div>
    </footer>
  );
};

const IconCollapseExpand = ({ size, ternary }) => {
  const inline = {
    transformOrigin: 'center',
    transition: '0.5s ease',
    transform: ternary
      ? 'rotate(270deg) translate(0, 20%)'
      : 'rotate(90deg) translate(0, -5%)',
  };

  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1px"
      viewBox="0 0 1024 1024"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={inline}
        d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"
      ></path>
    </svg>
  );
};
IconCollapseExpand.defaultProps = {
  size: '100%',
};
