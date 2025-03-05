import React from "react";
import "../wrapper.css";
import reactLogo from "/physics.png";
import js from "/js.png";
import html from "/html.png";
import c from "/c-.png";
import forces from "/code-forces.svg";
import gitHub from "/github.png";
import git from "/social.png";
import Img from "./Img";
import expresslogo from "/expresslogo.png";
import css from "/css-3.png";

export default function Skills() {
    return (
        <>
            <div className="appear skillsection p-2 mt-5 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200">
                <div className="border-solid border-2 sm:px-[50px] border-gray-300 p-4 shadow-md bg-white rounded-md dark:bg-black dark:border-blue-500">
                    <h1 className="text-3xl p-2 text-gray-900 dark:text-gray-200">LET ME <span className="font-bold text-amber-900">INTRODUCE</span> MYSELF</h1>
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Introduction Section */}
                        <div className="p-6 mb-6  dark:bg-gray-800 rounded-md">

                            {/* Title Section */}
                            <div className="text-left mb-4">
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">B.Tech, Mathematics and Data Science</h2>
                                <h3 className="text-xl text-gray-600 dark:text-gray-300">MANIT Bhopal</h3>
                                <h4 className="text-lg text-gray-500 dark:text-gray-400">2023-2027</h4>
                            </div>

                            {/* Content Section */}
                            <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                                Hello everyone! I’m <span className="font-bold text-blue-600 dark:text-blue-400">Tarun Gupta</span>, a passionate developer with a deep curiosity for technology and innovation.
                                Currently pursuing my B.Tech in Mathematics and Data Science at <span className="font-bold text-blue-600 dark:text-blue-400">MANIT Bhopal</span>, I have a strong foundation in both front-end and back-end development.
                            </p>
                            <p className="text-lg text-gray-800 dark:text-gray-300 mt-4 leading-relaxed">
                                I love building web applications that are not only functional but also efficient and user-friendly.
                                My expertise includes JavaScript, React, C++, and various modern development tools.
                                I enjoy solving complex problems, exploring new frameworks, and continuously refining my skills to stay ahead in the ever-evolving tech world.
                            </p>

                        </div>

                        <div className="logos mt-5 mb-5 p-3  rounded-md dark:bg-black">
                            <div className="absolute top-0 left-0 z-10 w-[60px] bg-gradient-to-r from-white to-transparent h-full dark:bg-gradient-to-r dark:from-black dark:to-transparent">
                            </div>

                            <div className="logos-slide flex justify-center gap-10 ml-7">
                                <Img src={html} tag="HTML" />
                                <Img src={css} tag="css" />
                                <Img src={js} tag="javascript" />
                                <Img src={reactLogo} tag="react" to="https://react.dev" />
                                <Img src={forces} tag="CodeForces" />
                                <Img src={c} tag="C++" />
                                <Img src={git} tag="Git" />
                                <Img src={gitHub} tag="GitHub" />
                                <Img src={expresslogo} tag="expressJs" />
                            </div>

                            <div className="logos-slide flex justify-center gap-10 ml-7">
                                <Img src={html} tag="HTML" />
                                <Img src={css} tag="css" />
                                <Img src={js} tag="javascript" />
                                <Img src={reactLogo} tag="react" to="https://react.dev" />
                                <Img src={forces} tag="CodeForces" />
                                <Img src={c} tag="C++" />
                                <Img src={git} tag="Git" />
                                <Img src={gitHub} tag="GitHub" />
                                <Img src={expresslogo} tag="expressJs" />
                            </div>
                            <div className="absolute top-0 right-0 z-10 w-[60px] bg-gradient-to-l from-white to-transparent h-full dark:bg-gradient-to-l dark:from-black dark:to-transparent">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}