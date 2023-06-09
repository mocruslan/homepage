"use client"

import React, {useRef} from "react";
import Header from "./(components)/Header";
import Gallery from "./(components)/Gallery";
import Info from "./(components)/Info";
import RelatedProjects from "@/components/projects/RelatedProjects";
import {filterProjectsByURL, Project} from '@/data/projectsData';

export default function Project({params}): React.JSX.Element {
    const projectRef: React.MutableRefObject<Project> = useRef(filterProjectsByURL(params.id));

    return (
        <div className="container mx-auto">
            <Header header={projectRef.current.ProjectHeader}/>

            <Gallery arrProjectImage={projectRef.current.ArrProjectImage}/>

            <Info projectInfo={projectRef.current.ProjectInfo}/>

            <RelatedProjects/>
        </div>
    );
}