import Image from 'next/image';
import { useDispatch } from 'react-redux';

export const Cimage = ({ ...props }) => {
  //
  props.style = {
    ...props.style,
    position: 'relative',
    height: props.height,
    width: props.width,
    overflow: 'hidden',
    pointerEvents: props.onClick ? props.onClick : 'none',
  };

  let alt = 'CHansen design architecture webdev alt text missing on this image';

  return (
    <div
      style={props.style}
      className={props.className}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <Image
        height={!(props.objectFit === 'contain') && '100%'}
        width={!(props.objectFit === 'contain') && '100%'}
        layout={props.objectFit === 'contain' ? 'fill' : 'responsive'}
        objectFit={props.objectFit}
        src={
          props.src ? props.src : 'https://media.chansen.design/placeholder.jpg'
        }
        alt={props.alt ? props.alt : alt}
      />
    </div>
  );
};

Cimage.defaultProps = {
  height: '15rem',
  width: '15rem',
  objectFit: 'cover',
};
