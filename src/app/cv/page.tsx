import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LinkButton from '../components/LinkButton';

export default function CV() {
    const t = useTranslations('cv');
    return (
        <>
            <div className="max-w-prose mx-auto p-4 mt-12">
                <div className="flex justify-center mb-8">
                    <LinkButton
                        link="https://www.linkedin.com/in/marlon-werth"
                        text="LinkedIn"
                        icon="/images/LinkedIn.png"
                        color="white"
                        textColor="#0077B5"
                    />
                </div>
                <h1 className="text-3xl text-center font-bold mb-10">
                    {t('cv')}
                </h1>
                <p className="text-lg">
                    <span className="font-semibold">{t('name')}</span> Marlon
                    Werth
                </p>
                <p className="text-lg mb-8">
                    <span className="font-semibold">{t('birthdate')}:</span>{' '}
                    03.08.1999
                </p>
                <h2 className="text-2xl font-semibold mt-4 mb-2">
                    {t('work')}
                </h2>
                <ul className="list-disc list-inside ml-4 mb-8">
                    <li>{t('dfki')}</li>
                    <li>2018-2021: Nolte Küchen GmbH & Co. KG</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-4 mb-2">
                    {t('studies')}
                </h2>
                <ul className="list-disc list-inside ml-4 mb-8">
                    <li>2023: {t('uva')}</li>
                    <li>2021-2024: {t('uos')}</li>
                    <li>2018-2021: {t('dhbw')}</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-4 mb-2">
                    {t('internships')}
                </h2>
                <ul className="list-disc list-inside ml-4 mb-8">
                    <li>2017: Nolte Küchen GmbH & Co. KG</li>
                    <li>2016: Advice IT</li>
                    <li>2015: {t('retirement-home')} Ravensberger Residenz</li>
                </ul>
                <h2 className="text-2xl font-semibold mt-4 mb-2">
                    {t('schools')}
                </h2>
                <ul className="list-disc list-inside ml-4 mb-20">
                    <li>2010-2018: Freiherr vom Stein Gymnasium Bünde</li>
                    <li>2006-2010: Grundschule Ennigloh</li>
                </ul>
            </div>

            <Link
                className="flex justify-center align-items-center text-center underline text-lg mb-12"
                href="/impressum"
            >
                Impressum
            </Link>
        </>
    );
}
