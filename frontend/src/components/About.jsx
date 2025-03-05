import React from "react";

export default function About() {
    return (
        <div className="appear p-2 mt-5 bg-white text-black dark:bg-black">

            <div className=" border-solid border-2 border-slate-300 p-4 shadow-md bg-white rounded-md dark:bg-black dark:text-white dark:border-[rgb(28,135,255)]"
            >
                <h1 className="text-white text-3xl p-3">About Section</h1>
                <div className="flex flex-wrap gap-6 justify-center">
                    {/* Education Card 1 */}
                    <div className="w-full sm:w-80 md:w-96 mb-6 border-2 border-slate-300 rounded-lg shadow-lg p-6 transform hover:scale-102 transition duration-300 bg-white dark:bg-gray-800 dark:border-blue-500">
                        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Education</h1>

                        {/* Title Section */}
                        <div className="text-left mb-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">B.Tech, Mathematics and Data Science</h2>
                            <h3 className="text-xl text-gray-600 dark:text-gray-300">MANIT Bhopal</h3>
                            <h4 className="text-lg text-gray-500 dark:text-gray-400">Year: 2024</h4>
                        </div>

                        {/* Content Section */}
                        <div className="text-gray-700 dark:text-gray-200">
                            <p>
                                my name is
                            </p>
                        </div>
                    </div>

                    {/* Education Card 2 */}
                    <div className="w-full sm:w-80 md:w-96 mb-6 border-2 border-slate-300 rounded-lg shadow-lg p-6 transform hover:scale-102 transition duration-300 bg-white dark:bg-gray-800 dark:border-blue-500">
                        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">Education</h1>

                        {/* Title Section */}
                        <div className="text-left mb-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">B.Tech, Mathematics and Data Science</h2>
                            <h3 className="text-xl text-gray-600 dark:text-gray-300">MANIT Bhopal</h3>
                            <h4 className="text-lg text-gray-500 dark:text-gray-400">Year: 2024</h4>
                        </div>

                        {/* Content Section */}
                        <div className="text-gray-700 dark:text-gray-200">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis vel voluptatibus repellendus corporis architecto nam laudantium natus minus enim doloribus.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
