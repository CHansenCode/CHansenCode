import { Dev, GlobalStyles, Main, Meta, Nav } from './';
import { useColors } from 'lib/useColor';

export function Layout({ ...props }) {
  //
  const { colors, setColors } = useColors();

  props = {
    ...props,
    colors,
    setColors,
  };

  return (
    <>
      {process.env.NODE_ENV === 'development' && <Dev {...props} />}

      <Meta {...props} />

      <GlobalStyles {...props} />

      <Nav {...props} />

      <Main {...props} />
    </>
  );
}
