import React from "react";
import Image from "next/image";

interface AboutClientSingleProps {
  title: string;
  image: string;
}

export default function AboutClientSingle(props: AboutClientSingleProps): React.JSX.Element {
    return (
      <div className="mb-5 cursor-pointer rounded-lg border px-10 py-5 shadow-sm bg-secondary-light border-ternary-light dark:border-ternary-dark">
        <Image src={props.image} alt={props.title} width={100} height={50} />
      </div>
    );
}