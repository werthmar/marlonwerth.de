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
        <div className="flex justify-center items-center m-4">
            <Link
                href={link || '/'}
                className="bg-background text-foreground border-foreground border-2 md:border-[0.2rem] shadow border-solid rounded-full pl-8 pr-8 pt-2 pb-2 flex items-center group text-lg md:text-2xl font-bold transition duration-300 hover:bg-foreground hover:text-background"
            >
                {t(text)}
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}
