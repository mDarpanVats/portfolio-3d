import React from "react";

export interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    path: string;
    backGround: string;
    stack: { name: string }[];
    sourceCode?: string;
    livePreview?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="w-full rounded-lg shadow-lg overflow-hidden mb-5"
      style={{ background: project.backGround }}
      data-swiper-parallax="-23%"
      key={project.name}
    >
      <img src={project.path} alt="Project" className="w-full object-cover" />
      <div className="p-5 bg-gray-800 rounded-b-lg">
        <h2 className="text-lg font-semibold text-white mb-2">
          {project.name}
        </h2>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((item, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex justify-around border-2 border-gray-600 rounded-md p-3">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              className="text-white hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
          {project.livePreview && (
            <a
              href={project.livePreview}
              className="text-white hover:text-gray-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
