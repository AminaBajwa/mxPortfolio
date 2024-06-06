import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard1 = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden flex flex-col md:flex-row rounded-lg shadow-lg border border-[#1d4137] bg-[#1d4137] mt-6" >

      <div className="relative p-5 mt-10 mr-10 w-70">
        <h1 className="text-2xl font-semibold text-white mb-10">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <img
        src={src}
        alt={title}
        width={400}
        height={400}
        className="object-contain ml-[-70px] mr-[-100px]"
      />
    </div>
  );
};

export default ProjectCard1;
