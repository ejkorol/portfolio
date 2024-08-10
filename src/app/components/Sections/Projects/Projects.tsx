"use client";
import { ProjectCard } from '.';
import { Spacer } from '@nextui-org/react';
import { FlipWords } from '@/app/components/ui/FlipWords';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { projects } from '@/app/content/projects';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="projects" className="mt-64">
      <FlipWords words={[`Projects\u0020`]} element='section-subheader' />
      <Spacer y={4} />
      <FlipWords words={[`Stuff\u0020I\u0020Worked\u0020On`]} element='section' />
      <Spacer y={16} />
      <div ref={ref} className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8 2xl:grid 2xl:grid-cols-3 2xl:gap-8 2xl:mb-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              delay: idx * 0.08,
              duration: 0.8,
            }}
          >
            <ProjectCard key={project.id} {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { Projects };
