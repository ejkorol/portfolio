export * from "./Hero"
export * from "./About"
export * from "./Projects"
export * from "./Contact"

export interface Section {
  name: string;
}

const sections: (Section[]) = [
  {
    name: "home"
  },
  {
    name: "about"
  },
  {
    name: "projects"
  },
  {
    name: "contact"
  }
]

export { sections };
