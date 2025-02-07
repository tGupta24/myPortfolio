import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Popup } from "./Popups";



export default function Contacts() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {


        try {
            /* const response = await fetch(url, options);
               options is object {
                       //method
                       //body 
                       // headers
                  }
            */
            const response = await fetch("http://localhost:8001/api/v1/users/contact", {
                method: "POST",
                headers:
                {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data),
            })
            if (response.ok) {
                toast.success("will contact soon")
            }
            else {
                toast.error("Faild to send message")
            }

        }
        catch (error) {
            console.error("Error:", error);
            alert("Something went wrong.");
        }
        reset();
    }
    /*
      try {
           const response = await fetch("https://your-backend.com/api/contact", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },
               body: JSON.stringify(data),
           });

           if (response.ok) {
               alert("Message sent successfully!");
               reset(); // Reset form after submission
           } else {
               alert("Failed to send message.");
           }
       } catch (error) {
           console.error("Error:", error);
           alert("Something went wrong.");
       }
     */
    return (
        <div className="appear m-auto p-2 mt-5">
            <Popup />
            <div className="border-2 p-4 shadow-md border-gray-300 bg-white text-black rounded-md dark:bg-black dark:text-white dark:border-[rgb(28,135,255)]">
                <div className="flex flex-col sm:flex-row sm:gap-8 p-6 justify-center">
                    {/* Left Section: Title and Description */}
                    <div className="p-6 sm:rounded-lg flex flex-col justify-center items-center sm:items-start">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                            Get in touch:
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>
                    </div>

                    {/* Right Section: Form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-2 flex flex-col justify-center w-full sm:w-1/2"
                    >
                        <div className="flex gap-3">
                            {/* Name Field */}
                            <div className="flex flex-col mb-4 w-full">
                                <input
                                    {...register("fullName", {
                                        required: true,
                                    })}
                                    // {...register(string , object)}
                                    // string is name for identification different for different inputs
                                    // object of options 
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full py-3 px-4 rounded-lg border border-gray-600 text-black font-semibold focus:border-orange-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                                />

                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col mb-4 w-full">
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
                                    })}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full py-3 px-4 rounded-lg border border-gray-600 text-black font-semibold focus:border-orange-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                                />

                            </div>
                        </div>

                        {/* Telephone Field (Optional) */}
                        <div className="flex flex-col mb-4">
                            <input
                                {...register("phoneNumber", {
                                    required: true
                                })}
                                type="tel"
                                placeholder="Telephone Number"
                                className="w-full py-3 px-4 rounded-lg border border-gray-600 text-black font-semibold focus:border-orange-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="flex flex-col mb-4">
                            <textarea
                                {...register("message", { required: true })}
                                placeholder="Write Your Message Here...."
                                className="w-full py-3 px-4 rounded-lg border border-gray-600 text-black font-semibold focus:border-orange-500 focus:outline-none dark:bg-gray-800 dark:text-white"
                                rows={4}
                            ></textarea>

                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-orange-700 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
