import { Project } from "@/types/projects";

const renderings: Project = {
  id: "renderings",
  name: "Renderings",
  gradient: "bg-gradient-to-r from-lime-100 to-lime-300",
  link: "/project/renderings",
  type: "internal",
  skills: ['Fusion', 'Luxicon', 'Keyshot'],
  data: {
    blocks: [
      {
        type: "div",
        classNames: "flex flex-col justify-center md:grid-cols-2 lg:grid lg:grid-cols-3 gap-16 items-center",
        children: [
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "lamp-render-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "ash-tray-render-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "jar-render-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "jar-render-2.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "tube-render-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "vespertine-render-1.jpg"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "vespertine-render-2.jpg"
          },
          {
            type: "img",
            props: ["height=1000", "width=500"],
            src: "menu-1.png"
          }
        ]
      }
    ],
  },
};

export default renderings;
