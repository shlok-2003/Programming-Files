const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const fileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        tags: {
            type: String,
        },
        email: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

fileSchema.post("save", async function(doc) {
    try {
        console.log("DOC", doc);

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        // send mail
        const info = await transporter.sendMail({
            from: `"TCET-SHASTRA" ${process.env.MAIL_USER}}`,
            to: doc.email,
            subject: 'Your file has been uploaded successfully!',
            text: 'Your file has been uploaded successfully!',
            html: `
                <h1>File uploaded successfully!</h1>
                <h1>You can view it below</h1>
                <a href=${doc.image}>${doc.image}</a>
            `
        })

        console.log("Info: ", info)
    }
    catch(err) {
        console.error(err);
    }
})

const File = mongoose.model('File', fileSchema);
module.exports = File;