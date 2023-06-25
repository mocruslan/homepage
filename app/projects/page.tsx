import React from "react";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import PageTransition from "@/components/animation/PageTransition";

export default function Projects(): React.JSX.Element {
    return (
        <PageTransition>
            <main>
                <div className="container mx-auto">
                    <ProjectsGrid/>
                </div>
            </main>
        </PageTransition>
    );
}