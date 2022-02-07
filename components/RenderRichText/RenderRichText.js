export const RenderRichText = ({ data }) => {
  return data ? (
    <div>
      {data.map((t, i) => (
        <Line key={`line${i}`} data={t} />
      ))}
    </div>
  ) : (
    <div>render empty</div>
  );
};

const Line = ({ data }) => {
  return (
    <p>
      {data.children.map((a, i) => (
        <Leaf key={`leaf${i}`} data={a} />
      ))}
    </p>
  );
};

const Leaf = ({ data, ...props }) => {
  const iStyle = {
    fontStyle:
      data.cursive && data.bold
        ? 'cursive bold'
        : data.cursive && !data.bold
        ? 'cursive'
        : data.bold && !data.cursive && 'bold',
  };
  return <span style={iStyle}>{data.text}</span>;
};
