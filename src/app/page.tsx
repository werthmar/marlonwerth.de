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
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

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
                    Hi, I'm Marlon
                </h1>

                <p className="text-center text-xl max-w-xl mb-8 font-bold">
                    I’m a full-stack web developer who loves building
                    user-focused solutions with modern tech, blending research
                    insights with creativity in XR and 3D art.
                </p>
            </div>

            {/** Featured Projects */}
            <div className="flex flex-col justify-center items-center p-4 gap-8">
                <h1 className="text-3xl font-bold text-accentColor">
                    Featured Projects
                </h1>
                <FeaturedProject
                    title="AI Heating App Backend"
                    imageSrc="/images/heatingApp.png"
                    description={[
                        'Developed a Nest.js backend to manage communication with multiple databases, a client application, and handle authentication and account management.',
                        'Configured Kubernetes on a virtual private server, containerizing all applications and databases using Docker for efficient deployment and scaling.',
                        'Established a CI/CD pipeline with GitLab to automate deployment and management of the application from repository to VPS and client delivery.',
                        'Integrated with external partner devices, enabling control and communication through the backend server using Azure IoT Hub.',
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
                    title="VR Reading Tandem"
                    imageSrc="/images/readingTandemMain.png"
                    imageSrc2="/images/readingTandemCropped.png"
                    description={[
                        'Developed...',
                        'integrated Ai speech recognition...',
                        'Published research paper...',
                    ]}
                    tags={[
                        <Tag
                            text="Unity"
                            key="unity"
                            color="#000000"
                            icon={<SiUnity />}
                        />,
                    ]}
                />
            </div>

            {/** About Me / Picture and Links */}
            <div className="flex flex-col justify-center items-center p-4">
                <p className="mt-3 text-lg font-medium text-emphasis border-x-4 border-indigo-700 px-4 mt-8 mb-8 mx-4">
                    Building user-friendly web solutions with research,
                    creativity and code.
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

            {/* <div className="flex flex-col lg:flex-row justify-center items-center p-4 h-[1400px] lg:h-[700px] lg:mx-auto lg:max-w-4xl">
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
                         {t('text3')}
                        I’m passionate about crafting seamless web experiences
                        using modern tech stacks, informed by my background in
                        tech and research. When I’m not coding, you’ll find me
                        exploring XR development or creating 3D art.
                    </p>
                    <br />
                    <br />
                    <p className="text-center lg:text-left text-lg max-w-prose">
                         {t('text4')} 
                        Ready to see my work? Check out my portfolio to explore
                        projects built with modern tech stacks or drop me a
                        message to collaborate on your next big idea!
                    </p>
                </div>
            </div> */}

            <h2 className="text-lg font-bold text-center text-emphasis mb-8 mt-8">
                Have I sparked your curiosity?
            </h2>

            <NextPageButton
                link="/portfolio"
                text="nextPageButtonText-Portfolio"
            />

            <Link
                className="flex justify-center align-items-center text-center underline text-lg my-12"
                href="/impressum"
            >
                Impressum
            </Link>
            <ScrollDownButton />
        </>
    );
}
