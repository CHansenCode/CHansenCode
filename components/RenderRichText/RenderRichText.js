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
  //

  //  ** LINE_DATA
  //  type: 'paragraph',
  //  children: [ { text: '', ...attributes }, { text: '', ...attributes } ]

  //  return
  //  If first leaf is empty of text, render <br /> instead

  return !(data.children[0].text === '') ? (
    <p>
      {data.children.map((a, i) => (
        <Leaf key={`leaf${i}`} data={a} />
      ))}
    </p>
  ) : (
    <br />
  );
};

const Leaf = ({ data, ...props }) => {
  //

  //  ** LEAF_DATA
  //  {
  //    text: 'string',
  //    ...attributes,
  //  }

  const iStyle = {
    fontWeight: data.bold ? 'bold' : 'normal',
    textDecoration:
      data.underline && data.linethrough
        ? 'underline line-through'
        : data.underline && !data.linethrough
        ? 'underline'
        : !data.underline && data.linethrough
        ? 'line-through'
        : '',
  };
  return <span style={iStyle}>{data.text}</span>;
};

// let example_data = [

//   {
//     type: 'paragraph',
//     children: [

//       {
//         text: 'Can have all attributes',
//         bold: true,
//         underline: true,
//         linethrough: true,
//         cursive: true,
//       },

//       {
//         text: 'Or just one',
//         bold: true,
//       },

//     ],
//   },

//   {
//     type: 'paragraph',
//     children: [
//       {
//         text: 'Or why not none',
//       },
//     ],
//   },

// ];
