"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "UI/UX",
  "Illustrations",
  "Fashion Design",
  "Graphic Design",
];

const projects = [
  {
    id: 1,
    category: "UI/UX",
    name: "Living Room",
    image: "/illustrations/abstract.png",
  },
  {
    id: 2,
    category: "Illustrations",
    name: "Dreamy Forest",
    image: "/illustrations/3dbookillustration.png",
  },
  {
    id: 3,
    category: "Illustrations",
    name: "Assam Women Illustration",
    image: "/illustrations/3dbookillustration2.png",
  },
  {
    id: 4,
    category: "Graphic Design",
    name: "Poster Series",
    image: "/illustrations/papercuteffect.png",
  },
  {
    id: 5,
    category: "Illustrations",
    name: "Coffee Shop themed-UI Design",
    image: "/illustrations/coffee.png",
  },
  {
    id: 6,
    category: "Fashion Design",
    name: "Evening Gowns",
    image: "/illustrations/panchayat2.png",
  },
];

const ProjectSection = () => {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full h-full">
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base font-medium ${
              selected === cat
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-6xl w-full">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              layout
              key={project.id}
              className="flex items-start justify-start flex-col w-full"
            >
              <div className="bg-secondary p-4 rounded-md shadow-lg flex flex-col gap-3 items-center justify-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm capatialize tracking-wider text-primary mt-6">
                {project.category}
              </span>
              <h2 className="font-semibold text-lg text-center">
                {project.name}
              </h2>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center mt-4 mb-4">
        <div className="relative flex items-center justify-center">
          <button
            className={`absolute z-10 flex flex-row text-sm items-center justify-center gap-1 px-5 py-2 font-bold rounded-full text-white transition-colors duration-300
          ${"bg-primary hover:shadow-md"}
        `}
          >
            Explore More{" "}
            <span className="flex items-center justify-center">
              <img src="/caretdown.svg" alt="arrow" className="w-4 h-4" />
            </span>
          </button>
          <div className="w-[59%] h-[59%] -ml-[0.7px] -mb-[0.5px]">
            <img src="/buttonBg.svg" alt="buttonBg" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
