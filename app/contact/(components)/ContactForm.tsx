"use client";

import React from "react";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";

export default function ContactForm(): React.JSX.Element {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="m-4 max-w-xl rounded-xl p-6 text-left shadow-xl bg-secondary-light dark:bg-secondary-dark sm:p-10"
        >
          <p className="mb-8 text-2xl font-general-medium text-primary-dark dark:text-primary-light">
            Contact Form
          </p>

          <FormInput
            inputLabel="Full Name"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="name"
            placeholderText="Your Name"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Subject"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Subject"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="mb-2 block text-lg text-primary-dark dark:text-primary-light"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 border-opacity-50 px-5 py-2 shadow-sm text-primary-dark bg-ternary-light text-md dark:border-primary-dark dark:text-secondary-light dark:bg-ternary-dark"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
            ></textarea>
          </div>

          <div className="mt-6">
            <span className="mt-6 rounded-lg bg-indigo-500 px-7 py-4 text-center font-medium tracking-wider text-white duration-500 font-general-medium hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900">
              <Button aria-label="Send Message" title={"Send Message"} />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
