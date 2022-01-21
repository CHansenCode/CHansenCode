import { Dev, Meta, Nav } from './';

export function Layout() {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <Dev />}

      <Meta />

      <Nav />
    </>
  );
}
