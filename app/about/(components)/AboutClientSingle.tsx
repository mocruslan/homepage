import Image, {StaticImageData} from 'next/image';
import React from "react";

interface AboutClientSingleProps {
    title: string;
    image: string;
}

const AboutClientSingle: React.FC<AboutClientSingleProps> = ({ title, image }) => {
  return (
    <div className="py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={100}
        height={50}
      />
    </div>
  );
}

export default AboutClientSingle;
