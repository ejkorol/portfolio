import {
  Hero,
  About,
  Projects,
  Contact
} from "@/app/components/Sections";

const Home = async () => {
  return (
    <main className="px-8 md:px-32 lg:px-64">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home
