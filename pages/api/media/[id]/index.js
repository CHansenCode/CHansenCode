import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

import { findByIdAndUpdate, findByIdAndDelete } from 'api-lib/db/media';

const handler = nextConnect();
handler.use(middleware);

handler.patch(async (req, res) => {
  const formData = req.body;
  try {
    const response = await findByIdAndUpdate(req.db, formData._id, formData);
    res.json(response);
  } catch (error) {
    res.status(400).json({ error: 'something wong' });
  }
});

handler.delete(async (req, res) => {
  const { id, cloudId } = req.query;

  // try {
  //   await cloudinary.uploader.destroy(cloudId);
  // } catch (error) {
  //   res.status(400).json({ error: `failed to delete cloudinary file` });
  // }

  try {
    const response = await findByIdAndDelete(req.db, id);
    res.status(200).json(id);
  } catch (error) {
    res.status(400).json({ error: 'something wong' });
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
