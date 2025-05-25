import { ReactNode } from 'react';
import Image from 'next/image';

interface TagProps {
    text?: string;
    color?: string;
    borderColor?: string;
    icon?: ReactNode | string;
    variant?: 'default' | 'minimal' | 'professional';
}

export default function Tag({
    text,
    color,
    borderColor,
    icon,
    variant = 'default',
}: TagProps) {
    const baseStyles = {
        backgroundColor:
            variant === 'professional' ? `${borderColor}E6` : color,
        borderColor:
            variant === 'professional'
                ? borderColor || color
                : borderColor || 'white',
        color: variant === 'professional' ? '#374151' : borderColor || 'white',
    };

    const variantClasses = {
        default:
            'border-2 border-background shadow text-background border-solid rounded-full pt-2 pb-2 inline-flex items-center justify-center group text-lg font-bold',
        minimal:
            'py-0.5 rounded-lg shadow inline-flex items-center justify-center group text-lg font-bold',
        professional:
            'transition-all duration-200 shadow-md hover:shadow-lg rounded-xl px-4 py-3 inline-flex items-center justify-center group text-sm font-semibold w-full',
    };

    return (
        <div className={variantClasses[variant]} style={baseStyles}>
            {icon && typeof icon === 'string' ? (
                <Image
                    src={icon}
                    alt=""
                    className="mr-3"
                    width={18}
                    height={18}
                />
            ) : (
                icon && <span className="mr-3 text-lg">{icon}</span>
            )}
            {text}
        </div>
    );
}
