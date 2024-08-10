import { Project } from "@/types/projects";

const businessCards: Project = {
  id: "business-cards",
  name: "Business Cards",
  gradient: "bg-gradient-to-r from-emerald-100 to-emerald-300",
  link: "/project/business-cards",
  type: "internal",
  skills: ['Adobe', 'Print', 'Stationary'],
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
            src: "ga-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=1000"],
            src: "ga-2.png"
          },
          {
            type: "img",
            classNames: "w-full",
            props: ["height=1000", "width=1000"],
            src: "ga-3.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=1000"],
            src: "ga-4.png"
          },
          {
            type: "img",
            classNames: "w-full",
            props: ["height=1000", "width=1000"],
            src: "og-1.png"
          },
          {
            type: "img",
            props: ["height=1000", "width=1000"],
            src: "ucs-1.png"
          },
        ]
      }
    ]
  }
};

export default businessCards;
