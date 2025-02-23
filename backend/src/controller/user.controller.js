import { User } from "../model/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const contactMe = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, message } = req.body;

        if (!fullName || !email || !phoneNumber) {
            return res.status(400).json(new ApiError(400, "Please provide full information for better communication"));
        }
        console.log(req.body);

        const createdUser = await User.create({
            fullName,
            email,
            phoneNumber,
            message
        });
        console.log("user created", createdUser);

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.MY_MAIL,
        //         pass: process.env.MY_APP_PASS
        //     }
        // });

        // // Verify the connection
        // transporter.verify((error, success) => {
        //     if (error) {
        //         console.log("Error with SMTP transport:", error);
        //     } else {
        //         console.log("SMTP connection successful");
        //     }
        // });

        // const mailOptions = {
        //     from: email,
        //     to: process.env.MY_MAIL,
        //     subject: `New Contact Form Submission from ${fullName}`,
        //     text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
        // };

        // try {
        //     await transporter.sendMail(mailOptions);
        //     console.log("Mail sent successfully");
        // } catch (error) {
        //     console.log("Error sending mail:", error);
        //     return res.status(500).json(new ApiError(500, "Failed to send message"));
        // }

        return res.status(200).json(new ApiResponse(200, createdUser, "Info saved, we will contact you soon"));

    } catch (err) {
        console.log("::error in controller", err.message, err.stack);
        return res.status(500).json(new ApiError(500, "Something went wrong"));
    }
};

export { contactMe };
