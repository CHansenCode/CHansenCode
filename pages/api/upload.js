import nextConnect from 'next-connect';
import middleware from 'middleware/database';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const fileStr = req.body.data;
  const uploadResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: 'chansen',
  });

  res.json(uploadResponse);
});

export default handler;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};
