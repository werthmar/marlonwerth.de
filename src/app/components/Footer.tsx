import LinkButton from './LinkButton';
import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
            {/** About Me / Picture and Links */}
            <div className="mt-12 flex flex-col items-center justify-center p-4">
                <p className="mx-4 mb-8 mt-3 border-x-4 border-indigo-700 px-4 text-lg font-medium text-emphasis">
                    {t('tagline')}
                </p>

                <div className="mb-4 flex flex-row items-center justify-center gap-8">
                    <LinkButton
                        size={60}
                        icon="/images/LinkedInFilled.png"
                        textColor="white"
                        color="#2b71b1"
                        showLinkSymbol={false}
                        link="https://www.linkedin.com/in/marlon-werth"
                    />
                    <LinkButton
                        size={60}
                        icon="/images/githubBlack.png"
                        textColor="white"
                        color="black"
                        showLinkSymbol={false}
                        link="https://github.com/werthmar"
                    />
                    <LinkButton
                        size={60}
                        icon="/images/orcid.png"
                        textColor="white"
                        color="#abcf4a"
                        showLinkSymbol={false}
                        link="https://orcid.org/0009-0000-9027-6059"
                    />
                </div>
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
