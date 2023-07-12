"use client";

import {motion} from "framer-motion";
import {ScriptProps} from "next/script";

const variants = {
  hover: { scale: 1.1 },
  tab: { scale: 1.0 },
};

export default function CardHoverEffect({ children }: ScriptProps) {
  return (
    <motion.div variants={variants} whileHover="hover" whileTap="tab">
      {children}
    </motion.div>
  );
}
