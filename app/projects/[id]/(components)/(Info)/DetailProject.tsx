import React from "react";
import {ProjectDetail, ProjectInfo,} from "@/components/projects/data/projectData";

export default function DetailProject(props: {
  projectInfo: ProjectInfo;
}): React.JSX.Element {
  return (
    <div className="mt-10 w-full text-left sm:mt-0 sm:w-2/3">
      <p className="mb-7 text-2xl font-bold text-primary-dark dark:text-primary-light">
        {props.projectInfo.ProjectDetailsHeading}
      </p>
      {props.projectInfo.ArrProjectDetail.map((details: ProjectDetail) => {
        return (
          <p
            key={details.id}
            className="mb-5 text-lg font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            {details.details}
          </p>
        );
      })}
    </div>
  );
}