import Link from 'next/link';
import Image from 'next/image';

interface LinkButtonProps {
    link?: string;
    text?: string;
    icon?: string;
    color?: string;
    textColor?: string;
}

export default function LinkButton({
    link,
    text,
    icon,
    color,
    textColor,
}: LinkButtonProps) {
    return (
        <Link
            href={link || '/'}
            className="border-2 shadow-lg text-white border-solid rounded-lg p-4 inline-flex items-center justify-center group text-lg font-bold"
            style={{
                backgroundColor: color,
                color: textColor || 'white',
                borderColor: textColor || 'white',
            }}
        >
            {icon && (
                <Image
                    src={icon}
                    alt=""
                    className="mr-2"
                    width={25}
                    height={25}
                />
            )}
            {text}
        </Link>
    );
}
