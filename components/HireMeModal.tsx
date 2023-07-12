import { FiX } from "react-icons/fi";
import Button from "./Button";
import React from "react";
import PopupTransition from "@/components/animation/PopupTransition";

const selectOptions = [
  "Web Application",
  "Mobile Application",
  "UI/UX Design",
  "Branding",
];

interface HireMeModalProps {
    onClose: () => void;
    onRequest: () => void;
}

export default function HireMeModal({onClose, onRequest}: HireMeModalProps) {
    return (
        <PopupTransition>
            <div className="fixed inset-0 z-30 transition-all duration-500 font-general-medium">
                <div className="fixed inset-0 z-20 h-full w-full bg-black bg-opacity-50 bg-filter"></div>

                <main className="flex h-full w-full flex-col items-center justify-center">
                    <div className="z-30 flex items-center modal-wrapper">
                        <div
                            className="relative mx-5 max-h-screen max-w-md flex-row rounded-lg shadow-lg modal bg-secondary-light dark:bg-primary-dark md:max-w-xl lg:max-w-xl xl:max-w-xl">
                            <div
                                className="flex justify-between gap-10 border-b p-5 modal-header border-ternary-light dark:border-ternary-dark">
                                <h5 className="text-xl text-primary-dark dark:text-primary-light">
                                    What project are you looking for?
                                </h5>
                                <button
                                    onClick={onClose}
                                    className="px-4 font-bold text-primary-dark dark:text-primary-light"
                                >
                                    <FiX className="text-3xl"/>
                                </button>
                            </div>
                            <div className="h-full w-full p-5 modal-body">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                    className="m-4 max-w-xl text-left"
                                >
                                    <div className="">
                                        <input
                                            className="w-full rounded-md border px-5 py-2 text-md bg-secondary-light text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light"
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Name"
                                            aria-label="Name"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <input
                                            className="w-full rounded-md border px-5 py-2 text-md bg-secondary-light text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light"
                                            id="email"
                                            name="email"
                                            type="text"
                                            required
                                            placeholder="Email"
                                            aria-label="Email"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <select
                                            className="w-full rounded-md border px-5 py-2 text-md bg-secondary-light text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light"
                                            id="subject"
                                            name="subject"
                                            // type="text"
                                            required
                                            aria-label="Project Category"
                                        >
                                            {selectOptions.map((option) => (
                                                <option
                                                    className="text-normal sm:text-md"
                                                    key={option}
                                                >
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mt-6">
									<textarea
                                        className="w-full rounded-md border px-5 py-2 text-md bg-secondary-light text-primary-dark dark:border-secondary-dark dark:bg-ternary-dark dark:text-ternary-light"
                                        id={"message"}
                                        name={"message"}
                                        cols={14}
                                        rows={6}
                                        aria-label={"Details"}
                                        placeholder={"Project description"}
                                    ></textarea>
                                    </div>

                                    <div className="mt-6 pb-4 sm:pb-1">
									<span
                                        className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                                        aria-label="Submit Request"
                                    >
										<Button title="Send Request" type={"submit"} onClickAction={onRequest}/>
									</span>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-2 px-8 py-5 text-right modal-footer border0-t sm:mt-0">
							<span
                                className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                                aria-label="Close Modal"
                            >
								<Button title="Close" type={"button"} onClickAction={onClose}/>
							</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PopupTransition>
    );
}
