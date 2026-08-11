import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import Tag from './Tag';
import {
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from './ui/accordion';

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
    value: string | number;
}

export default function TechnologyDisplay({
    title,
    icon,
    borderColor,
    titleColor,
    iconGradientFrom,
    iconGradientTo,
    technologies,
    value,
}: TechnologyDisplayProps) {
    return (
        <AccordionItem
            value={value}
            className={`rounded-xl border-2 bg-accent p-8 shadow-custom transition-all duration-300 hover:shadow-xl ${borderColor}`}
        >
            <AccordionTrigger>
                <div className="flex items-center">
                    <div
                        className={`bg-gradient-to-br ${iconGradientFrom} ${iconGradientTo} mr-4 rounded-xl p-3 shadow-lg`}
                    >
                        <span className="text-2xl text-white">{icon}</span>
                    </div>
                    <h2 className={`text-2xl font-bold ${titleColor}`}>
                        {title}
                    </h2>
                </div>
                <ChevronDownIcon
                    className={`size-6 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-180 ${titleColor}`}
                />
            </AccordionTrigger>
            <AccordionContent>
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
            </AccordionContent>
        </AccordionItem>
    );
}
