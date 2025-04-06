import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  id: string;
  url: string;
  image: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, url, image, title }) => {
  return (
    <Link href={`${url}/${id}`} className="flex items-start flex-col gap-2 w-full h-full justify-center">
      <div className="w-full h-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition ease-in-out duration-300" />
      </div>
      <div className="w-full text-left text-sm sm:text-base md:text-lg">
        <p className="font-bold">{title}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
