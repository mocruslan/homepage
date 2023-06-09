import React from "react";
import Image from 'next/image';

interface AboutClientSingleProps {
    title: string;
    image: string;
}

export default function AboutClientSingle(props: AboutClientSingleProps): React.JSX.Element {
    return (
        <div
            className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
            <Image
                src={props.image}
                alt={props.title}
                width={100}
                height={50}
            />
        </div>
    );
}