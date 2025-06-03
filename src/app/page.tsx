// Localization
import { useTranslations } from 'next-intl';

// Components
import NextPageButton from './components/NextPageButton';
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
            <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center p-4">
                {/* Profile Picture */}
                <div
                    className="marlonImage mb-6 flex h-48 w-48 justify-center rounded-full border-foreground bg-accent md:h-60 md:w-60 lg:justify-end"
                    style={{
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transform: 'rotate(2deg)', // Rotate the picture by 15 degrees
                    }}
                />

                <h1 className="mb-8 text-center text-5xl font-bold">
                    {t('hi-text')}
                </h1>

                <p className="mb-8 max-w-xl text-center text-xl font-bold">
                    {t('personal-description')}
                </p>
            </div>

            {/** Featured Projects */}
            <div className="flex flex-col items-center justify-center gap-8 p-4">
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
                        t('Featured_Project1_desc5'),
                    ]}
                    links={[
                        {
                            url: 'https://www.secai-energy.de/',
                            label: 'SECAI',
                            icon: '/images/secai_icon.webp',
                        },
                        {
                            url: 'https://www.bmwk.de/Redaktion/DE/Schlaglichter-der-Wirtschaftspolitik/2023/06/09-neues-technologieprogramm-edge-datenwirtschaft.html',
                            label: 'BMWE',
                        },
                    ]}
                    tags={[
                        <Tag
                            key="nestjs"
                            text="Nest.js"
                            icon={<SiNestjs />}
                            color="#dd3f58"
                            variant="minimal"
                        />,
                        <Tag
                            text="Docker"
                            key="docker"
                            icon={<SiDocker />}
                            color="#4888eb"
                            variant="minimal"
                        />,
                        <Tag
                            text="K8s"
                            key="kubernetes"
                            icon={<SiKubernetes />}
                            color="#538de3"
                            variant="minimal"
                        />,
                        <Tag
                            text="PostgreSQL"
                            key="postgresql"
                            icon={<SiPostgresql />}
                            color="#3d648f"
                            variant="minimal"
                        />,
                        <Tag
                            text="InfluxDB"
                            key="influxdb"
                            icon={<SiInfluxdb />}
                            color="#5e00a9"
                            variant="minimal"
                        />,
                        <Tag
                            text="IoT-Hub"
                            key="iothub"
                            icon={<VscAzure />}
                            color="#759d22"
                            variant="minimal"
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
                            variant="minimal"
                        />,
                        <Tag
                            text="Blender"
                            key="blender"
                            color="#f4792b"
                            icon={<SiBlender />}
                            variant="minimal"
                        />,
                        <Tag
                            text="Python"
                            key="python"
                            color="#3776AB"
                            icon={<FaPython />}
                            variant="minimal"
                        />,
                        <Tag
                            text="GCloud"
                            key="googlecloud"
                            color="#4285F4"
                            icon={<SiGooglecloud />}
                            variant="minimal"
                        />,
                        <Tag
                            text="MetaQuest"
                            key="metaquest"
                            color="#4267B2"
                            icon={<BsHeadsetVr />}
                            variant="minimal"
                        />,
                    ]}
                />
            </div>

            <h2 className="mt-12 text-center text-lg font-bold text-emphasis">
                {t('curious')}
            </h2>

            <NextPageButton
                link="/portfolio"
                text="nextPageButtonText-Portfolio"
            />
        </>
    );
}
