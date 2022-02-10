export const FlexWrap = ({ ...props }) => {
  return (
    <>
      <div className="chansen_flex_wrap">{props.children}</div>

      <style jsx>
        {`
          .chansen_flex_wrap {
            height: 100%;
            width: 100%;

            display: flex;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};
