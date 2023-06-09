import React from "react";
import {ProjectInfo} from "@/data/projectsData";

export function Technology(props: { projectInfo: ProjectInfo }): React.JSX.Element {
    return (
        <div className="mb-7">
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {props.projectInfo.Technologies.title}
            </p>
            <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {props.projectInfo.Technologies.techs.join(
                    ', '
                )}
            </p>
        </div>
    );
}