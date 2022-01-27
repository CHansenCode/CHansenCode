import { useState, useEffect } from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

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
      pc: { r: 180, g: 220, b: 220, a: 1 },
      sc: { r: 255, g: 128, b: 128, a: 1 },
      bg: { r: 10, g: 30, b: 50, a: 1 },
    },

    //compiled strings
    pc: ``,
    sc: '',
    bg: '',

    nakedPc: ``,
    nakedSc: ``,
    nakedBg: ``,
  });

  useEffect(() => {
    let newPC = colors.darkmode
      ? `rgb(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`
      : `rgb(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`;

    let newSC = colors.darkmode
      ? `rgb(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`
      : `rgb(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`;

    let newBG = colors.darkmode
      ? `rgb(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`
      : `rgb(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`;

    let nakedPc = colors.darkmode
      ? `${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}`
      : `${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}`;

    let nakedSc = colors.darkmode
      ? `${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}`
      : `${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}`;

    let nakedBg = colors.darkmode
      ? `${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}`
      : `${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}`;

    setColors({
      ...colors,
      pc: newPC,
      sc: newSC,
      bg: newBG,
      nakedPc: nakedPc,
      nakedSc: nakedSc,
      nakedBg: nakedBg,
    });
  }, [colors.light, colors.dark, colors.darkmode]);

  return { colors: colors, setColors: setColors };
};
