"use client";

import {motion} from "framer-motion";
import {ScriptProps} from "next/script";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PopupTransition({ children }: ScriptProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
