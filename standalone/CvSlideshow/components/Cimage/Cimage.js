import Image from 'next/image';

export const Cimage = ({ ...props }) => {
  //
  props.style = {
    ...props.style,
    position: 'relative',
    height: props.height,
    width: props.width,
    overflow: props.overflow,
  };

  return (
    <div
      ref={props.myRef}
      style={props.style}
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <Image
        height="100%"
        width="100%"
        layout="responsive"
        objectFit={props.objectFit}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

Cimage.defaultProps = {
  height: '15rem',
  width: '15rem',
  objectFit: 'cover',
  overflow: 'hidden',

  src: 'https://media.chansen.design/placeholder.jpg',
  alt: 'CHansen design architecture webdev alt text missing on this image',
};

// Next.js Image
// objectFit :
//   cover     - fill out to edge
//   contain   - max size within container
//   fixed     - exact size to given size
