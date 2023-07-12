"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/components/projects/data/projectData";
import CardHoverEffect from "@/components/animation/CardHoverEffect";

export default function ProjectEntry(props: {
  project: Project;
}): React.JSX.Element {
  return (
    <CardHoverEffect>
      <Link href={`/projects/${props.project.url}`}>
        <div
          className={
            "rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
          }
        >
          <div>
            <Image
              src={props.project.img}
              className={"rounded-t-xl border-none"}
              alt={"Single Project"}
              width={100}
              height={90}
            />
          </div>
          <div className={"text-center px-4 py-6"}>
            <p
              className={
                "font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2"
              }
            >
              {props.project.title}
            </p>
            <span
              className={"text-lg text-ternary-dark dark:text-ternary-light"}
            >
              {props.project.category}
            </span>
          </div>
        </div>
      </Link>
    </CardHoverEffect>
  );
}
