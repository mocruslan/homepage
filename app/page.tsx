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
          <HomeBanner />

          <ProjectsGrid />

          <div className={"mt-10 sm:mt-15 flex justify-center"}>
            <div className="flex items-center rounded-lg bg-indigo-500 px-6 py-3 text-lg text-white shadow-lg duration-300 font-general-medium hover:bg-indigo-600 hover:shadow-xl focus:ring-1 focus:ring-indigo-900 sm:text-xl">
              <Link href={"/projects"} aria-label={"More Projects"} passHref>
                <Button title={"More Projects"} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}