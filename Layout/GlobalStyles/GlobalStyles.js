import React from 'react';

export const GlobalStyles = ({ colors }) => {
  return colors ? (
    <>
      <style jsx global>
        {`
          html {
            color: ${colors.pc};
            background: ${colors.bg};
          }
        `}
      </style>

      <style jsx global>
        {`
          .pc {
            color: ${colors.pc};
          }
          .sc {
            color: ${colors.sc};
          }
          .bg {
            background: ${colors.bg};
          }

          //#region Primary color alphas
          .pc05 {
            color: rgba(${colors.nakedPc}, 0.05);
          }
          .pc1 {
            color: rgba(${colors.nakedPc}, 0.1);
          }
          .pc3 {
            color: rgba(${colors.nakedPc}, 0.3);
          }
          .pc5 {
            color: rgba(${colors.nakedPc}, 0.5);
          }
          .pc7 {
            color: rgba(${colors.nakedPc}, 0.7);
          }

          //  BACKGROUND
          .pc05bg {
            background: rgba(${colors.nakedPc}, 0.05);
          }
          .pc1bg {
            background: rgba(${colors.nakedPc}, 0.1);
          }
          .pc3bg {
            background: rgba(${colors.nakedPc}, 0.3);
          }
          .pc5bg {
            background: rgba(${colors.nakedPc}, 0.5);
          }
          .pc7bg {
            background: rgba(${colors.nakedPc}, 0.7);
          }

          //  BORDERS
          .pc05b {
            border: thin solid rgba(${colors.nakedPc}, 0.05);
          }
          .pc1b {
            border: thin solid rgba(${colors.nakedPc}, 0.1);
          }
          .pc3b {
            border: thin solid rgba(${colors.nakedPc}, 0.3);
          }
          .pc5b {
            border: thin solid rgba(${colors.nakedPc}, 0.5);
          }
          .pc7b {
            border: thin solid rgba(${colors.nakedPc}, 0.7);
          }
          //#endregion

          // *

          //#region Secondary Color
          .sc05 {
            color: rgba(${colors.nakedSc}, 0.05);
          }
          .sc1 {
            color: rgba(${colors.nakedSc}, 0.1);
          }
          .sc3 {
            color: rgba(${colors.nakedSc}, 0.3);
          }
          .sc5 {
            color: rgba(${colors.nakedSc}, 0.5);
          }
          .sc7 {
            color: rgba(${colors.nakedSc}, 0.7);
          }

          //  **  BACKGROUND
          .sc05bg {
            background: rgba(${colors.nakedSc}, 0.05);
          }
          .sc1bg {
            background: rgba(${colors.nakedSc}, 0.1);
          }
          .sc3bg {
            background: rgba(${colors.nakedSc}, 0.3);
          }
          .sc5bg {
            background: rgba(${colors.nakedSc}, 0.5);
          }
          .sc7bg {
            background: rgba(${colors.nakedSc}, 0.7);
          }

          //  **  BORDERS
          .sc05b {
            border: thin solid rgba(${colors.nakedSc}, 0.05);
          }
          .sc1b {
            border: thin solid rgba(${colors.nakedSc}, 0.1);
          }
          .sc3b {
            border: thin solid rgba(${colors.nakedSc}, 0.3);
          }
          .sc5b {
            border: thin solid rgba(${colors.nakedSc}, 0.5);
          }
          .sc7b {
            border: thin solid rgba(${colors.nakedSc}, 0.7);
          }
        `}
      </style>
    </>
  ) : (
    <style jsx global>{`
      .empty-filler-reply {
        opacity: 0;
      }
    `}</style>
  );
};
