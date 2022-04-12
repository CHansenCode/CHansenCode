import Resizer from 'react-image-file-resizer';

export const original = file =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file, //the file to compress
      150, //maxWidth
      150, //maxHeight
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
      150,
      150,
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
      150,
      150,
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
      150,
      150,
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
      150,
      150,
      'PNG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'base64',
    );
  });
