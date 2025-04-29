'use client';

import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

// Components
import NextPageButton from './components/NextPageButton';
import ScrollDownButton from './components/ScrollDownButton';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] p-4">
                {/*
                <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
                <p className="text-center text-lg max-w-prose">{t('text1')}</p>
                <br />
                <p className="text-center text-lg max-w-prose">
                Building user-friendly web solutions with creativity and
                code.
                </p>
                <br />
                <p className="text-center text-lg max-w-prose">{t('text2')}</p>
                */}

                <h1 className="text-5xl font-bold mb-16">Hi, I'm Marlon</h1>

                <p className="text-center text-xl max-w-[40rem] mb-8 text-indigo-700 font-bold">
                    I’m a full-stack web developer who loves building
                    user-focused solutions with modern tech, blending research
                    insights with creativity in XR and 3D art.
                </p>

                <p className="mt-3 text-lg font-medium text-gray-700 border-x-4 border-indigo-700 px-4">
                    Building user-friendly web solutions with research,
                    creativity and code.
                </p>

                <p>GitHub, LinkedIn, Orcid links (with icons)</p>
            </div>

            {/** Featured Projects */}
            <div className="flex flex-col justify-center items-center p-4">
                featured projects with new component (SECAI, VR-Reading-Tandem,
                Circularity-Navigator)
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center p-4 h-[1400px] lg:h-[700px] lg:mx-auto lg:max-w-4xl">
                <div
                    className="flex justify-center lg:justify-end p-4 marlonImage"
                    style={{
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                    }}
                ></div>

                <div className="lg:w-auto flex flex-col justify-center items-center lg:items-start p-4 pt-8">
                    <p className="text-center lg:text-left text-lg max-w-prose">
                        {/* {t('text3')} */}
                        I’m passionate about crafting seamless web experiences
                        using modern tech stacks, informed by my background in
                        tech and research. When I’m not coding, you’ll find me
                        exploring XR development or creating 3D art.
                    </p>
                    <br />
                    <br />
                    <p className="text-center lg:text-left text-lg max-w-prose">
                        {/* {t('text4')} */}
                        Ready to see my work? Check out my portfolio to explore
                        projects built with modern tech stacks or drop me a
                        message to collaborate on your next big idea!
                    </p>
                </div>
            </div>

            <NextPageButton
                link="/portfolio"
                text="nextPageButtonText-Portfolio"
            />

            <Link
                className="flex justify-center align-items-center text-center underline text-lg mb-12"
                href="/impressum"
            >
                Impressum
            </Link>
            <ScrollDownButton />
        </>
    );
}
