import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

interface NextPageButtonProps {
    link?: string;
}

export default function NextPageButton({ link }: NextPageButtonProps) {
    const t = useTranslations('Global');
    return (
        <div className="flex justify-center items-center m-12">
            <Link href={link || '/'} className="bg-background text-foreground border-foreground border-2 shadow border-solid rounded-full pl-8 pr-8 pt-2 pb-2 flex items-center group text-lg font-bold transition duration-300 hover:bg-foreground hover:text-background">
                    {t('nextPageButtonText')}
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}