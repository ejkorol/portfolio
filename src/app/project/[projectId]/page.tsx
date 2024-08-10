import React from "react";
import { Block } from "@/types/projects";
import Transition from "./Transition";
import { Image, Spacer } from "@nextui-org/react";

import { projects } from "@/app/content/projects";

const getProject = (id: string) => {
  const project = projects.filter(proj => proj.id === id);
  return project;
};


const renderBlock = (block: Block, projectId: string) => {
  switch (block.type) {
    case 'div':
      return (
        <div className={block.classNames}>
          {block.children?.map((child, index) => (
            <React.Fragment key={index}>{renderBlock(child, projectId)}</React.Fragment>
          ))}
        </div>
      );

    case 'h2':
    case 'h1':
    case 'p':
      return React.createElement(
        block.type,
        { className: block.classNames },
        block.content
      );

    case 'img':
      const imgProps = block.props?.reduce((acc:any, prop:any) => {
        const [key, value] = prop.split('=');
        acc[key] = value;
        return acc;
      }, {} as Record<string, string>) || {};

      return (
        <Image
          {...imgProps}
          src={`/projects/${projectId}/${block.src}`}
          alt={block.src?.replace('.png', '').replace('.jpg', '')}
        />
      );

    default:
      return null;
  }
};

const ProjectPage = async ({ params }: { params: { projectId: string } }) => {
  const [ project ] = getProject(params.projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Transition>
      <main className="px-8 mt-8 md:mt-32 md:px-32 lg:px-64">
        <section>
          <h1 className="text-6xl">{project.name}</h1>
          <Spacer y={16} />

          {project.data?.blocks.map(block => renderBlock(block, params.projectId))}

        </section>
      </main>
    </Transition>
  );
}

export default ProjectPage;
