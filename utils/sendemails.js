// utils/sendEmails.js
const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.TG_HOST,
        port: process.env.TG_PORT,
        secure: true, // Use SSL
        auth: {
            user: process.env.TG_MAIL,
            pass: process.env.TG_APP_PASS,
        },
        authMethod: 'LOGIN', // Specify the authentication method
    });

    const mailOptions = {
        from: process.env.TG_MAIL,
        to: options.to,
        subject: options.subject,
        html: options.message,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;