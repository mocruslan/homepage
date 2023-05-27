import React from "react";

export default function FooterCopyright(): React.JSX.Element {
    return (
        <div className="flex items-center justify-center text-center font-general-regular">
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
                &copy; {new Date().getFullYear()}
                <a
                    href="https://github.com/mocruslan/homepage"
                    target="__blank"
                    className="ml-1 duration-500 hover:text-indigo-600 hover:underline dark:hover:text-indigo-300"
                >
                    Next.js & Tailwind CSS Portfolio
                </a>
                .{' '}
                <a
                    href="https://stoman.me"
                    target="__blank"
                    className="ml-1 font-medium uppercase duration-500 text-secondary-dark hover:text-indigo-600 hover:underline dark:text-secondary-light dark:hover:text-indigo-300"
                >
                    Ruslan
                </a>
            </div>
        </div>
    );
}