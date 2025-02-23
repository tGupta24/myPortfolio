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
                    <h1 className="text-3xl p-2 text-gray-900 dark:text-gray-200">Skills Section</h1>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-8 p-5 border-2">
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem porro accusantium ratione, omnis fugiat, nesciunt maiores magnam optio consectetur perferendis, iure maxime corrupti?
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
