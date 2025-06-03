import Link from 'next/link';
import Image from 'next/image';

interface LinkButtonProps {
    link?: string;
    text?: string;
    icon?: string;
    color?: string;
    textColor?: string;
    size?: number;
    showLinkSymbol?: boolean;
}

export default function LinkButton({
    link,
    text,
    icon,
    color,
    textColor,
    size = 25,
    showLinkSymbol = true,
}: LinkButtonProps) {
    return (
        <Link
            href={link || '/'}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-lg border-2 border-solid text-white shadow-lg ${
                text ? 'p-4' : 'p-0.5'
            } group inline-flex items-center justify-center text-lg font-bold`}
            style={{
                backgroundColor: color,
                color: textColor || 'white',
                borderColor: textColor || 'white',
            }}
        >
            {icon && <Image src={icon} alt="" width={size} height={size} />}
            {text && <p className="ml-2">{text}</p>}
            {showLinkSymbol && (
                <svg
                    className="ml-1 h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            )}
        </Link>
    );
}
