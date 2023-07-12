"use client";

import React, {useRef} from "react";
import {arrBrandingOptionData} from "@/components/projects/data/brandingData";

interface ProjectsFilterProps {
  setSelectProject: (value: string) => void;
}

export default function ProjectsFilterProps(
  props: ProjectsFilterProps,
): React.JSX.Element {
  const brandingOptionDataRef = useRef(arrBrandingOptionData);

  return (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        props.setSelectProject(e.target.value);
      }}
      className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value="" className={"text-sm sm:text-md"}>
        All Projects
      </option>

      {brandingOptionDataRef.current.map((option: string) => (
        <option className={"text-normal sm:text-md"} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}