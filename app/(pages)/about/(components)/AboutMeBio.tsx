"use client"

import Image from 'next/image';
import React, {useRef} from 'react';
import {aboutMeData} from '../../../data/aboutMeData';

export default function AboutMeBio(): React.JSX.Element {
    const aboutMe = useRef(aboutMeData);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <Image
                    src="/images/profile.jpeg"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    alt="Profile Image"
                />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMe.current.map((bio) => (
                    <p
                        className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                        key={bio.id}
                    >
                        {bio.bio}
                    </p>
                ))}
            </div>
        </div>
    );
}
