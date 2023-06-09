"use client"

import React, {useRef} from 'react';
import Image from 'next/image';
import {aboutMeData} from '../(data)/aboutMeData';

export default function AboutMeBio(): React.JSX.Element {
    const aboutMeDataRef = useRef(aboutMeData);

    return (
        <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
            <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
                <Image
                    src="/images/profile.png"
                    width={200}
                    height={200}
                    className="rounded-lg"
                    alt="Profile Image"
                />
            </div>

            <div className="font-general-regular w-full sm:w-3/4 text-left">
                {aboutMeDataRef.current.map((bio) => (
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
