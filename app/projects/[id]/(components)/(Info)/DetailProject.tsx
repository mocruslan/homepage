import React from "react";
import {ProjectDetail, ProjectInfo} from "@/data/projectsData";

export default function DetailProject(props: { projectInfo: ProjectInfo }): React.JSX.Element {
    return (
        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
            <p className="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
                {props.projectInfo.ProjectDetailsHeading}
            </p>
            {props.projectInfo.ArrProjectDetail.map((details: ProjectDetail) => {
                return (
                    <p
                        key={details.id}
                        className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                    >
                        {details.details}
                    </p>
                );
            })}
        </div>
    );
}