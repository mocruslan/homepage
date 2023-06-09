import {FiClock, FiTag} from "react-icons/fi";
import React from "react";
import {ProjectHeader} from "@/data/projectsData";

export default function Header(props: { header: ProjectHeader }): React.JSX.Element {
    return (
        <div>
            <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
                {props.header.title}
            </p>
            <div className="flex">
                <div className="flex items-center mr-10">
                    <FiClock className="text-xl text-ternary-dark dark:text-ternary-light"/>
                    <span
                        className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.header.publishDate}
						</span>
                </div>
                <div className="flex items-center">
                    <FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light"/>
                    <span
                        className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
							{props.header.tags}
						</span>
                </div>
            </div>
        </div>
    );
}