import Resizer from 'react-image-file-resizer';

export const retina = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file, //the file to compress
      3840, //maxWidth
      2160, //maxHeight
      'PNG', //'PNG','JPEG' or 'WEBP'
      100, //quality (jpeg)
      0, //rotation
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });

export const web = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      1920,
      1080,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });

export const mobile = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      1080,
      1080,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });

export const thumb = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      320,
      320,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });

export const icon = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      160,
      160,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });
