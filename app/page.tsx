import React from "react";
import Link from "next/link";
import HomeBanner from "./HomeBanner";
import Button from "@/components/Button";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import PageTransition from "@/components/animation/PageTransition";

export default function Home(): React.JSX.Element {
    return (
        <PageTransition>
            <main>
                <div className={"container mx-auto"}>
                    <HomeBanner/>

                    <ProjectsGrid/>

                    <div className={"mt-10 sm:mt-15 flex justify-center"}>
                        <div
                            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
                            <Link href={"/projects"} aria-label={"More Projects"} passHref>
                                <Button title={"More Projects"}/>
                            </Link>
                        </div>
                    </div>
                </div>

            </main>
        </PageTransition>
    )
}