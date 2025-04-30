import React from 'react';
import Image from 'next/image';

interface FeaturedProjectProps {
    title: string;
    imageSrc: string;
    imageSrc2?: string;
    description: string[];
    tags: React.ReactNode[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
    title,
    imageSrc,
    imageSrc2,
    description,
    tags,
}) => {
    return (
        <div className="flex flex-col bg-accent sm:flex-row justify-center gap-6 shadow-lg p-4 rounded-2xl w-full max-w-3xl text-black">
            <div className="flex flex-row items-center justify-center sm:flex-col sm:w-2/5 gap-4">
                {/* Left Side */}
                <Image
                    width={200}
                    height={200}
                    src={imageSrc}
                    alt={title}
                    className="w-1/3 sm:w-full h-full object-contain self-center rounded-lg"
                />
                {imageSrc2 && (
                    <Image
                        width={200}
                        height={200}
                        src={imageSrc2}
                        alt={title}
                        className="w-1/3 sm:w-full h-full object-contain self-center rounded-lg"
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

                {/* Tags */}
                <div className="mt-4 w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
                    {tags.map((tag) => tag)}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
