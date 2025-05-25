import LinkButton from './LinkButton';
import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    return (
        <>
            {/** About Me / Picture and Links */}
            <div className="flex flex-col justify-center items-center p-4 mt-12">
                <p className="mt-3 text-lg font-medium text-emphasis border-x-4 border-indigo-700 px-4 mb-8 mx-4">
                    {t('tagline')}
                </p>

                <div className="flex flex-row justify-center items-center gap-8 mb-4">
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
                className="flex justify-center align-items-center text-center underline text-lg mb-4"
                href="/impressum"
            >
                {t('imprint')}
            </Link>
        </>
    );
}
