import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row rounded-lg shadow-lg border border-[#1d4137] bg-[#1d4137] mt-6" >
      {/* <Image
        src={src}
        alt={title}
        width={300}
        height={300}
        className="object-contain"
      /> */}

      <div className="relative p-5 mt-10 mr-20 w-70">
        <h1 className="text-2xl font-semibold text-white mb-10">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <img
        src={src}
        alt={title}
        width={300}
        height={300}
        className="object-contain ml-[-60px] mr-[10px]"
      />
    </div>
  );
};

export default ProjectCard;
