
import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer class="mt-5  text-center p-2   text-black  dark:text-white">

            <div className="p-4 border-2 border-slate-300 rounded-lg shadow-lg  dark:border-[rgb(28,135,255)] ">

                <div className="m-2 text-2xl font-bold">
                    <h1 className="font-luckiest text-5xl text-black dark:text-white"><span className="text-red-500">Let's </span>talk</h1>

                </div>
                <div className="">

                    <div className="flex flex-col mt-4 p-5 justify-center sm:mt-0">
                        <div>
                            <p><span className="text-orange-600" >Connect </span> with me </p>
                        </div>
                        <div className="text-center sm:fixed sm:left-2 sm:bottom-6 ">
                            <div className="flex justify-center sm:flex-col ">
                                <Link to="https://x.com/tarung92352453" className="text-gray-500 shadow-black hover:text-gray-900">
                                    <img className="w-6 m-2 invert dark:invert-0" src="/x.svg" alt="Twitter Icon" />
                                </Link>
                                <Link to="https://github.com/tGupta24" className="text-gray-500 hover:text-gray-900">
                                    <img className="w-6 m-2 invert dark:invert-0" src="/git.svg" alt="GitHub Icon" />
                                </Link>
                                <Link to="#" className="text-gray-500 hover:text-gray-900">
                                    <img className="w-6 m-2 invert dark:invert-0" src="/discord.svg" alt="Discord Icon" />
                                </Link>
                                <Link to="https://www.instagram.com/tarun.gupta.24/?hl=en" className="text-gray-500 hover:text-gray-900">
                                    <img className="w-6 m-2 invert dark:invert-0" src="/insta.svg" alt="Instagram Icon" />
                                </Link>
                            </div>
                        </div>

                    </div>
                    <span className="text-sm text-black sm:text-center dark:text-white">
                        ©2024TarunGupta
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}
