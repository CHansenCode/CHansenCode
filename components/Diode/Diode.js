import React from 'react';

export const Diode = ({ toggle, ...props }) => {
  return (
    <>
      <div
        className={`${
          toggle ? 'success success-bg' : 'alert alert-bg'
        } diode_status_indicator`}
      >
        {props.hoverInfo && (
          <h5 className="diode_status_onHoverInfo bg pc3b">
            {props.hoverInfo}
          </h5>
        )}
      </div>

      <style jsx>
        {`
          .diode_status_indicator {
            position: relative;

            opacity: 0.6;

            height: ${props.size ? props.size : '1rem'};
            width: ${props.size ? props.size : '1rem'};

            border: thin solid transparent;
            border-radius: 50%;

            box-shadow: 0 0 0.5rem 0 currentColor;

            transition: 0.4s ease;
          }

          .diode_status_indicator::after {
            color: black;

            opacity: 0.3;

            position: absolute;
            top: -1px;
            left: -1px;

            padding: 0;
            margin: 0;

            content: '';
            height: calc(${props.size ? props.size : '1rem'} - 1px);
            width: calc(${props.size ? props.size : '1rem'} - 1px);

            background: radial-gradient(
              circle,
              rgba(255, 255, 255, 1) 0%,
              rgba(0, 0, 0, 1) 100%
            );

            border: thin solid transparent;
            border-radius: 50%;
          }

          .diode_status_indicator:hover diode_status_onHoverInfo {
            opacity: 1;
          }

          .diode_status_onHoverInfo {
            position: absolute;
            top: 100%;
            right: 0;

            opacity: 0;

            padding: 0.5rem;
            white-space: nowrap;
          }
        `}
      </style>
    </>
  );
};
