import React from 'react';

export const GlobalStyles = ({ colors }) => {
  return colors ? (
    <>
      <style jsx global>
        {`
          html {
            color: rgb(${colors.pc});
            background: rgb(${colors.bg});
          }
        `}
      </style>
      <style jsx global>
        {`
          .pc {
            color: rgb(${colors.pc});
          }
          .sc {
            color: rgb(${colors.sc});
          }
          .bg {
            background: rgb(${colors.bg});
          }

          //#region Primary color alphas

          //  COLOR
          .pc05 {
            color: rgba(${colors.pc}, 0.05);
          }
          .pc1 {
            color: rgba(${colors.pc}, 0.1);
          }
          .pc3 {
            color: rgba(${colors.pc}, 0.3);
          }
          .pc5 {
            color: rgba(${colors.pc}, 0.5);
          }
          .pc7 {
            color: rgba(${colors.pc}, 0.7);
          }

          //  BACKGROUND
          .pc05bg {
            background: rgba(${colors.pc}, 0.05);
          }
          .pc1bg {
            background: rgba(${colors.pc}, 0.1);
          }
          .pc3bg {
            background: rgba(${colors.pc}, 0.3);
          }
          .pc5bg {
            background: rgba(${colors.pc}, 0.5);
          }
          .pc7bg {
            background: rgba(${colors.pc}, 0.7);
          }

          //  BORDER
          .pc05b {
            border: thin solid rgba(${colors.pc}, 0.05);
          }
          .pc1b {
            border: thin solid rgba(${colors.pc}, 0.1);
          }
          .pc3b {
            border: thin solid rgba(${colors.pc}, 0.3);
          }
          .pc5b {
            border: thin solid rgba(${colors.pc}, 0.5);
          }
          .pc7b {
            border: thin solid rgba(${colors.pc}, 0.7);
          }
          //#endregion

          // *

          //#region Secondary Color

          //  COLOR
          .sc05 {
            color: rgba(${colors.sc}, 0.05);
          }
          .sc1 {
            color: rgba(${colors.sc}, 0.1);
          }
          .sc3 {
            color: rgba(${colors.sc}, 0.3);
          }
          .sc5 {
            color: rgba(${colors.sc}, 0.5);
          }
          .sc7 {
            color: rgba(${colors.sc}, 0.7);
          }

          //  **  BACKGROUND
          .sc05bg {
            background: rgba(${colors.sc}, 0.05);
          }
          .sc1bg {
            background: rgba(${colors.sc}, 0.1);
          }
          .sc3bg {
            background: rgba(${colors.sc}, 0.3);
          }
          .sc5bg {
            background: rgba(${colors.sc}, 0.5);
          }
          .sc7bg {
            background: rgba(${colors.sc}, 0.7);
          }

          //  **  BORDER
          .sc05b {
            border: thin solid rgba(${colors.sc}, 0.05);
          }
          .sc1b {
            border: thin solid rgba(${colors.sc}, 0.1);
          }
          .sc3b {
            border: thin solid rgba(${colors.sc}, 0.3);
          }
          .sc5b {
            border: thin solid rgba(${colors.sc}, 0.5);
          }
          .sc7b {
            border: thin solid rgba(${colors.sc}, 0.7);
          }
        `}
      </style>
      <style jsx global>
        {`
          .success {
            color: rgb(${colors.success});
          }
          .warning {
            color: rgb(${colors.warning});
          }
          .alert {
            color: rgb(${colors.alert});
          }

          //#region BACKGROUND
          .success-bg {
            background: rgb(${colors.success});
          }
          .success-bg05 {
            background: rgba(${colors.success}, 0.05);
          }
          .success-bg1 {
            background: rgba(${colors.success}, 0.1);
          }
          .success-bg2 {
            background: rgba(${colors.success}, 0.2);
          }
          .success-bg3 {
            background: rgba(${colors.success}, 0.3);
          }

          .warning-bg {
            background: rgb(${colors.warning});
          }
          .warning-bg05 {
            background: rgba(${colors.warning}, 0.05);
          }
          .warning-bg1 {
            background: rgba(${colors.warning}, 0.1);
          }
          .warning-bg2 {
            background: rgba(${colors.warning}, 0.2);
          }
          .warning-bg3 {
            background: rgba(${colors.warning}, 0.3);
          }

          .alert-bg {
            background: rgb(${colors.alert});
          }
          .alert-bg05 {
            background: rgba(${colors.alert}, 0.05);
          }
          .alert-bg1 {
            background: rgba(${colors.alert}, 0.1);
          }
          .alert-bg2 {
            background: rgba(${colors.alert}, 0.2);
          }
          .alert-bg3 {
            background: rgba(${colors.alert}, 0.3);
          }
          //#endregion

          //#region BORDERS
          .success-b {
            border: thin solid rgb(${colors.success});
          }
          .success-b05 {
            border: thin solid rgba(${colors.success}, 0.05);
          }
          .success-b1 {
            border: thin solid rgba(${colors.success}, 0.1);
          }
          .success-b3 {
            border: thin solid rgba(${colors.success}, 0.3);
          }

          .warning-b {
            border: thin solid rgb(${colors.warning});
          }
          .warning-b05 {
            border: thin solid rgba(${colors.warning}, 0.05);
          }
          .warning-b1 {
            border: thin solid rgba(${colors.warning}, 0.1);
          }
          .warning-b3 {
            border: thin solid rgba(${colors.warning}, 0.3);
          }

          .alert-b {
            border: thin solid rgb(${colors.alert});
          }
          .alert-b05 {
            border: thin solid rgba(${colors.alert}, 0.05);
          }
          .alert-b1 {
            border: thin solid rgba(${colors.alert}, 0.1);
          }
          .alert-b3 {
            border: thin solid rgba(${colors.alert}, 0.3);
          }
          .alert-b5 {
            border: thin solid rgba(${colors.alert}, 0.5);
          }
          .alert-b7 {
            border: thin solid rgba(${colors.alert}, 0.7);
          }
          //#endregion
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
