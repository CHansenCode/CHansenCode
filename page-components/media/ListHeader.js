export const ListHeader = ({ children }) => {
  return (
    <>
      <div className="list_header_kkk999">{children}</div>

      <style jsx>
        {`
          .list_header_kkk999 {
            height: 2rem;
            width: 100%;

            display: flex;

            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
};
