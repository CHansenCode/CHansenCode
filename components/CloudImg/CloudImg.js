import { useEffect } from 'react';

import Image from 'next/image';

export const CloudImg = ({ width, height, key, ...props }) => {
  const publicId = props.publicId ? props.publicId : 'hlk6pobtzp7uum0thsrg';

  let sWidth = props.width ? `w_${props.width}` : '';
  let sHeight = props.height ? `h_${props.height}` : '';
  let ifIsComma = props.height || props.width ? ',' : '';
  let ifIsDash = props.height || props.width ? '/' : '';

  const heightAndWidth = `${sWidth}${ifIsComma}${sHeight}${ifIsDash}`;

  const src = `${base}/${heightAndWidth}${publicId}`;

  return (
    <div>
      <Image
        height={height ? height : 300}
        width={width ? width : 300}
        src={src}
      />
    </div>
  );
};

const base = `https://res.cloudinary.com/chansendesign/image/upload`;
