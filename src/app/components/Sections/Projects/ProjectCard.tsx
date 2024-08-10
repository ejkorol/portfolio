"use client"
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/projects";

const ProjectCard = ({ github, name, type, link, gradient, skills }: Project) => {

  return (
    <>
    <CardContainer className={`${gradient} rounded-lg`}>
      <CardBody className="flex flex-col justify-between p-4">
        <CardItem translateZ={50} className="w-full flex justify-end">
          <div className="flex gap-4 ">
            {github && (
              <Link
                className="flex items-center justify-center w-12 h-12 p-2 rounded-full hover:bg-black text-black hover:text-white transition-all"
                href={github}
                target="_blank"
              >
                <Github height={24} width={24} />
              </Link>
              )}
            {link && (
              <Link
                className="flex items-center justify-center w-12 h-12 p-2 rounded-full hover:bg-black text-black hover:text-white transition-all"
                href={link}
                target={ type === "external" ? "_blank" : "_self"}
              >
                <ArrowUpRight height={24} width={24} />
              </Link>
              )}
          </div>
        </CardItem>

        <CardItem translateZ={100} className="w-full">
          <div className="flex items-center justify-center w-full">
            <h3 className="text-4xl text-black font-medium">{name}</h3>
          </div>
        </CardItem>

        <div className="flex items-center justify-center gap-4">
          {skills.map((skill, idx) => (
            <CardItem key={idx} translateZ={20}>
              <p className="text-sm font-mono text-black font-medium tracking-wide">{skill}</p>
            </CardItem>
          ))}
        </div>

      </CardBody>
    </CardContainer>
    </>
  );
}

export { ProjectCard };
