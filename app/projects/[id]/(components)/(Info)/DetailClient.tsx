import React from "react";
import {CompanyInfo, ProjectInfo} from "@/data/projectsData";

export default function DetailClient(props: { projectInfo: ProjectInfo }): React.JSX.Element {
    return (
        <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                {props.projectInfo.ClientHeading}
            </p>
            <ul className="leading-loose">
                {props.projectInfo.CompanyInfo.map(
                    (info: CompanyInfo) => {
                        return (
                            <li
                                className="font-general-regular text-ternary-dark dark:text-ternary-light"
                                key={info.id}
                            >
                                <span>{info.title}: </span>
                                <a
                                    href="https://stoman.me"
                                    className={
                                        info.title === 'Website' ||
                                        info.title === 'Phone'
                                            ? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
                                            : ''
                                    }
                                    aria-label="Project Website and Phone"
                                >
                                    {info.details}
                                </a>
                            </li>
                        );
                    }
                )}
            </ul>
        </div>
    );
}