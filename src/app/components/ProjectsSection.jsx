"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Nonparametric Bayesian Online Change Point Detection Using Kernel Density Estimation With Nonparametric Hazard Function",
    description: "This research is regarding enhancement of existed change point detection algorithm, making it more accurate while conserving its decent computational expenses",
    image: "/images/projects/1.png",
    tag: ["All", "Research"],
    previewUrl: "https://link.springer.com/article/10.1007/s11222-023-10375-4",
    Conference: "The 4th Asia Joint Conference on Computing",
    ConferenceURL: "https://www.ajcc-conf.net/",
  },
  {
    id: 2,
    title: "Thermoelectric Couple Size Optimization of Thermoelectric Generator for Waste Heat Recovery Systems Using Multi-Objective Genetic Algorithm",
    description: "This research used multiobjective genetic algorithm to find an optimal design of thermoelectric generator, a device that can convert heat flux into electricity",
    image: "/images/projects/2.png",
    tag: ["All", "Research"],
    previewUrl: "/",
    Conference: "The 18th Siam Physics Congress",
    ConferenceURL: "https://spc2023.science.cmu.ac.th/",
  },
  {
    id: 3,
    title: "Efficiency of Time Series Clustering Method Based on Distribution of Difference Using Several Distances",
    description: "This research explores diverse classification distance and discusses the compatibility with diverse time series data", 
    image: "/images/projects/3.png",
    tag: ["All", "Research"],
    previewUrl: "https://ieeexplore.ieee.org/document/9836279",
    Conference: "The 19th International Joint Conference on Computer Science and Software Engineering",
    ConferenceURL: "https://jcsse2022.cp.su.ac.th/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="research">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Research
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            <Link
              href={project.ConferenceURL}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              {project.Conference}
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
