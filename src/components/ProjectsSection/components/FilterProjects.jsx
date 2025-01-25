"use client";
import React, { useState } from "react";
import { Projects, ProjectCard, CategorySelectSlider } from "./index";

export default function FilterProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const { games, web } = Projects;

  const filteredProjects =
    selectedCategory === "all"
      ? [...games, ...web]
      : Projects[selectedCategory];

  return (
    <div>
      <CategorySelectSlider
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="mt-7">
        <ul className="grid gap-10 gap-y-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                img={project.img}
                name={project.name}
                github={project.github}
                demo={project.demo}
                description={project.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
