import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

import { getAll, postOne } from 'api-lib/db/media';

const handler = nextConnect();
handler.use(middleware);

//

handler.get(async (req, res) => {
  const response = await getAll(req.db);

  res.json(response);
});

handler.post(async (req, res) => {
  const { file } = req.body;
  const formData = {
    title: req.body.title,
    alt: req.body.alt,
    category: req.body.category,
    project: req.body.project,
    tags: req.body.tags,
    createdBy: 'chansen',
  };

  try {
    const cloudUpload = await cloudinary.uploader.upload(file, {
      upload_preset: 'chansen',
    });

    formData.cloudId = cloudUpload.public_id;
    formData.secure_url = cloudUpload.secure_url;
    formData.height = cloudUpload.height;
    formData.width = cloudUpload.width;
    formData.createdAt = cloudUpload.created_at;
  } catch (error) {
    res.status(400).json('upload to cloudinary failed');
  }

  try {
    const mongoUpload = await postOne(req.db, formData);

    res.status(200).json(mongoUpload);
  } catch (error) {
    res.status(400).json('upload to mongoDb failed');
  }
});

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

let cloudResponse = {
  public_id: 'cr4mxeqx5zb8rlakpfkg',
  version: 1571218330,
  signature: '63bfbca643baa9c86b7d2921d776628ac83a1b6e',
  width: 864,
  height: 576,
  format: 'jpg',
  resource_type: 'image',
  created_at: '2017-06-26T19:46:03Z',
  bytes: 120253,
  type: 'upload',
  url: 'http://res.cloudinary.com/demo/image/upload/v1571218330/cr4mxeqx5zb8rlakpfkg.jpg',
  secure_url:
    'https://res.cloudinary.com/demo/image/upload/v1571218330/cr4mxeqx5zb8rlakpfkg.jpg',
};
