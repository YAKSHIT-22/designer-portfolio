"use client";

import ProjectCard from "@/components/ui/projectCard";
import ShowMoreButton from "@/components/ui/showMoreButton";
import React, { useState } from "react";

const allProjects = [
  { image: "/projects/typography.png", title: "Typography" },
  { image: "/projects/calendar2023.png", title: "Calendar 2023" },
  { image: "/projects/emoticonsdesign.png", title: "Emoticons Design" },
  { image: "/projects/beyondoriginals2.png", title: "Beyond Originals" },
  { image: "/projects/colorwheel.png", title: "Color Wheel" },
  { image: "/projects/streetphotography.png", title: "Street Photography" },
  { image: "/projects/beyondoriginals.png", title: "Beyond Originals" },
  { image: "/projects/lightphotography.png", title: "Light Photography" },
  { image: "/projects/dashboarddesign.png", title: "Dashboard Design" },
  { image: "/projects/uiux.png", title: "UI/UX Design" },
  { image: "/projects/brandidentity.png", title: "Brand Identity" },
  { image: "/projects/storybook.png", title: "Storybook" },
];

const page = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const isAllVisible = visibleCount >= allProjects.length;

  return (
    <section className="w-full h-full flex items-start justify-start font-popp tracking-tighter">
      <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 pt-44 scroll-pt-44">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-8">
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} id={`${index}`} image={project.image} title={project.title} />
          ))}
        </div>

        <ShowMoreButton onClick={handleShowMore} disabled={isAllVisible} />
      </div>
    </section>
  );
};

export default page;
