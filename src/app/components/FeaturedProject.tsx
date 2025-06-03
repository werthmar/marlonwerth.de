import React from 'react';
import Image from 'next/image';

interface FeaturedProjectProps {
    title: string;
    imageSrc: string;
    imageSrc2?: string;
    description: string[];
    tags: React.ReactNode[];
    links?: Array<{
        url: string;
        label: string;
        icon?: string;
    }>;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
    title,
    imageSrc,
    imageSrc2,
    description,
    tags,
    links = [],
}) => {
    return (
        <div className="flex w-full max-w-3xl flex-col justify-center gap-6 rounded-2xl bg-accent p-4 text-black shadow-custom sm:flex-row">
            <div className="flex flex-row items-center justify-center gap-4 sm:w-2/5 sm:flex-col">
                {/* Left Side */}
                <Image
                    width={200}
                    height={200}
                    src={imageSrc}
                    alt={title}
                    className="h-200 w-auto self-center rounded-3xl object-contain shadow-lg sm:h-auto sm:w-full"
                />
                {imageSrc2 && (
                    <Image
                        width={200}
                        height={200}
                        src={imageSrc2}
                        alt={title}
                        className="hidden h-auto w-1/3 self-center rounded-3xl object-contain shadow-lg sm:block sm:w-full"
                    />
                )}
            </div>

            {/* Right Side */}
            <div className="flex w-full flex-col items-start">
                <h2 className="mb-4 self-center text-2xl font-semibold tracking-tight text-foreground sm:self-start sm:text-3xl">
                    {title}
                </h2>
                <ul className="list-none space-y-4 pl-0">
                    {description.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start text-base font-normal leading-relaxed text-emphasis transition-colors duration-200 hover:text-gray-900"
                        >
                            <span className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-indigo-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>

                {/* Project Links */}
                {links.length > 0 && (
                    <div className="mb-2 mt-4 flex flex-wrap gap-3">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md bg-transparent px-3 py-1.5 text-accentColor transition-colors duration-200 hover:bg-gray-200"
                            >
                                {link.icon && (
                                    <span className="mr-1.5">
                                        <Image
                                            src={link.icon}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="h-5 w-5 object-contain"
                                        />
                                    </span>
                                )}
                                {link.label}
                                <svg
                                    className="ml-1 h-3.5 w-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        ))}
                    </div>
                )}

                {/* Tags */}
                <div className="mt-4 grid w-full grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3">
                    {tags.map((tag) => tag)}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
