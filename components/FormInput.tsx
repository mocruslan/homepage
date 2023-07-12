import React from "react";

interface FormInputProps {
  inputLabel: string;
  labelFor: string;
  inputType: string;
  inputId: string;
  inputName: string;
  placeholderText: string;
  ariaLabelName: string;
}

export default function FormInput(props: FormInputProps): React.JSX.Element {
  return (
    <div className="mb-4 font-general-regular">
      <label
        className="mb-1 block text-lg text-primary-dark dark:text-primary-light"
        htmlFor={props.labelFor}
      >
        {props.inputLabel}
      </label>
      <input
        className="w-full rounded-md border border-gray-300 border-opacity-50 px-5 py-2 shadow-sm text-primary-dark bg-ternary-light text-md dark:border-primary-dark dark:text-secondary-light dark:bg-ternary-dark"
        type={props.inputType}
        id={props.inputId}
        name={props.inputName}
        placeholder={props.placeholderText}
        aria-label={props.ariaLabelName}
        required
      />
    </div>
  );
}
