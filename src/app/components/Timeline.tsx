import React from 'react';

interface TimelineItemProps {
    title: string;
    date: string;
    description: string;
    tag?: string;
    tagColor?: string;
    tag2?: string;
    tag2Color?: string;
    iconColor?: string;
}

interface TimelineProps {
    items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative border-l border-gray-400">
            {items.map((item, index) => (
                <div key={index} className="mb-10 ml-6">
                    {/* Ring */}
                    <span
                        className={`absolute flex h-6 w-6 items-center justify-center ${item.iconColor || 'bg-blue-100'} -left-3 rounded-full ring-8 ring-accent`}
                    />

                    <h3 className="mb-1 flex items-center text-lg font-semibold text-foreground">
                        {/* Title */}
                        {item.title}

                        {/* Tags */}
                        {item.tag && (
                            <span
                                className={`${item.tagColor || 'bg-blue-100'} ml-3 mr-2 rounded px-2.5 py-0.5 text-sm font-medium text-black`}
                            >
                                {item.tag}
                            </span>
                        )}
                        {item.tag2 && (
                            <span
                                className={`${item.tag2Color || 'bg-blue-100'} ml-3 mr-2 rounded px-2.5 py-0.5 text-sm font-medium text-black`}
                            >
                                {item.tag2}
                            </span>
                        )}
                    </h3>

                    {/* Date */}
                    <time className="mb-2 block text-sm font-normal leading-none text-gray-400">
                        {item.date}
                    </time>

                    {/* Description */}
                    <p className="text-base font-normal text-gray-500">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
