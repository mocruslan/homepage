"use client"

import React from "react";
import Image from "next/image";
import {FiArrowDownCircle} from 'react-icons/fi';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';
import Typewriter from 'typewriter-effect';

export default function HomeBanner(): React.JSX.Element {
    const [activeTheme] = useThemeSwitcher();

    return (
        <section
            className={"flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"}
        >
            <div className={"w-full md:w-1/3 text-left"}>
                <h1
                    className={"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"}
                >
                    Hi, Iam Ruslan
                </h1>
                <div
                    className={"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('A Fullstack Developer')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('A Photographer')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('A Dog owner')
                                .pauseFor(1500)
                                .start();
                        }}

                        options={{
                            loop: true,
                        }}
                    />
                </div>
                <div
                    className={"flex justify-center sm:block"}
                >
                    <a
                        download={"Ruslan-Resume.pdf"}
                        href={"/files/Ruslan-Resume.pdf"}
                        className={"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"}
                        aria-label={"Download Resume"}
                    >
                        <FiArrowDownCircle className={"ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}/>
                        <span className={"text-sm sm:text-lg duration-100"}>
							Download CV
						</span>
                    </a>
                </div>
            </div>

            <div
                className={"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"}
            >
                <Image src={
                        activeTheme === 'dark'
                            ? '/images/developer.svg'
                            : '/images/developer-dark.svg'
                    }
                    alt="Developer"
                    width={800}
                    height={800}
                />
            </div>
        </section>
    );
}
