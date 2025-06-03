import React from 'react';
import { useTranslations } from 'next-intl';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaWindows,
    FaApple,
    FaLinux,
    FaServer,
    FaDatabase,
    FaCode,
    FaCogs,
    FaDesktop,
    FaTools,
    FaDocker,
    FaCube,
    FaBrain,
    FaVrCardboard,
} from 'react-icons/fa';
import {
    SiUnity,
    SiFlutter,
    SiMysql,
    SiMongodb,
    SiNeo4J,
    SiKubernetes,
    SiGitlab,
    SiJest,
    SiNestjs,
    SiPostgresql,
    SiInfluxdb,
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa6';

// Components
import LinkButton from '../components/LinkButton';
import Timeline from '../components/Timeline';
import NextPageButton from '../components/NextPageButton';
import TechnologyDisplay from '../components/TechnologyDisplay';

export default function Portfolio() {
    const t = useTranslations('PortfolioPage');

    const timelineItems = [
        {
            title: t('project1-title'),
            date: '2024',
            description: t('project1-description'),
            tag: 'VR',
            tagColor: 'bg-red-200',
            tag2: 'AI',
            tag2Color: 'bg-blue-200',
            iconColor: 'bg-red-200',
        },
        {
            title: t('project2-title'),
            date: '2024',
            description: t('project2-description'),
            tag: 'Python',
            tagColor: 'bg-yellow-200',
            tag2: 'AI',
            tag2Color: 'bg-blue-200',
            iconColor: 'bg-yellow-200',
        },
        {
            title: t('project3-title'),
            date: '2024',
            description: t('project3-description'),
            tag: 'React',
            tagColor: 'bg-green-200',
            tag2: 'AI',
            tag2Color: 'bg-blue-200',
            iconColor: 'bg-green-200',
        },
        {
            title: t('project4-title'),
            date: '2023-2024',
            description: t('project4-description'),
            tag: 'React',
            tagColor: 'bg-green-200',
            iconColor: 'bg-green-200',
        },
        {
            title: t('project5-title'),
            date: '2022-2023',
            description: t('project5-description'),
            tag: 'Node.js',
            tagColor: 'bg-orange-200',
            tag2: 'Flutter',
            tag2Color: 'bg-purple-200',
            iconColor: 'bg-orange-200',
        },
    ];

    const technologySections = [
        {
            title: 'Frontend',
            icon: <FaCode />,
            borderColor: 'border-blue-500',
            titleColor: 'text-blue-500',
            iconGradientFrom: 'from-blue-500',
            iconGradientTo: 'to-blue-600',
            technologies: [
                {
                    text: 'React',
                    color: '#61DAFB',
                    icon: <FaReact />,
                    borderColor: '#3B82F6',
                },
                {
                    text: 'Next.js',
                    color: '#fff',
                    icon: '/images/nextjs-icon.png',
                    borderColor: '#3B82F6',
                },
                {
                    text: 'Flutter',
                    color: '#02569B',
                    icon: <SiFlutter />,
                    borderColor: '#3B82F6',
                },
                {
                    text: 'Unity',
                    color: '#000000',
                    icon: <SiUnity />,
                    borderColor: '#3B82F6',
                },
            ],
        },
        {
            title: 'Backend',
            icon: <FaServer />,
            borderColor: 'border-green-500',
            titleColor: 'text-green-500',
            iconGradientFrom: 'from-green-500',
            iconGradientTo: 'to-green-600',
            technologies: [
                {
                    text: 'Node.js',
                    color: '#339933',
                    icon: <FaNodeJs />,
                    borderColor: '#10B981',
                },
                {
                    text: 'Nest.js',
                    color: '#E0234E',
                    icon: <SiNestjs />,
                    borderColor: '#10B981',
                },
                {
                    text: 'Python',
                    color: '#3776AB',
                    icon: <FaPython />,
                    borderColor: '#10B981',
                },
                {
                    text: 'Java',
                    color: '#007396',
                    icon: <FaJava />,
                    borderColor: '#10B981',
                },
                {
                    text: 'C#',
                    color: '#239120',
                    icon: '/images/c-sharp-icon.png',
                    borderColor: '#10B981',
                },
            ],
        },
        {
            title: t('databases'),
            icon: <FaDatabase />,
            borderColor: 'border-orange-500',
            titleColor: 'text-orange-500',
            iconGradientFrom: 'from-orange-500',
            iconGradientTo: 'to-orange-600',
            technologies: [
                {
                    text: 'MySQL',
                    color: '#4479A1',
                    icon: <SiMysql />,
                    borderColor: '#F97316',
                },
                {
                    text: 'PostgreSQL',
                    color: '#336791',
                    icon: <SiPostgresql />,
                    borderColor: '#F97316',
                },
                {
                    text: 'MongoDB',
                    color: '#47A248',
                    icon: <SiMongodb />,
                    borderColor: '#F97316',
                },
                {
                    text: 'InfluxDB',
                    color: '#22ADF6',
                    icon: <SiInfluxdb />,
                    borderColor: '#F97316',
                },
                {
                    text: 'Neo4j',
                    color: '#008CC1',
                    icon: <SiNeo4J />,
                    borderColor: '#F97316',
                },
            ],
        },
        {
            title: 'DevOps',
            icon: <FaCogs />,
            borderColor: 'border-purple-500',
            titleColor: 'text-purple-500',
            iconGradientFrom: 'from-purple-500',
            iconGradientTo: 'to-purple-600',
            technologies: [
                {
                    text: 'Git',
                    color: '#F05032',
                    icon: <FaGitAlt />,
                    borderColor: '#8B5CF6',
                },
                {
                    text: 'Docker',
                    color: '#2496ED',
                    icon: <FaDocker />,
                    borderColor: '#8B5CF6',
                },
                {
                    text: 'Docker Compose',
                    color: '#2496ED',
                    icon: <FaDocker />,
                    borderColor: '#8B5CF6',
                },
                {
                    text: 'Kubernetes',
                    color: '#326CE5',
                    icon: <SiKubernetes />,
                    borderColor: '#8B5CF6',
                },
                {
                    text: 'GitLab CI/CD',
                    color: '#FCA326',
                    icon: <SiGitlab />,
                    borderColor: '#8B5CF6',
                },
                {
                    text: 'Jest',
                    color: '#C21325',
                    icon: <SiJest />,
                    borderColor: '#8B5CF6',
                },
            ],
        },
        {
            title: t('os'),
            icon: <FaDesktop />,
            borderColor: 'border-gray-500',
            titleColor: 'text-gray-500',
            iconGradientFrom: 'from-gray-500',
            iconGradientTo: 'to-gray-600',
            technologies: [
                {
                    text: 'Windows',
                    color: '#0078D6',
                    icon: <FaWindows />,
                    borderColor: '#6B7280',
                },
                {
                    text: 'macOS',
                    color: '#000000',
                    icon: <FaApple />,
                    borderColor: '#6B7280',
                },
                {
                    text: 'Linux',
                    color: '#FCC624',
                    icon: <FaLinux />,
                    borderColor: '#6B7280',
                },
            ],
        },
        {
            title: t('other'),
            icon: <FaTools />,
            borderColor: 'border-cyan-500',
            titleColor: 'text-cyan-500',
            iconGradientFrom: 'from-cyan-500',
            iconGradientTo: 'to-cyan-600',
            technologies: [
                {
                    text: t('blender'),
                    color: '#F5792A',
                    icon: <FaCube />,
                    borderColor: '#06B6D4',
                },
                {
                    text: t('ProcessModeling'),
                    color: '#4285F4',
                    icon: <FaCogs />,
                    borderColor: '#06B6D4',
                },
                {
                    text: t('nginx'),
                    color: '#009639',
                    icon: <FaServer />,
                    borderColor: '#06B6D4',
                },
                {
                    text: t('rpa'),
                    color: '#FF6B35',
                    icon: <FaCogs />,
                    borderColor: '#06B6D4',
                },
                {
                    text: t('vr'),
                    color: '#FF4081',
                    icon: <FaVrCardboard />,
                    borderColor: '#06B6D4',
                },
                {
                    text: t('ai'),
                    color: '#9C27B0',
                    icon: <FaBrain />,
                    borderColor: '#06B6D4',
                },
            ],
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center p-6 pt-20">
                {/* Universities */}
                <h1 className="text-3xl font-bold mb-4">{t('universities')}</h1>
                <div className="flex flex-col gap-6 mb-16 w-full max-w-4xl">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 bg-accent rounded-lg shadow-sm border">
                        <div className="lg:w-1/3">
                            <LinkButton
                                text="DHBW-Stuttgart"
                                color="gray"
                                icon="/images/dhbw.png"
                                link="https://www.dhbw-stuttgart.de"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-6">
                            <p className="text-foreground font-medium">
                                2018-2021: Bachelor Business Information Systems
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 bg-accent rounded-lg shadow-sm border">
                        <div className="lg:w-1/3">
                            <LinkButton
                                text="Universität Osnabrück"
                                color="white"
                                icon="/images/uni-osna.png"
                                textColor="darkRed"
                                link="https://www.uni-osnabrueck.de/startseite/"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-6">
                            <p className="text-foreground font-medium">
                                2021-2024: Master Business Information Systems
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 bg-accent rounded-lg shadow-sm border">
                        <div className="lg:w-1/3">
                            <LinkButton
                                text="Universidad Valladolid"
                                color="rgb(181, 39, 84)"
                                icon="/images/uva.png"
                                link="https://www.uva.es/export/sites/uva/"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-6">
                            <p className="text-foreground font-medium">
                                2023: Semester abroad international commerce
                            </p>
                        </div>
                    </div>
                </div>

                {/* Work */}
                <h1 className="text-3xl font-bold mb-4">{t('work')}</h1>
                <div className="flex flex-col gap-6 mb-16 w-full max-w-4xl">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 bg-accent rounded-lg shadow-sm border">
                        <div className="lg:w-1/3">
                            <LinkButton
                                text="Nolte Küchen"
                                color="white"
                                textColor="black"
                                icon="/images/nolte.png"
                                link="https://www.nolte-kuechen.com/de-de/"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-6">
                            <p className="text-foreground font-medium">
                                2018-2021: Dual Studies
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-4 bg-accent rounded-lg shadow-sm border">
                        <div className="lg:w-1/3">
                            <LinkButton
                                text="DFKI Osnabrück"
                                color="white"
                                textColor="darkBlue"
                                icon="/images/dfki.jpeg"
                                link="https://www.dfki.de/web"
                            />
                        </div>
                        <div className="lg:w-2/3 lg:pl-6">
                            <p className="text-foreground font-medium">
                                2022-2024: Research assistant, since 2025:
                                Researcher
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-8">{t('technologies')}</h1>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full max-w-7xl mb-16">
                    {technologySections.map((section, index) => (
                        <TechnologyDisplay
                            key={index}
                            title={section.title}
                            icon={section.icon}
                            borderColor={section.borderColor}
                            titleColor={section.titleColor}
                            iconGradientFrom={section.iconGradientFrom}
                            iconGradientTo={section.iconGradientTo}
                            technologies={section.technologies}
                        />
                    ))}
                </div>

                <h1 className="text-3xl font-bold mb-8">{t('projects')}</h1>
                {/* Timeline */}
                <div className="pl-6 pr-6 max-w-prose">
                    <Timeline items={timelineItems} />
                    <p className="text-gray-400">... {t('more')}</p>
                </div>
            </div>

            <NextPageButton link="/cv" text="nextPageButtonText-CV" />
        </>
    );
}
