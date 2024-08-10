"use client"
import { Button, Spacer } from "@nextui-org/react";
import Link from "next/link";
import { FlipWords } from "../ui/FlipWords";
import { motion } from "framer-motion";
import { Linkedin, InstagramIcon, Github, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { LinkPreview } from "../ui/link-preview";

interface Platform {
  platform: string;
  icon: any;
  link?: boolean;
  ref: string;
}

const platforms: Platform[] = [
  {
    platform: "GitHub",
    icon: Github,
    link: true,
    ref: "https://www.github.com/ejkorol",
  },
  {
    platform: "LinkedIn",
    icon: Linkedin,
    link: true,
    ref: "https://www.linkedin.com/in/jason-korol",
  },
  {
    platform: "Instagram",
    icon: InstagramIcon,
    link: true,
    ref: "https://www.instagram.com/jvs.e",
  },
  {
    platform: "Email",
    icon: Mail,
    link: true,
    ref: "mailto:ejkorol@gmail.com",
  },
];

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <>
      <section id="contact" className="mt-64">
        <FlipWords words={[`On The Web`]} element="section-subheader" />
        <Spacer y={4} />
        <FlipWords words={[`More Of My Work`]} element="section" />
        <Spacer y={16} />
        <div ref={ref} className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8">
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                delay: idx * 0.08,
                duration: 0.8,
              }}
            >
              <Button
                fullWidth
                as={platform.link ? Link : undefined}
                href={platform.ref}
                target={platform.link ? "_blank" : undefined}
                variant="bordered"
                radius="sm"
                color="primary"
                size="lg"
                className="flex justify-between py-8 hover:bg-primary hover:text-black transition-all hover:drop-shadow-xl"
                startContent={<platform.icon />}
              >
                {platform.platform}
              </Button>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="my-64 w-full md:w-2/3">
        <FlipWords words={[`Contact`]} element="section-subheader" />
        <Spacer y={4} />
        <FlipWords words={[`Shoot Me A Line`]} element="section" />
        <Spacer y={16} />
        <FlipWords
          words={[
            `The fastest way to get in touch with me is to send me a message on LinkedIn or a DM on Instagram. Whether you have a question or just want to say Hi, I'll try my best to get back to you.`,
          ]}
          element="paragraph"
          duration={9000}
        />
      </section>
    </>
  );
};

export { Contact };
