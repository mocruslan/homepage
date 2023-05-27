"use client"

import React, {useState} from 'react';
import Link from 'next/link';
import {FiMenu, FiMoon, FiSun, FiX} from 'react-icons/fi';
import HireMeModal from './HireMeModal';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import logoLight from '../../../public/images/logo-light.svg';
import logoDark from '../../../public/images/logo-dark.svg';
import Image from "next/image";


export default function Header(): React.JSX.Element {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [activeTheme, setTheme] = useThemeSwitcher();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const showHireMeModal = () => {
        const htmlElement = document.getElementsByTagName('html')[0];
        if (!showModal) {
            htmlElement.classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            htmlElement.classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    };

    return (
        <nav
            // initial={{opacity: 0}}
            // animate={{opacity: 1}}
            // id="nav"
            className="sm:container sm:mx-auto"
        >
            {/* Header */}
            <div
                className="z-10 block max-w-screen-lg py-6 sm:flex sm:items-center sm:justify-between xl:max-w-screen-xl">
                {/* Header menu links and small screen hamburger menu */}
                <div className="flex items-center justify-between px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {activeTheme === 'dark' ? (
                                <Image
                                    src={logoDark}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            ) : (
                                <Image
                                    src={logoLight}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            )}
                        </Link>
                    </div>

                    {/* Theme switcher small screen */}
                    <div
                        onClick={() => setTheme(activeTheme === 'dark' ? 'light' : 'dark')}
                        aria-label="Theme Switcher"
                        className="ml-0 block cursor-pointer rounded-xl p-3 shadow-sm bg-primary-light dark:bg-ternary-dark sm:hidden"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon
                                className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"/>
                        ) : (
                            <FiSun className="text-xl text-gray-200 hover:text-gray-50"/>
                        )}
                    </div>

                    {/* Small screen hamburger menu */}
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                            >
                                {showMenu ? (
                                    <FiX className="text-3xl"/>
                                ) : (
                                    <FiMenu className="text-3xl"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Header links small screen */}
                <div
                    className={
                        showMenu
                            ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                            : 'hidden'
                    }
                >
                    <div
                        className="mb-2 block text-left text-lg text-primary-dark hover:text-secondary-dark dark:text-ternary-light sm:mx-4 sm:py-2 dark:hover:text-secondary-light">
                        <Link href="/projects" aria-label="Projects">
                            Projects
                        </Link>
                    </div>
                    <div
                        className="mb-2 block border-t-2 pt-3 text-left text-lg text-primary-dark border-primary-light hover:text-secondary-dark dark:text-ternary-light dark:border-secondary-dark sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2 dark:hover:text-secondary-light">
                        <Link href="/about" aria-label="About Me">
                            About Me
                        </Link>
                    </div>
                    <div
                        className="mb-2 block border-t-2 pt-3 text-left text-lg text-primary-dark border-primary-light hover:text-secondary-dark dark:text-ternary-light dark:border-secondary-dark sm:mx-4 sm:border-t-0 sm:py-2 sm:pt-2 dark:hover:text-secondary-light">
                        <Link href="/contact" aria-label="Contact">
                            Contact
                        </Link>
                    </div>
                    <div
                        className="border-t-2 pt-3 border-primary-light dark:border-secondary-dark sm:border-t-0 sm:pt-0">
                        <button
                            onClick={showHireMeModal}
                            className="mt-2 block w-24 rounded-sm bg-indigo-500 px-4 py-2 text-left text-white shadow-sm duration-300 font-general-medium text-md hover:bg-indigo-600 sm:hidden"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* Header links large screen */}
                <div
                    className="m-0 mt-5 hidden items-center justify-center p-5 shadow-lg font-general-medium sm:mt-3 sm:ml-4 sm:flex sm:p-0 sm:shadow-none">
                    <div
                        className="mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light sm:mx-4 sm:py-2 dark:hover:text-secondary-light"
                        aria-label="Projects">
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div
                        className="mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light sm:mx-4 sm:py-2 dark:hover:text-secondary-light"
                        aria-label="About Me">
                        <Link href="/about">About Me</Link>
                    </div>
                    <div
                        className="mb-2 block text-left text-lg font-medium text-primary-dark hover:text-secondary-dark dark:text-ternary-light sm:mx-4 sm:py-2 dark:hover:text-secondary-light"
                        aria-label="Contact">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                {/* Header right section buttons */}
                <div className="hidden flex-col items-center justify-between sm:flex md:flex-row">
                    <div className="hidden md:flex">
                        <button
                            onClick={showHireMeModal}
                            className="rounded-md bg-indigo-500 px-5 text-white shadow-sm duration-300 text-md font-general-medium py-2.5 hover:bg-indigo-600"
                            aria-label="Hire Me Button"
                        >
                            Hire Me
                        </button>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="ml-8 cursor-pointer rounded-xl p-3 shadow-sm bg-primary-light dark:bg-ternary-dark"
                    >
                        {activeTheme === 'dark' ? (
                            <FiMoon
                                className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light"/>
                        ) : (
                            <FiSun className="text-xl text-gray-200 hover:text-gray-50"/>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {showModal && <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal}/>}
            </div>
        </nav>
    );
}
