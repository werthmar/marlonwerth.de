import SocialLinks from './SocialLinks';
import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
            <div className="mt-12 flex flex-col items-center justify-center p-4">
                <p className="mx-4 mb-8 mt-3 border-x-4 border-indigo-700 px-4 text-lg font-medium text-emphasis">
                    {t('tagline')}
                </p>

                <SocialLinks />
            </div>

            <Link
                className="align-items-center mb-4 flex justify-center text-center text-lg underline"
                href="/impressum"
            >
                {t('imprint')}
            </Link>
        </>
    );
}
