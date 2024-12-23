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
        <div className="relative border-l border-gray-200">
            {items.map((item, index) => (
                <div key={index} className="mb-10 ml-6">
                
                    {/* Ring */}
                    <span className={`absolute flex items-center justify-center w-6 h-6 ${item.iconColor || 'bg-blue-100'} rounded-full -left-3 ring-8 ring-accent`} />
                        
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-foreground">
                        {/* Title */}
                        {item.title}
                        
                        {/* Tags */}
                        {item.tag && <span className={`${item.tagColor || 'bg-blue-100'} text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3`}>{item.tag}</span>}
                        {item.tag2 && <span className={`${item.tag2Color || 'bg-blue-100'} text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3`}>{item.tag2}</span>}
                    </h3>
                    
                    {/* Date */}
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">{item.date}</time>
                    
                    {/* Description */}
                    <p className="text-base font-normal text-gray-500">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;