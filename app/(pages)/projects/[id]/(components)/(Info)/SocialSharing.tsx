import Link from "next/link";
import {ProjectInfo} from "../../../../../data/projectsData";
import React from "react";

export default function SocialSharing(props: { projectInfo: ProjectInfo }): React.JSX.Element {
    return (
        <div>
            <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                {props.projectInfo.SocialSharingHeading}
            </p>
            <div className="flex items-center gap-3 mt-5">
                {props.projectInfo.SocialSharing && props.projectInfo.SocialSharing.map(
                    (social, projects) => (
                        <Link
                            key={projects}
                            href={social.url}
                            target="__blank"
                            passHref={true}
                            aria-label="Share Pro ject"
                            className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                        >
                            <span className="text-lg lg:text-2xl">
                                <social.icon/>
                            </span>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}
