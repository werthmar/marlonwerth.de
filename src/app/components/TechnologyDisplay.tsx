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
            className={`bg-accent rounded-xl p-8 shadow-custom hover:shadow-xl transition-all duration-300 border-2 ${borderColor} hover:${borderColor.replace('border-', 'border-').replace('-500', '-600')}`}
        >
            <div className="flex items-center mb-6">
                <div
                    className={`bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} p-3 rounded-xl mr-4 shadow-lg`}
                >
                    <span className="text-white text-2xl">{icon}</span>
                </div>
                <h2 className={`text-2xl font-bold ${titleColor}`}>{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
