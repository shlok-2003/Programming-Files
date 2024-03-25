const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.')[1];
        cb(null, `${Date.now()}-${file.originalname}.${extension}`)
    },
});

const upload = multer({storage: storage});

app.post('/api/upload', (req, res, next) => {
    // Use upload.single('file') middleware to handle single file uploads
    upload.single('file')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred (e.g., exceeding file size limits)
            return res
                .status(400)
                .json({ error: 'Multer error: ' + err.message });
        } else if (err) {
            // An unknown error occurred
            return res
                .status(500)
                .json({ error: 'Unknown error: ' + err.message });
        }

        // No error occurred, continue with processing
        return res.send('File uploaded successfully');
    });
});

app.listen(PORT, () => {
    console.log('PORT: ', PORT);
});
