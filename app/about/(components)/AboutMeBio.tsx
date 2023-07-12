"use client";

import React, {useRef} from "react";
import Image from "next/image";
import {aboutMeData} from "../(data)/aboutMeData";

export default function AboutMeBio(): React.JSX.Element {
  const aboutMeDataRef = useRef(aboutMeData);

  return (
    <div className="mt-10 block sm:mt-20 sm:flex sm:gap-10">
      <div className="mb-7 w-full sm:mb-0 sm:w-1/4">
        <Image
          src="/images/profile.png"
          width={200}
          height={200}
          className="rounded-lg"
          alt="Profile Image"
        />
      </div>

      <div className="w-full text-left font-general-regular sm:w-3/4">
        {aboutMeDataRef.current.map((bio) => (
          <p
            className="mb-4 text-lg text-ternary-dark dark:text-ternary-light"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
    </div>
  );
}
