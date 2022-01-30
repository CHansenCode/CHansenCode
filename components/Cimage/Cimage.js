import Image from 'next/image';

export const Cimage = ({ ...props }) => {
  //
  const refSrc = props.src
    ? props.src
    : 'https://media.chansen.design/placeholder.jpg';

  const refAlt = props.alt
    ? props.alt
    : 'Alt text is missing, please add for SEO & accessability considerations';

  return (
    <Image
      height={props.height ? props.height : '32px'}
      width={props.width ? props.width : '32px'}
      src={refSrc}
      alt={props.alt ? props.alt : refAlt}
    />
  );
};
