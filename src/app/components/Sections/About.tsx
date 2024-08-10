import { Spacer } from "@nextui-org/react";
import { FlipWords } from "../ui/FlipWords";

const About = async () => {
  return (
    <section className="flex flex-col justify-center" id="about">
      <div className="w-full md:w-2/3">
        <FlipWords words={[`A Quick Note On`]} element='section-subheader' />
        <Spacer y={4}/>
        <FlipWords words={[`Why, hello there `]} element='section' />
        <Spacer y={8}/>
        <FlipWords words={[`I’m a software engineer based in Toronto. In the last couple of years, I’ve been a designer and project manager in the food and beverage industry. I’m currently seeking career opportunities in the GTA as a software engineer and am excited to take on new challenges!`]} element="paragraph" />
      </div>
    </section>
  );
}

export { About };
