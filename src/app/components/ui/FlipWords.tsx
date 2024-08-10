"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export type Elements = 'header' | 'subheader' | 'section' | 'section-subheader' | 'paragraph';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
  element: Elements;
}

export const FlipWords: React.FC<FlipWordsProps> = ({ words, duration = 3000, className, element }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.01,
  });

  const startAnimation = useCallback(() => {
    const word = words[(words.indexOf(currentWord) + 1) % words.length];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (inView && !isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [inView, isAnimating, duration, startAnimation]);

  useEffect(() => {
    if (isAnimating) {
      setIsAnimating(false);
    }
  }, [currentWord]);

  const renderComponent = (el: Elements) => {
    const wordsArray = currentWord.split(" ");
    switch (el) {
      case "header":
        return wordsArray.map((word, index) => (
          <motion.h1
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="text-8xl font-medium inline-block whitespace-pre-wrap"
          >
            {word + " "}
          </motion.h1>
        ));
      case "subheader":
        return wordsArray.map((word, index) => (
          <motion.h2
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="text-4xl inline-block whitespace-pre-wrap"
          >
            {word + " "}
          </motion.h2>
        ));
      case "section":
        return wordsArray.map((word, index) => (
          <motion.h3
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
            }}
            className="text-6xl font-medium inline-block whitespace-pre-wrap"
          >
            {word + ' '}
          </motion.h3>
        ));
      case "section-subheader":
        return wordsArray.map((word, index) => (
          <motion.h4
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
            }}
            className="text-xl text-secondary inline-block whitespace-pre-wrap"
          >
            {word + ' '}
          </motion.h4>
        ));
      case "paragraph":
        return wordsArray.map((word, index) => (
          <motion.div
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.05,
              duration: 0.4,
            }}
            className="text-secondary overflow-none inline-block whitespace-pre-wrap"
          >
            {word + ' '}
          </motion.div>
        ));
      default:
        return null;
    }
  };

  return (
    <div ref={ref}>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className={cn("z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2", className)}
            key={currentWord}
          >
            {renderComponent(element)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
