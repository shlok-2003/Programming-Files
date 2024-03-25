const File = require('../models/file');
const { cloudinaryUploader } = require('../config/cloudinary');

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log('File: ', file);

        const extension = file.name.split('.')[1];
        const path = `${__dirname}/../assets/${Date.now()}.${extension}`;
        console.log('Path: ', path);

        file.mv(path, (err) => {
            return console.log('Error: ', err);
        });

        res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Unable to upload file',
            errorMessage: err.message,
        });
    }
};

exports.imageFileUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log('Name: ', name, 'Tags: ', tags, 'Email: ', email);

        const file = req.files.file;
        console.log('File: ', file);

        const supported = ['jpg', 'png', 'jpeg'];
        const extension = file.name.split('.')[1];

        if (!supported.includes(extension)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            });
        }

        const filename = 'Codehelp';
        const response = await cloudinaryUploader(file, filename);
        // console.log('Response: ', response);

        const newFile = await File.create({
            name: name,
            email: email,
            tags: tags,
            image: response.secure_url
        });

        console.log('New File: ', newFile);

        return res.status(200).json({
            success: true,
            message: 'File uploaded successfully',
            data: response.secure_url,
        });
    } 
    catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Unable to upload file',
            errorMessage: err.message,
        });
    }
};
