import React, { useState } from "react";
import About from "./About.jsx";
import Contact from "./Contacts.jsx";
import Skills from "./Skills";
import Projects from "./Projects.jsx";
import "../App.css"




export default function Home() {




    return (
        <>
            <div
                className="hello w-full p-2 bg-white text-gray-800 bg-cover bg-center bg-no-repeat relative dark:bg-black dark:text-gray-200"
            >
                <div
                    className="flex flex-col lg:flex-row justify-center items-center border-2 border-gray-300 p-4 shadow-md rounded-md bg-white dark:bg-black dark:border-[rgb(28,135,255)]"
                    style={{
                        background: "radial-gradient(circle at 95% 5%, rgba(59,130,246,0.1), transparent 70%)",
                    }}
                >
                    {/* Image Section */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src="/boy.png"
                            alt="HelloWorld Image"
                            className="w-full max-w-xs lg:max-w-md xl:max-w-lg h-auto object-cover rounded-lg hover:scale-105 transform transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className=" w-full lg:w-5/6 text-white p-6 bg-[rgb(65,9,37)] rounded-lg shadow-lg overflow-hidden m-auto hover:scale-105 transform transition-transform duration-300 dark:bg-[rgb(65,9,37)] "
                        >
                            <div className="font-mono text-[12px] md:text-lg lg:text-xl text-left text-white">
                                <div className="text-yellow-500 dark:text-yellow-300">const HelloWorld = &#123;</div>
                                <div>
                                    <span className="text-green-500 dark:text-green-300">"_id": </span>
                                    <span className="">"127.0.0.1",</span>
                                </div>
                                <div>
                                    <span className="text-green-500 dark:text-green-300">"name": </span>
                                    <span className="">"Tarun Gupta",</span>
                                </div>
                                <div>
                                    <span className="text-green-500 dark:text-green-300">"developer": </span>
                                    <span className="">"true",</span>
                                </div>
                                <div>
                                    <span className="text-green-500 dark:text-green-300">"Tools&Technologies": </span>
                                    <span className="">[JavaScript,React,MongoDB, Express, NodeJS,Postman],</span>
                                </div>

                                <div className="text-yellow-500 dark:text-yellow-300">&#125;</div>
                            </div>


                        </div>


                        <div className="mt-4 flex justify-center space-x-4">
                            {/* Resume Button */}
                            <a href="/"
                                download>
                                <button className="flex bg-orange-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 transition duration-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-400">
                                    <p>resume</p>
                                    <img className="w-5 h-5 ml-2 mt-1" src="/downloads.png" alt="" />
                                </button>
                            </a>

                            {/* Hire Me Button */}
                            <button
                                className="flex justify-between bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 transition duration-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-400 animate-shake"
                                style={{ animationDelay: '1s' }} // Add delay between shake cycles
                            >
                                <p>Hire Me</p>
                                <img className="w-5 h-5 ml-2 mt-1" src="/hire.png" alt="" />
                            </button>

                        </div>
                    </div>
                </div >
            </div >

            <Skills />
            <Projects />
            {/* <About /> */}
            <Contact />
        </>
    );
}
