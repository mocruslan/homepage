import {FiClock, FiTag} from "react-icons/fi";
import React from "react";
import {ProjectHeader} from "@/components/projects/data/projectData";

export default function Header(props: {
  header: ProjectHeader;
}): React.JSX.Element {
  return (
    <div>
      <p className="mt-14 mb-7 text-left text-3xl font-bold font-general-medium text-primary-dark dark:text-primary-light sm:mt-20 sm:text-4xl">
        {props.header.title}
      </p>
      <div className="flex">
        <div className="mr-10 flex items-center">
          <FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
          <span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
            {props.header.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="h-4 w-4 text-ternary-dark dark:text-ternary-light" />
          <span className="ml-2 leading-none font-general-regular text-primary-dark dark:text-primary-light">
            {props.header.tags}
          </span>
        </div>
      </div>
    </div>
  );
}