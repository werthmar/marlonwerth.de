import Link from 'next/link';
import Image from 'next/image';

interface LinkButtonProps {
    link?: string;
    text?: string;
    icon?: string;
    color?: string;
    textColor?: string;
    size?: number;
}

export default function LinkButton({
    link,
    text,
    icon,
    color,
    textColor,
    size = 25,
}: LinkButtonProps) {
    return (
        <Link
            href={link || '/'}
            className={`border-2 shadow-lg text-white border-solid rounded-lg ${
                text ? 'p-4' : 'p-0.5'
            } inline-flex items-center justify-center group text-lg font-bold`}
            style={{
                backgroundColor: color,
                color: textColor || 'white',
                borderColor: textColor || 'white',
            }}
        >
            {icon && <Image src={icon} alt="" width={size} height={size} />}
            {text && <p className="ml-2">{text}</p>}
        </Link>
    );
}
