import React from "react";
import Objective from "./(Info)/Objective";
import {Technology} from "./(Info)/Technology";
import SocialSharing from "./(Info)/SocialSharing";
import DetailProject from "./(Info)/DetailProject";
import DetailClient from "./(Info)/DetailClient";
import {ProjectInfo} from "@/components/projects/data/projectData";

export default function Info(props: {
  projectInfo: ProjectInfo;
}): React.JSX.Element {
  return (
    <div className="mt-14 block gap-0 sm:flex sm:gap-10">
      <div className="w-full text-left sm:w-1/3">
        <DetailClient projectInfo={props.projectInfo} />

        <Objective projectInfo={props.projectInfo} />

        <Technology projectInfo={props.projectInfo} />

        <SocialSharing projectInfo={props.projectInfo} />
      </div>

      <DetailProject projectInfo={props.projectInfo} />
    </div>
  );
}