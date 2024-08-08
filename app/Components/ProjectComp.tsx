import React from "react";

interface ProjectCompProps {
  imgSrc: string;
  category: string;
  title: string;
  description: string;
}

const ProjectComp: React.FC<ProjectCompProps> = ({ imgSrc, category, title, description }) => {
  return (
    <div className="2xl:mx-32 bg-[#03001417] backdrop-blur-md cursor-pointer rounded overflow-hidden relative top-0 hover:-top-2 transition-all duration-300 m-10">
      <img src={imgSrc} alt={title} className="w-full h-[450px]" />
      <div className="p-6">
        <span className="text-sm block text-gray-400 mb-2">{category}</span>
        <h3 className="text-xl font-bold text-gray-200">{title}</h3>
        <hr className="my-6 text-gray-900" />
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectComp;
