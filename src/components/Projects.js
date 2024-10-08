"use client";
import React from "react";
import projectData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div id="projects" className="min-h-screen mb-20  mx-5 md:mx-28">
      <motion.h1
        className="text-4xl font-bold text-center"
        ref={ref}
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ originX: 0.5, originY: 0.5 }}
      >
        code <span className="text-blue-600"> : </span>{" "}
        <span className="text-emerald-600">projects</span>
      </motion.h1>
      <div className="">
        <motion.div
          className="mt-20 flex flex-row flex-wrap justify-center px-5 gap-6 items-center"
          ref={ref}
          initial={{ scale: 0.5 }}
          animate={{ scale: inView ? 1 : 0.5 }}
          transition={{ duration: 1 }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          {projectData.projects.map((pj) => {
            const stack = pj.techStack[0].split(",   ");
            return (
              <ProjectCard
                key={pj.projectId}
                tech={stack}
                desc={pj.description}
                img={pj.projectImg}
                name={pj.projectName}
                live={pj.liveLink}
                repo={pj.projectGithubLink}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
