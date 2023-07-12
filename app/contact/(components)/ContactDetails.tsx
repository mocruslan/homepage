"use client";

import React, { useRef } from "react";
import { contactData } from "../(data)/contactData";

export default function ContactDetails(): React.JSX.Element {
  const contactDataRef = useRef(contactData);

  return (
    <div className="w-full lg:w-1/2">
      <div className="max-w-xl px-6 text-left">
        <h2 className="mt-12 mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
          Contact details
        </h2>
        <ul>
          {contactDataRef.current.map((contact) => (
            <li className="flex" key={contact.id}>
              <i className="mt-1 mr-4 text-2xl text-neutral-500 dark:text-neutral-400">
                <contact.icon />
              </i>
              <span className="mb-4 text-lg text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
