import React from 'react';
import Tag from './Tag';

interface TechnologyItem {
    text: string;
    color: string;
    icon: React.ReactNode | string;
    borderColor?: string;
}

interface TechnologyDisplayProps {
    title: string;
    icon: React.ReactNode;
    borderColor: string;
    titleColor: string;
    iconGradientFrom: string;
    iconGradientTo: string;
    technologies: TechnologyItem[];
}

export default function TechnologyDisplay({
    title,
    icon,
    borderColor,
    titleColor,
    iconGradientFrom,
    iconGradientTo,
    technologies,
}: TechnologyDisplayProps) {
    return (
        <div
            className={`rounded-xl border-2 bg-accent p-8 shadow-custom transition-all duration-300 hover:shadow-xl ${borderColor} hover:${borderColor.replace('border-', 'border-').replace('-500', '-600')}`}
        >
            <div className="mb-6 flex items-center">
                <div
                    className={`bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} mr-4 rounded-xl p-3 shadow-lg`}
                >
                    <span className="text-2xl text-white">{icon}</span>
                </div>
                <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {technologies.map((tech, index) => (
                    <Tag
                        key={index}
                        text={tech.text}
                        color={tech.color}
                        borderColor={tech.borderColor}
                        icon={tech.icon}
                        variant="professional"
                    />
                ))}
            </div>
        </div>
    );
}
