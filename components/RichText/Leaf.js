export const Leaf = props => {
  //

  const iStyle = {
    fontWeight: props.leaf.bold ? 'bold' : 'normal',
    fontStyle: props.leaf.cursive && 'italic',
    textDecoration:
      props.leaf.underline && props.leaf.linethrough
        ? 'underline line-through'
        : props.leaf.underline && !props.leaf.linethrough
        ? 'underline'
        : !props.leaf.underline && props.leaf.linethrough
        ? 'line-through'
        : '',
  };

  return (
    <span {...props.attributes} style={iStyle}>
      {props.children}
    </span>
  );
};
