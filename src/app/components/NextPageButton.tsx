import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

interface NextPageButtonProps {
    link?: string;
    text?: string; // Optional text prop for localization
}

export default function NextPageButton({
    link,
    text = 'nextPageButtonText', // Default text key for localization
}: NextPageButtonProps) {
    const t = useTranslations('Global');
    return (
        <div className="m-4 flex items-center justify-center">
            <Link
                href={link || '/'}
                className="group flex items-center rounded-full border-2 border-solid border-foreground bg-background pb-2 pl-8 pr-8 pt-2 text-lg font-bold text-foreground shadow transition duration-300 hover:bg-foreground hover:text-background md:border-[0.2rem] md:text-2xl"
            >
                {t(text)}
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}
