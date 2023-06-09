import React from "react";
import Objective from "./(Info)/Objective";
import {Technology} from "./(Info)/Technology";
import SocialSharing from "./(Info)/SocialSharing";
import DetailProject from "./(Info)/DetailProject";
import DetailClient from "./(Info)/DetailClient";
import {ProjectInfo} from "@/components/projects/data/projectData";

export default function Info(props: { projectInfo: ProjectInfo }): React.JSX.Element {
    return (
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
            <div className="w-full sm:w-1/3 text-left">
                <DetailClient projectInfo={props.projectInfo}/>

                <Objective projectInfo={props.projectInfo}/>

                <Technology projectInfo={props.projectInfo}/>

                <SocialSharing projectInfo={props.projectInfo}/>
            </div>

            <DetailProject projectInfo={props.projectInfo}/>
        </div>
    );
}