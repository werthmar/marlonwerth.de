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
        <div className="flex flex-col bg-accent sm:flex-row justify-center gap-6 shadow-custom p-4 rounded-2xl w-full max-w-3xl text-black">
            <div className="flex flex-row items-center justify-center sm:flex-col sm:w-2/5 gap-4">
                {/* Left Side */}
                <Image
                    width={200}
                    height={200}
                    src={imageSrc}
                    alt={title}
                    className="w-auto h-200 sm:w-full sm:h-auto object-contain self-center rounded-3xl shadow-lg"
                />
                {imageSrc2 && (
                    <Image
                        width={200}
                        height={200}
                        src={imageSrc2}
                        alt={title}
                        className="hidden sm:block w-1/3 sm:w-full h-auto object-contain self-center rounded-3xl shadow-lg"
                    />
                )}
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-start w-full">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl mb-4 sm:self-start self-center">
                    {title}
                </h2>
                <ul className="space-y-4 pl-0 list-none">
                    {description.map((point, index) => (
                        <li
                            key={index}
                            className="flex items-start text-emphasis text-base font-normal leading-relaxed transition-colors duration-200 hover:text-gray-900"
                        >
                            <span className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-indigo-600">
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
                    <div className="mt-4 mb-2 flex flex-wrap gap-3">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 bg-transparent text-accentColor rounded-md hover:bg-gray-200 transition-colors duration-200"
                            >
                                {link.icon && (
                                    <span className="mr-1.5">
                                        <Image
                                            src={link.icon}
                                            alt=""
                                            width={20}
                                            height={20}
                                            className="w-5 h-5 object-contain"
                                        />
                                    </span>
                                )}
                                {link.label}
                                <svg
                                    className="ml-1 w-3.5 h-3.5"
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
                <div className="mt-4 w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
                    {tags.map((tag) => tag)}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
