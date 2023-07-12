"use client";

import React, {useState} from "react";
import Button from "@/components/Button";
import {motion} from "framer-motion";

export default function ContactOverlay(): React.JSX.Element {
    const [x, setX] = useState("0%");

    const toggleXPosition = () => {
        if (x === "0%") {
            setX("100%");
        } else {
            setX("0%");
        }
    };

    return (
        <motion.div
            className="w-1/2 rounded-2xl bg-secondary-light dark:bg-secondary-dark"
            animate={{x: x}}
            transition={{type: "easeInOut"}}
        >
            <p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
                Contact Form
            </p>

            <p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
                Contact Form
            </p>

            <p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
                Contact Form
            </p>

            <div className="mt-6">
        <span
            className="mt-6 rounded-lg bg-indigo-500 px-7 py-4 text-center font-medium tracking-wider text-white duration-500 font-general-medium hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900">
          <Button
              aria-label={"Send Message"}
              title={"Send Message"}
              onClickAction={() => toggleXPosition()}
          />
        </span>
            </div>
        </motion.div>
    );
}
