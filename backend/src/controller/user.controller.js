import { User } from "../model/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const contactMe = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, message } = req.body;

        if (!fullName && !email && !phoneNumber) {
            new ApiError(400, "Please provide full information for better communication");
        }

        const createdUser = await User.create(
            {
                fullName,
                email,
                phoneNumber,
                message
            }
        );

        res.status(200)
            .json(
                new ApiResponse(200, createdUser, "Info saved will contact soon")
            )

    } catch (err) {
        console.log("::error in controller", err);
        new ApiError(500, "something went wrong")
    }
}
export { contactMe }