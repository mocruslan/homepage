import React from "react";
import { ProjectInfo } from "@/components/projects/data/projectData";

export function Technology(props: {
  projectInfo: ProjectInfo;
}): React.JSX.Element {
  return (
    <div className="mb-7">
      <p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
        {props.projectInfo.Technologies.title}
      </p>
      <p className="font-general-regular text-primary-dark dark:text-ternary-light">
        {props.projectInfo.Technologies.techs.join(", ")}
      </p>
    </div>
  );
}