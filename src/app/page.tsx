'use client';

import Link from 'next/link';

// Localization
import { useTranslations } from 'next-intl';

// Components
import NextPageButton from './components/NextPageButton';
import ScrollDownButton from './components/ScrollDownButton';
import LinkButton from './components/LinkButton';
import FeaturedProject from './components/FeaturedProject';
import Tag from './components/Tag';

//Icons
import {
    SiNestjs,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiInfluxdb,
    SiUnity,
    SiBlender,
    SiGooglecloud,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { FaPython } from 'react-icons/fa';
import { BsHeadsetVr } from 'react-icons/bs';

export default function Home() {
    const t = useTranslations('HomePage');
    return (
        <>
            <div className="flex flex-col justify-center items-center min-h-[calc(100vh-5rem)] p-4">
                {/* Profile Picture */}
                <div
                    className="w-48 h-48 md:w-60 md:h-60 mb-6 rounded-full bg-accent border-foreground flex justify-center lg:justify-end marlonImage"
                    style={{
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transform: 'rotate(2deg)', // Rotate the picture by 15 degrees
                    }}
                />

                <h1 className="text-5xl text-center font-bold mb-8">
                    {t('hi-text')}
                </h1>

                <p className="text-center text-xl max-w-xl mb-8 font-bold">
                    {t('personal-description')}
                </p>
            </div>

            {/** Featured Projects */}
            <div className="flex flex-col justify-center items-center p-4 gap-8">
                <h1 className="text-3xl font-bold text-accentColor">
                    {t('Featured_Projects')}
                </h1>
                <FeaturedProject
                    title={t('Featured_Project1_title')}
                    imageSrc="/images/heatingApp.png"
                    description={[
                        t('Featured_Project1_desc1'),
                        t('Featured_Project1_desc2'),
                        t('Featured_Project1_desc3'),
                        t('Featured_Project1_desc4'),
                    ]}
                    tags={[
                        <Tag
                            key="nestjs"
                            text="Nest.js"
                            icon={<SiNestjs />}
                            color="#dd3f58"
                        />,
                        <Tag
                            text="Docker"
                            key="docker"
                            icon={<SiDocker />}
                            color="#4888eb"
                        />,
                        <Tag
                            text="K8s"
                            key="kubernetes"
                            icon={<SiKubernetes />}
                            color="#538de3"
                        />,
                        <Tag
                            text="PostgreSQL"
                            key="postgresql"
                            icon={<SiPostgresql />}
                            color="#3d648f"
                        />,
                        <Tag
                            text="InfluxDB"
                            key="influxdb"
                            icon={<SiInfluxdb />}
                            color="#5e00a9"
                        />,
                        <Tag
                            text="IoT-Hub"
                            key="iothub"
                            icon={<VscAzure />}
                            color="#759d22"
                        />,
                    ]}
                />

                <FeaturedProject
                    title={t('Featured_Project2_title')}
                    imageSrc="/images/readingTandemMain.png"
                    imageSrc2="/images/readingTandemCropped.png"
                    description={[
                        t('Featured_Project2_desc1'),
                        t('Featured_Project2_desc2'),
                        t('Featured_Project2_desc3'),
                        t('Featured_Project2_desc4'),
                        t('Featured_Project2_desc5'),
                        t('Featured_Project2_desc6'),
                    ]}
                    tags={[
                        <Tag
                            text="Unity"
                            key="unity"
                            color="#000000"
                            icon={<SiUnity />}
                        />,
                        <Tag
                            text="Blender"
                            key="blender"
                            color="#f4792b"
                            icon={<SiBlender />}
                        />,
                        <Tag
                            text="Python"
                            key="python"
                            color="#3776AB"
                            icon={<FaPython />}
                        />,
                        <Tag
                            text="GCloud"
                            key="googlecloud"
                            color="#4285F4"
                            icon={<SiGooglecloud />}
                        />,
                        <Tag
                            text="MetaQuest"
                            key="metaquest"
                            color="#4267B2"
                            icon={<BsHeadsetVr />}
                        />,
                    ]}
                />
            </div>

            {/** About Me / Picture and Links */}
            <div className="flex flex-col justify-center items-center p-4">
                <p className="mt-3 text-lg font-medium text-emphasis border-x-4 border-indigo-700 px-4 mt-8 mb-8 mx-4">
                    {t('tagline')}
                </p>

                <div className="flex flex-row justify-center items-center gap-8 mb-8">
                    <LinkButton
                        size={60}
                        icon="/images/LinkedInFilled.png"
                        textColor="white"
                        color="#2b71b1"
                        link="https://www.linkedin.com/in/marlon-werth"
                    />
                    <LinkButton
                        size={60}
                        icon="/images/githubBlack.png"
                        textColor="white"
                        color="black"
                        link="https://github.com/werthmar"
                    />
                    <LinkButton
                        size={60}
                        icon="/images/orcid.png"
                        textColor="white"
                        color="#abcf4a"
                        link="https://orcid.org/0009-0000-9027-6059"
                    />
                </div>
            </div>

            <h2 className="text-lg font-bold text-center text-emphasis mt-12">
                {t('curious')}
            </h2>

            <NextPageButton
                link="/portfolio"
                text="nextPageButtonText-Portfolio"
            />

            <Link
                className="flex justify-center align-items-center text-center underline text-lg mt-24 mb-4"
                href="/impressum"
            >
                Impressum
            </Link>
            <ScrollDownButton />
        </>
    );
}
