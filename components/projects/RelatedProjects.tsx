"use client";

import Image from "next/image";
import {
  RelatedProject,
  relatedProjectsData,
} from "./data/relatedProjectsData";
import React, { useRef } from "react";

export default function RelatedProjects(): React.JSX.Element {
  const relatedProjectsDataRef = useRef(relatedProjectsData);

  return (
    <div
      className={
        "mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
      }
    >
      <p
        className={
          "font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
        }
      >
        {relatedProjectsDataRef.current.title}
      </p>

      <div className={"grid grid-cols-1 sm:grid-cols-4 gap-10"}>
        {relatedProjectsDataRef.current.projects.map(
          (project: RelatedProject) => {
            return (
              <Image
                src={project.img}
                className={"rounded-xl cursor-pointer"}
                width="400"
                height="400"
                alt={project.title}
                key={project.id}
              />
            );
          },
        )}
      </div>
    </div>
  );
}
