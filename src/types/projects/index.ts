type FixedLengthArray<T, L extends number> = {
  0: T;
  length: L;
} & ReadonlyArray<T>;

type Skills = FixedLengthArray<string, 3>;

export interface Block {
  type: 'div' | 'h1' | 'p' | 'img' | "h2";
  src?: string;
  children?: Block[];
  content?: string;
  classNames?: string;
  props?: any
}

interface Data {
  blocks: Block[]
}

export interface Project {
  id: string;
  name: string;
  github?: string;
  link?: string;
  gradient: string;
  skills: Skills;
  type?: "internal" | "external",
  data?: Data
}
