import { Project } from "@/types/projects";

const wireframes: Project = {
  id: "wireframes",
  name: "Wireframes",
  gradient: "bg-gradient-to-r from-emerald-100 to-emerald-300",
  link: "/project/wireframes",
  type: "internal",
  skills: ['Figma', 'UI', 'UX'],
  data: {
    blocks: [
      {
        type: "div",
        classNames: "flex flex-col lg:grid lg:grid-cols-2 justify-center items-center gap-16",
        children: [
          {
            type: "img",
            classNames: "w-full",
            props: ["height=1000", "width=1000"],
            src: "minko-coffee.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=1000"],
            src: "og-1.png"
          },
          {
            type: "img",
            classNames: "w-full",
            props: ["height=1000", "width=1000"],
            src: "og-2.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=1000"],
            src: "siesde-1.png"
          },
          {
            type: "img",
            classNames: "w-full",
            props: ["height=1000", "width=1000"],
            src: "siesde-2.png"
          }
        ]
      }
    ]
  }
};

export default wireframes;
