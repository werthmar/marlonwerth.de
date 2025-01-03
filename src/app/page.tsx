"use client";

import Link from 'next/link';

// Localization
import {useTranslations} from 'next-intl';

// Components
import NextPageButton from './components/NextPageButton';
import ScrollDownButton from "./components/ScrollDownButton";

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
           <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] p-4">
                <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
                <p className="text-center text-lg max-w-prose">{t('text1')}</p>
                <br/>
                <p className="text-center text-lg max-w-prose">{t('text2')}</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center p-4 h-[1400px] lg:h-[700px] lg:mx-auto lg:max-w-4xl">
                
                <div className="flex justify-center lg:justify-end p-4 marlonImage" style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: '100%' }}>
                    </div>
                
                <div className="lg:w-auto flex flex-col justify-center items-center lg:items-start p-4">
                    <p className="text-center lg:text-left text-lg max-w-prose">{t('text3')}</p>
                    <br/>
                    <p className="text-center lg:text-left text-lg max-w-prose">{t('text4')}</p>
                </div>
            </div>

            <NextPageButton link='/portfolio' />

            <Link className='flex justify-center align-items-center text-center underline text-lg mb-12' href="/impressum">Impressum</Link>
            <ScrollDownButton />
        </>
    );
}
