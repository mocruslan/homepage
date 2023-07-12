import React from "react";
import Link from "next/link";
import {ProjectInfo} from "@/components/projects/data/projectData";

export default function SocialSharing(props: {
  projectInfo: ProjectInfo;
}): React.JSX.Element {
  return (
    <div>
      <p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
        {props.projectInfo.SocialSharingHeading}
      </p>
      <div className="mt-5 flex items-center gap-3">
        {props.projectInfo.SocialSharing &&
          props.projectInfo.SocialSharing.map((social, projects) => (
            <Link
              key={projects}
              href={social.url}
              target="__blank"
              passHref={true}
              aria-label="Share Pro ject"
              className="rounded-lg p-2 text-gray-400 shadow-sm duration-500 bg-ternary-light hover:text-primary-dark dark:bg-ternary-dark dark:hover:text-primary-light"
            >
              <span className="text-lg lg:text-2xl">
                <social.icon />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
