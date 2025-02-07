import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./Themebtns";
import Menubtn from "./Menubtn";

export default function Header() {
    // Function to handle scrolling to the top
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <header className="shadow-lg sticky z-50 top-0 text-black dark:text-white opacity-90 backdrop-blur-lg dark:backdrop-blur-md">

            <nav className="bg-white dark:bg-black px-4 md:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <p className="font-custom text-3xl font-bold text-blue-600 dark:text-blue-400">
                            &lt;Portfolio/&gt;
                        </p>
                    </Link>


                    <div>
                        {/* Navigation Links - Visible on large screens */}
                        <div
                            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                            id="mobile-menu-2"
                        >
                            <ul className="flex flex-row mt-4 font-medium md:flex-row md:space-x-6 md:mt-0">
                                <li className="p-2">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            `${isActive ? `text-blue-600 dark:text-blue-400` : `text-black dark:text-white`} block py-2 pr-8 pl-3 duration-200 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800  md:border-0 hover:text-blue-800 dark:hover:text-blue-300 md:p-0`
                                        }
                                        onClick={handleScrollToTop}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="p-2">
                                    <NavLink
                                        to="/Skills"
                                        className={({ isActive }) =>
                                            `${isActive ? `text-blue-600 dark:text-blue-400` : `text-black dark:text-white`} block 
                                        p-2
                                        duration-200 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 md:hover:bg-transparent md:border-0 hover:text-blue-800 dark:hover:text-blue-300 md:p-0`
                                        }
                                        onClick={handleScrollToTop}
                                    >
                                        Skills
                                    </NavLink>
                                </li>
                                <li className="p-2">
                                    <NavLink
                                        to="/Projects"
                                        className={({ isActive }) =>
                                            `${isActive ? `text-blue-600 dark:text-blue-400` : `text-black dark:text-white`} block py-2 pr-8 pl-3 duration-200 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 md:hover:bg-transparent md:border-0 hover:text-blue-800 dark:hover:text-blue-300 md:p-0`
                                        }
                                        onClick={handleScrollToTop}
                                    >
                                        Projects
                                    </NavLink>
                                </li>
                                <li className="p-2">
                                    <NavLink
                                        to="/About"
                                        className={({ isActive }) =>
                                            `${isActive ? `text-blue-600 dark:text-blue-400` : `text-black dark:text-white`} block py-2 pr-8 pl-3 duration-200 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 md:hover:bg-transparent md:border-0 hover:text-blue-800 dark:hover:text-blue-300 md:p-0`
                                        }
                                        onClick={handleScrollToTop}
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="p-2">
                                    <NavLink
                                        to="/Contact"
                                        className={({ isActive }) =>
                                            `${isActive ? `text-blue-600 dark:text-blue-400` : `text-black dark:text-white`} block py-2 pr-8 pl-3 duration-200 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 md:hover:bg-transparent md:border-0 hover:text-blue-800 dark:hover:text-blue-300 md:p-0`
                                        }
                                        onClick={handleScrollToTop}
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <ThemeBtn />
                                </li>
                            </ul>
                        </div>

                        {/* Menu Button - Visible on smaller screens */}
                        <div className="block md:hidden">
                            <Menubtn />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
