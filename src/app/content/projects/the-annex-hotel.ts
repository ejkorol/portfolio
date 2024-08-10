import { Project } from "@/types/projects";

const theAnnexHotel: Project = {
  id: "the-annex-hotel",
  name: "Annex Hotel",
  gradient: "bg-gradient-to-r from-yellow-100 to-yellow-300",
  link: "/project/the-annex-hotel",
  type: "internal",
  skills: ["UX", "Stationary", "Design"],
  data: {
    blocks: [
      {
        type: "div",
        classNames: "flex flex-col md:flex-row items-center justify-center",
        children: [
          {
            type: "img",
            src: "hotel.png",
            props: ["height=500", "width=500"]
          },
          {
            type: "div",
            classNames: "flex flex-col gap-3 md:w-1/2",
            children: [
              {
                type: "h2",
                classNames: "text-xl font-medium",
                content: "The Annex Hotel"
              },
              {
                type: "h1",
                classNames: "text-6xl",
                content: "Welcome to your home away from home."
              }
            ]
          }
        ]
      },
      {
        type: "div",
        classNames: "mt-16 md:mt-8 flex flex-col md:flex-row items-center",
        children: [
          {
            type: "div",
            classNames: "flex flex-col gap-4 md:w-3/4 md:mr-8",
            children: [
              {
                type: "h2",
                classNames: "text-5xl",
                content: "Stationary Design"
              },
              {
                type: "p",
                classNames: "text-secondary",
                content: `Aligned to established brand values I curated a collection of stationary items to complement the guest experience within our hotel. This included notepads and envelopes, designed to encourage personal reflection and communication, as well as loyalty cards for our cafe, fostering ongoing engagement. Custom cups, sleeves, and disposables have been crafted to enhance the visibility of our brand within the community. Thoughtfully designed menus aim to evoke a sense of minimal aesthetic that did not distract from the now busy lobby.`
              }
            ]
          },
          {
            type: "div",
            classNames: "mt-16 md:mt-0",
            children: [
              {
                type: "img",
                src: "cafe-menus.png",
                props: ["height=500", "width=500"]
              }
            ]
          }
        ]
      },
      {
        type: "div",
        classNames: "mt-16 flex flex-col md:grid md:grid-cols-3 justify-between gap-8 items-center",
        children: [
          {
            type: "img",
            src: "loyalty-cards.png",
            props: ["height=500", "width=500"]
          },
          {
            type: "img",
            src: "cafe-menus-2.png",
            props: ["height=500", "width=500"]
          },
          {
            type: "img",
            src: "cafe-menus-3.png",
            props: ["height=500", "width=500"]
          },
        ]
      },
      {
        type: "div",
        classNames: "mt-32 flex flex-col md:flex-row items-center gap-16",
        children: [
          {
            type: "div",
            classNames: "order-2 md:order-2",
            children: [
              {
                type: "img",
                src: "hero.png",
                props: ["height=500", "width=500"]
              }
            ]
          },
          {
            type: "div",
            classNames: "order-2 md:order-2 flex flex-col gap-4 md:w-3/4 mr-8",
            children: [
              {
                type: "h2",
                classNames: "text-5xl",
                content: "Design Assets"
              },
              {
                type: "p",
                classNames: "text-secondary",
                content: `As a key member of the team, I was responsible for creating a wide range of design assets, including menus, posters, graphics, and other marketing materials essential for the operational success of the lobby. These assets were crucial for promoting various events such as chess clubs, wine nights, and private dining experiences through advertising channels. My role also involved obtaining final approval for these assets from the Director of Brand Experience and managing the outsourcing of design work when required.`
              }
            ]
          },
        ]
      },
      {
        type: "div",
        classNames: "mt-16 flex flex-col md:grid md:grid-cols-3 justify-between gap-8 items-center",
        children: [
          {
            type: "img",
            src: "design-asset-1.png",
            props: ["height=500", "width=500"]
          },
          {
            type: "img",
            src: "design-asset-2.png",
            props: ["height=500", "width=500"]
          },
          {
            type: "img",
            src: "design-asset-3.png",
            props: ["height=500", "width=500"]
          },
        ]
      },
    ],
  },
};

export default theAnnexHotel;
