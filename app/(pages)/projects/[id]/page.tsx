"use client"

import {filterProjectsByURL, Project} from '../../../data/projectsData';
import Header from "./(components)/Header";
import Gallery from "./(components)/Gallery";
import React, {useRef} from "react";
import Info from "./(components)/Info";
import RelatedProjects from "../../../components/projects/RelatedProjects";

export default function Project({params}): React.JSX.Element {
    const project: React.MutableRefObject<Project> = useRef(filterProjectsByURL(params.id));

    return (
        <div className="container mx-auto">
            <Header header={project.current.ProjectHeader}/>

            <Gallery arrProjectImage={project.current.ArrProjectImage}/>

            <Info projectInfo={project.current.ProjectInfo}/>

            <RelatedProjects/>
        </div>
    );
}
