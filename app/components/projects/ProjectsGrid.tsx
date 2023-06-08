"use client"

import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import ProjectEntry from './ProjectEntry';
import {Project, projectsData} from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

export default function ProjectsGrid(): React.JSX.Element {
    const [, setSearchProject] = useState<string>();
    const [selectProject, setSelectProject] = useState<string>();

    const selectProjectsByCategory: Project[] = projectsData.filter((item: Project) => {
        let category: string = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject || '');
    });

    return (
        <section className={"py-5 sm:py-10 mt-5 sm:mt-10"}>
            <div className={"text-center"}>
                <p className={"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light"}>
                    Projects portfolio
                </p>
            </div>

            <div className={"mt-10 sm:mt-16"}>
                <h3
                    className="
                        font-general-regular
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
                >
                    Search projects by title or filter by category
                </h3>
                <div
                    className={"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3"}
                >
                    <div className="flex justify-between gap-2">
						<span
                            className={"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"}
                        >
							<FiSearch className={"text-ternary-dark dark:text-ternary-light w-5 h-5"}></FiSearch>
						</span>
                        <input
                            onChange={(e) => {
                                setSearchProject(e.target.value);
                            }}
                            className="
                                ont-general-medium
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border
                                border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
                            id="name"
                            name="name"
                            type="search"
                            required={false}
                            placeholder="Search Projects"
                            aria-label="Name"
                        />
                    </div>

                    <ProjectsFilter setSelectProject={setSelectProject}/>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {
                    selectProject
                        ? selectProjectsByCategory.map((project: Project, index: number) => {
                            return <ProjectEntry key={index} project={project}/>;
                        })
                        : projectsData.map((project: Project, index: number) => (
                            <ProjectEntry key={index} project={project}/>
                        ))
                }
            </div>
        </section>
    );
}
