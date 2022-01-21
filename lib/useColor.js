import { useState, useEffect } from 'react';

export const useColors = () => {
  const [colors, setColors] = useState({
    //lightswitch
    darkmode: false,

    //Connected to colorPicker
    light: {
      pc: { r: 10, g: 120, b: 140, a: 1 },
      sc: { r: 255, g: 128, b: 128, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
    dark: {
      pc: { r: 200, g: 200, b: 200, a: 1 },
      sc: { r: 255, g: 128, b: 128, a: 1 },
      bg: { r: 10, g: 30, b: 50, a: 1 },
    },

    //compiled strings
    pc: ``,
    sc: '',
    bg: '',
  });

  useEffect(() => {
    let newPC = colors.darkmode
      ? `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`
      : `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`;

    let newSC = colors.darkmode
      ? `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`
      : `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`;

    let newBG = colors.darkmode
      ? `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`
      : `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`;

    setColors({ ...colors, pc: newPC, sc: newSC, bg: newBG });
  }, [colors.light, colors.dark, colors.darkmode]);

  return { colors: colors, setColors: setColors };
};
