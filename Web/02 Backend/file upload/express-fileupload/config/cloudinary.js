const cloudinary = require('cloudinary').v2;
require('dotenv').config();

exports.connect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true,
        });

        console.log('Successfully connected to cloudinary');
    } catch (err) {
        console.error('Error: ', err);
    }
};

exports.cloudinaryUploader = async (file, folder) => {
    const options = { folder };
    return await cloudinary.uploader.upload(file.tempFilePath, options);
};
