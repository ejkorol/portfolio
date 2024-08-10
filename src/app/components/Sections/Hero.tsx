import { FlipWords } from "@/app/components/ui/FlipWords";
import { Spacer } from "@nextui-org/react";

const words = [
  `Fullstack Engineer`,
  `Industrial Designer`,
  `UI Developer`
]

const name = ["Jason Korol"]

const Hero = async () => {
  return (
    <section className="h-[80svh] flex flex-col justify-center" id="home">
      <div className="">
        <div className="h-96 flex flex-col justify-center">
          <div className="">
            <FlipWords words={name} element="header" />
            <Spacer y={8} />
            <FlipWords words={words} element="subheader" />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
