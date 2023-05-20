import React from "react";

const selectOptions = [
    'Web Application',
    'Mobile Application',
    'UI/UX Design',
    'Branding',
];

interface ProjectsFilterProps {
    setSelectProject: (value: string) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({setSelectProject}) => {
    return (
        <select
            onChange={(e) => {
                setSelectProject(e.target.value);
            }}
            className="
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
        >
            <option value="" className={"text-sm sm:text-md"}>
                All Projects
            </option>

            {selectOptions.map((option) => (
                <option className={"text-normal sm:text-md"} key={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default ProjectsFilter;
