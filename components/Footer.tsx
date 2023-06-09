"use client"

import FooterCopyright from './FooterCopyright';
import React, {useRef} from "react";
import {arrSocialLink} from "./data/footerData";

export default function Footer(): React.JSX.Element {
    const linksRef = useRef(arrSocialLink);

    return (
        <div className="container mx-auto">
            <div className={"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"}>
                {/* Footer social links */}
                <div className={"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28"}>
                    <p className="mb-5 text-3xl text-primary-dark dark:text-primary-light sm:text-4xl">
                        Follow me
                    </p>
                    <ul className="flex gap-4 sm:gap-8">
                        {linksRef.current.map((link) => (
                            <a
                                href={link.url}
                                target="__blank"
                                key={link.id}
                                className={"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"}
                            >
                                <i className="text-xl sm:text-2xl md:text-3xl">
                                    <link.icon/>
                                </i>
                            </a>
                        ))}
                    </ul>
                </div>

                <FooterCopyright/>
            </div>
        </div>
    );
}