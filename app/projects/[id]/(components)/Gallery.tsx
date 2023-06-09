import React from "react";
import Image from "next/image";
import {ProjectImage} from "@/components/projects/data/projectData";

export default function Gallery(props: { arrProjectImage: ProjectImage[] }): React.JSX.Element {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
            {props.arrProjectImage.map((projectImage: ProjectImage) => {
                return (
                    <div className="mb-10 sm:mb-0" key={projectImage.id}>
                        <Image
                            src={projectImage.img}
                            className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                            alt={projectImage.title}
                            key={projectImage.id}
                            width={100}
                            height={90}
                        />
                    </div>
                );
            })}
        </div>
    );
}