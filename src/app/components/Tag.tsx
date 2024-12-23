import { ReactNode } from "react";

interface TagProps {
    text?: string;
    color?: string;
    borderColor?: string;
    icon?: ReactNode | string; // Allow icon to be either a ReactNode or a string (URL);
}

export default function Tag({ text, color, borderColor, icon }: TagProps) {
    const styles = {
        backgroundColor: color,
        borderColor: borderColor || 'white',
        color: borderColor || 'white'
    };

    return (
        <div
            className="border-2 border-background shadow text-background border-solid rounded-full pt-2 pb-2 inline-flex items-center justify-center group text-lg font-bold"
            style={styles}
        >
            {typeof icon === 'string' ? (
                <img src={icon} alt="" className="mr-2 w-6 h-6" /> // Render image if icon is a string (URL)
            ) : (
                icon && <span className="mr-2">{icon}</span> // Render ReactNode if icon is not a string
            )}
            {text}
        </div>
    );
}