import React from "react";
import { NavLink } from "react-router-dom";
import useAPI from "../theme/theme";
import ThemeBtn from "./themebtn";

const MenuBar = () => {
    const { isMenubar, showMenuBar } = useAPI();
    const open = () => {
        showMenuBar();
        window.scrollTo({
            top: 0,
            // behavior: 'smooth', // Smooth scroll effect
        });
    }

    return (
        <div>
            {/* Background Blur */}
            <div id="blurback" className="fixed hidden h-screen inset-0 z-40 backdrop-blur-sm bg-black/30 md:hidden"></div>

            {/* Menu Bar */}
            <div
                id="phonemenubar"
                className="fixed hidden top-20 left-0 right-0 z-50 bg-white font-bold text-xl p-4 drop-shadow-lg m-auto max-w-[200px] rounded-md dark:bg-slate-800 dark:text-white md:hidden"
            >
                <nav className="m-auto">
                    <div className="lg:flex lg:items-center lg:justify-center">
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        ` ${isActive ? `text-blue-700 dark:text-blue-400` : `text-black dark:text-white`} block px-4 py-2`
                                    }
                                >
                                    <button onClick={open}>Home</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Skills"
                                    className={({ isActive }) =>
                                        ` ${isActive ? `text-blue-700 dark:text-blue-400` : `text-black dark:text-white`} block px-4 py-2`
                                    }
                                >
                                    <button onClick={open}>Skill</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects"
                                    className={({ isActive }) =>
                                        ` ${isActive ? `text-blue-700 dark:text-blue-400` : `text-black dark:text-white`} block px-4 py-2`
                                    }
                                >
                                    <button onClick={open}>Project</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) =>
                                        ` ${isActive ? `text-blue-700 dark:text-blue-400` : `text-black dark:text-white`} block px-4 py-2`
                                    }
                                >
                                    <button onClick={open}>About</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        ` ${isActive ? `text-blue-700 dark:text-blue-400` : `text-black dark:text-white`} block px-4 py-2`
                                    }
                                >
                                    <button onClick={open}>Contact</button>
                                </NavLink>
                            </li>
                            <li>
                                <ThemeBtn />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MenuBar;
